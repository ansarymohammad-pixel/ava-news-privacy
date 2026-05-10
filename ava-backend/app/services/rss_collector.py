from datetime import datetime, timezone
from hashlib import sha1

import feedparser

from app.schemas import NewsArticle


SOURCE_REPUTATION = {
    "reuters.com": 0.95,
    "bbc.co.uk": 0.9,
    "bloomberg.com": 0.92,
    "apnews.com": 0.9,
}


class RssCollector:
    def collect(self, feed_urls: list[str]) -> list[NewsArticle]:
        articles: list[NewsArticle] = []
        for feed_url in feed_urls:
            parsed = feedparser.parse(feed_url)
            publisher = parsed.feed.get("title", "Unknown publisher")
            for entry in parsed.entries[:20]:
                title = entry.get("title", "Untitled")
                url = entry.get("link", feed_url)
                articles.append(
                    NewsArticle(
                        id=sha1(url.encode("utf-8")).hexdigest(),
                        publisher=publisher,
                        title=title,
                        url=url,
                        source_type="mainstream",
                        topic=self._infer_topic(title),
                        published_at=self._published_at(entry),
                        credibility_score=0.82,
                        source_reputation=self._source_reputation(url),
                    )
                )
        return articles

    def _infer_topic(self, title: str) -> str:
        lowered = title.lower()
        if any(word in lowered for word in ["oil", "fuel", "diesel", "petrol", "gasoline"]):
            return "fuel"
        if any(word in lowered for word in ["electricity", "power", "grid", "renewable"]):
            return "electricity"
        if any(word in lowered for word in ["strike", "protest"]):
            return "strike"
        if any(word in lowered for word in ["tax", "tariff"]):
            return "taxes"
        if any(word in lowered for word in ["storm", "wind", "weather"]):
            return "weather"
        return "geopolitics"

    def _published_at(self, entry) -> datetime:
        if entry.get("published_parsed"):
            return datetime(*entry.published_parsed[:6], tzinfo=timezone.utc)
        return datetime.now(timezone.utc)

    def _source_reputation(self, url: str) -> float:
        for domain, reputation in SOURCE_REPUTATION.items():
            if domain in url:
                return reputation
        return 0.7


rss_collector = RssCollector()
