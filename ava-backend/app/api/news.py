from fastapi import APIRouter

from app.core.impact_engine import impact_engine
from app.core.news_engine import news_engine

router = APIRouter()


@router.get("/latest")
def latest_news() -> list[dict]:
    return [article.model_dump() for article in news_engine.latest()]


@router.get("/impact")
def news_impact() -> list[dict]:
    articles = news_engine.latest()
    return [impact_engine.score(article).model_dump() for article in articles]
