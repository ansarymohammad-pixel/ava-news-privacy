# AVA Backend MVP

FastAPI backend for the AVA ecosystem:

- AVA News collects and scores news signals.
- Impact Engine converts verified news into market impact.
- Prediction Engine exposes simple fuel and electricity forecasts.

## Run locally

```powershell
cd ava-backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Open:

- `http://127.0.0.1:8000/docs`
- `http://127.0.0.1:8000/health`

## Main endpoints

- `GET /news/latest`
- `GET /news/impact`
- `GET /fuel/prices?country=france`
- `GET /fuel/prediction?country=france`
- `GET /electricity/prices?country=france`
- `GET /electricity/best-time?country=france&device=washing_machine`

## Environment

Copy `.env.example` to `.env` when you connect real services.

This MVP runs with in-memory sample data first. PostgreSQL, pgvector, and Redis are prepared in `docker-compose.yml` for the next step.
