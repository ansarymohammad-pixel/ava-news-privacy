from datetime import datetime

from sqlalchemy import DateTime, Float, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db import Base


class ArticleRecord(Base):
    __tablename__ = "articles"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    external_id: Mapped[str] = mapped_column(String(160), unique=True, index=True)
    publisher: Mapped[str] = mapped_column(String(120), index=True)
    title: Mapped[str] = mapped_column(Text)
    url: Mapped[str] = mapped_column(Text)
    source_type: Mapped[str] = mapped_column(String(40))
    topic: Mapped[str] = mapped_column(String(40), index=True)
    published_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), index=True)
    credibility_score: Mapped[float] = mapped_column(Float)
    source_reputation: Mapped[float] = mapped_column(Float)


class ImpactRecord(Base):
    __tablename__ = "impact_scores"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    article_external_id: Mapped[str] = mapped_column(String(160), index=True)
    topic: Mapped[str] = mapped_column(String(40), index=True)
    direction: Mapped[str] = mapped_column(String(20))
    impact_score: Mapped[float] = mapped_column(Float, index=True)
    explanation: Mapped[str] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), index=True)
