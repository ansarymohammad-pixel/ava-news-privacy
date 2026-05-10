from app.repositories.sample_data import news_articles
from app.schemas import NewsArticle


class NewsEngine:
    def latest(self) -> list[NewsArticle]:
        return sorted(news_articles(), key=lambda article: article.published_at, reverse=True)


news_engine = NewsEngine()
