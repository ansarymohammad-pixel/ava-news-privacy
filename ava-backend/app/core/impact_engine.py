from datetime import datetime, timezone

from app.schemas import ImpactScore, NewsArticle


TOPIC_RELEVANCE = {
    "fuel": 0.95,
    "electricity": 0.9,
    "geopolitics": 0.86,
    "weather": 0.78,
    "taxes": 0.82,
    "strike": 0.76,
    "parking": 0.54,
}

MARKET_SENSITIVITY = {
    "fuel": 0.92,
    "electricity": 0.88,
    "geopolitics": 0.84,
    "weather": 0.72,
    "taxes": 0.8,
    "strike": 0.7,
    "parking": 0.48,
}


class ImpactEngine:
    def score(self, article: NewsArticle) -> ImpactScore:
        freshness = self._freshness(article)
        topic_relevance = TOPIC_RELEVANCE[article.topic]
        market_sensitivity = MARKET_SENSITIVITY[article.topic]
        impact_score = round(
            article.credibility_score
            * article.source_reputation
            * topic_relevance
            * freshness
            * market_sensitivity,
            4,
        )

        direction = "up"
        if "diplomacy" in article.title.lower() or "renewable" in article.title.lower():
            direction = "down"
        elif impact_score < 0.25:
            direction = "stable"

        return ImpactScore(
            article_id=article.id,
            publisher=article.publisher,
            topic=article.topic,
            direction=direction,
            credibility_score=article.credibility_score,
            source_reputation=article.source_reputation,
            topic_relevance=topic_relevance,
            freshness=freshness,
            market_sensitivity=market_sensitivity,
            impact_score=impact_score,
            explanation=self._explain(article, impact_score),
        )

    def _freshness(self, article: NewsArticle) -> float:
        age_hours = (datetime.now(timezone.utc) - article.published_at).total_seconds() / 3600
        if age_hours <= 6:
            return 1.0
        if age_hours <= 24:
            return 0.86
        if age_hours <= 72:
            return 0.62
        return 0.35

    def _explain(self, article: NewsArticle, score: float) -> str:
        if score >= 0.55:
            return f"High-confidence {article.topic} signal from {article.publisher}."
        if score >= 0.32:
            return f"Medium signal: useful but should be confirmed with additional sources."
        return f"Low signal: monitor, but do not strongly affect forecasts yet."


impact_engine = ImpactEngine()
