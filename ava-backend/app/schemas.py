from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field


MarketTopic = Literal["fuel", "electricity", "parking", "geopolitics", "weather", "taxes", "strike"]
ImpactDirection = Literal["up", "down", "stable"]


class NewsArticle(BaseModel):
    id: str
    publisher: str
    title: str
    url: str
    source_type: Literal["mainstream", "institute", "official", "state", "independent"]
    topic: MarketTopic
    published_at: datetime
    credibility_score: float = Field(ge=0, le=1)
    source_reputation: float = Field(ge=0, le=1)


class ImpactScore(BaseModel):
    article_id: str
    publisher: str
    topic: MarketTopic
    direction: ImpactDirection
    credibility_score: float
    source_reputation: float
    topic_relevance: float
    freshness: float
    market_sensitivity: float
    impact_score: float
    explanation: str


class FuelPrice(BaseModel):
    operator: str
    country: Literal["france", "italy", "spain"]
    date: str
    source: str
    source_url: str
    sp95_eur: float
    diesel_eur: float
    ava_advice: str


class ElectricityPrice(BaseModel):
    country: Literal["france", "italy", "spain"]
    hour: str
    price_eur_kwh: float
    signal: Literal["low", "medium", "high"]
    recommendation: str


class ForecastPoint(BaseModel):
    label: str
    value: float


class FuelForecast(BaseModel):
    country: Literal["france", "italy", "spain"]
    direction: ImpactDirection
    confidence: float = Field(ge=0, le=1)
    expected_change_eur_l: float
    points: list[ForecastPoint]
    explanation: str


class ElectricityBestTime(BaseModel):
    country: Literal["france", "italy", "spain"]
    device: str
    best_start_hour: str
    estimated_kwh: float
    estimated_cost_eur: float
    risk: Literal["low", "medium", "high"]
    explanation: str


class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str = Field(min_length=1, max_length=4000)


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=2000)
    history: list[ChatMessage] = Field(default_factory=list, max_length=10)
    language: Literal["fr", "en", "es"] = "fr"
    page: str = Field(default="website", max_length=100)


class ChatResponse(BaseModel):
    answer: str
    model: str


class MindMatchWaitlistRequest(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: str = Field(min_length=5, max_length=180)
    city: str = Field(min_length=2, max_length=120)
    profile_type: Literal["startup_owner", "join_startup"]
    skills_offered: str = Field(min_length=2, max_length=500)
    skills_needed: str = Field(min_length=2, max_length=500)
    industry_interests: str = Field(min_length=2, max_length=500)
    linkedin_url: str = Field(default="", max_length=240)
    consent: bool
    traffic_source: str = Field(default="website", max_length=120)


class MindMatchWaitlistResponse(BaseModel):
    status: Literal["ok"]
    message: str


class AnalyticsVisitRequest(BaseModel):
    page: str = Field(min_length=1, max_length=160)
    title: str = Field(default="", max_length=180)
    referrer: str = Field(default="", max_length=300)
    language: Literal["fr", "en", "es"] = "fr"
    traffic_source: str = Field(default="direct", max_length=120)
    visitor_id: str = Field(default="", max_length=120)
    session_id: str = Field(default="", max_length=120)
    screen_size: str = Field(default="", max_length=40)


class AnalyticsVisitResponse(BaseModel):
    status: Literal["ok"]


class AnalyticsDailyPoint(BaseModel):
    date: str
    page_views: int
    unique_visitors: int


class AnalyticsSummaryResponse(BaseModel):
    days: list[AnalyticsDailyPoint]
    total_page_views: int
    total_unique_visitors: int
