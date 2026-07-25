from collections import defaultdict
from datetime import date, datetime, timedelta, timezone
import hashlib
import json
from pathlib import Path

from fastapi import APIRouter, Request

from app.schemas import (
    AnalyticsDailyPoint,
    AnalyticsSummaryResponse,
    AnalyticsVisitRequest,
    AnalyticsVisitResponse,
)

router = APIRouter()

ANALYTICS_PATH = Path("data/analytics_events.jsonl")


def _visitor_hash(request: Request, day: str) -> str:
    host = request.client.host if request.client else "unknown"
    user_agent = request.headers.get("user-agent", "")
    source = f"{host}|{user_agent}|{day}"
    return hashlib.sha256(source.encode("utf-8")).hexdigest()[:24]


@router.post("/visit", response_model=AnalyticsVisitResponse)
def record_visit(payload: AnalyticsVisitRequest, request: Request) -> AnalyticsVisitResponse:
    now = datetime.now(timezone.utc)
    event = payload.model_dump()
    event["created_at"] = now.isoformat()
    event["date"] = now.date().isoformat()
    event["visitor_hash"] = _visitor_hash(request, event["date"])

    ANALYTICS_PATH.parent.mkdir(parents=True, exist_ok=True)
    with ANALYTICS_PATH.open("a", encoding="utf-8") as file:
        file.write(json.dumps(event, ensure_ascii=True) + "\n")

    return AnalyticsVisitResponse(status="ok")


@router.get("/daily", response_model=AnalyticsSummaryResponse)
def daily_summary(days: int = 14) -> AnalyticsSummaryResponse:
    days = max(1, min(days, 90))
    today = date.today()
    start = today - timedelta(days=days - 1)

    page_views: dict[str, int] = defaultdict(int)
    unique_visitors: dict[str, set[str]] = defaultdict(set)

    if ANALYTICS_PATH.exists():
        with ANALYTICS_PATH.open("r", encoding="utf-8") as file:
            for line in file:
                try:
                    event = json.loads(line)
                except json.JSONDecodeError:
                    continue
                event_date = event.get("date")
                if not event_date or event_date < start.isoformat():
                    continue
                page_views[event_date] += 1
                unique_visitors[event_date].add(event.get("visitor_hash", "unknown"))

    points = []
    for offset in range(days):
      day = (start + timedelta(days=offset)).isoformat()
      points.append(
          AnalyticsDailyPoint(
              date=day,
              page_views=page_views[day],
              unique_visitors=len(unique_visitors[day]),
          )
      )

    return AnalyticsSummaryResponse(
        days=points,
        total_page_views=sum(point.page_views for point in points),
        total_unique_visitors=sum(point.unique_visitors for point in points),
    )
