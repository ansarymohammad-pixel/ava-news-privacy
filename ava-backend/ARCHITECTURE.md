# AVA Intelligence Architecture

```text
AVA Website / Mobile App
         |
         v
FastAPI Backend
         |
         v
AVA Intelligence Core
         |
         +-- News Engine
         |     +-- RSS / news APIs
         |     +-- credibility score
         |     +-- source reputation
         |
         +-- Impact Engine
         |     +-- topic relevance
         |     +-- freshness
         |     +-- market sensitivity
         |     +-- impact score
         |
         +-- Prediction Engine
               +-- fuel forecast
               +-- electricity best time
               +-- parking forecast later

         +-- AVA Assistant
               +-- FastAPI chat proxy
               +-- local Ollama model
               +-- grounded AVA product prompt

PostgreSQL + pgvector + Redis cache
         |
External APIs / RSS / official data sources
```

## Impact formula

```text
impact_score =
credibility_score
x source_reputation
x topic_relevance
x freshness
x market_sensitivity
```

## MVP strategy

1. Keep sample data available so the API works immediately.
2. Replace sample data source by source:
   - RSS feeds for news
   - official fuel price APIs
   - day-ahead electricity APIs
3. Store collected articles and impact scores in PostgreSQL.
4. Add pgvector embeddings for source/news similarity and duplicate detection.
5. Add Redis cache around high-traffic endpoints.
