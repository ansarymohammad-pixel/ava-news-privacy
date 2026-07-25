from datetime import datetime, timezone
import json
from pathlib import Path

from fastapi import APIRouter, HTTPException, status

from app.schemas import MindMatchWaitlistRequest, MindMatchWaitlistResponse

router = APIRouter()

WAITLIST_PATH = Path("data/mindmatch_waitlist.jsonl")


@router.post("/mindmatch", response_model=MindMatchWaitlistResponse)
def create_mindmatch_waitlist_entry(
    request: MindMatchWaitlistRequest,
) -> MindMatchWaitlistResponse:
    if not request.consent:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Consent is required to join the waitlist.",
        )

    if "@" not in request.email or "." not in request.email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A valid email address is required.",
        )

    WAITLIST_PATH.parent.mkdir(parents=True, exist_ok=True)
    payload = request.model_dump()
    payload["created_at"] = datetime.now(timezone.utc).isoformat()

    with WAITLIST_PATH.open("a", encoding="utf-8") as file:
        file.write(json.dumps(payload, ensure_ascii=True) + "\n")

    return MindMatchWaitlistResponse(
        status="ok",
        message="MindMatch early-access request saved.",
    )
