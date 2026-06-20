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
- `GET /chat/status`
- `POST /chat/message`

## Ollama assistant

Install Ollama, then pull the configured model and start the local service:

```powershell
ollama pull llama3.2:3b
ollama serve
```

The default backend connection is `http://127.0.0.1:11434`. Change `OLLAMA_URL` and
`OLLAMA_MODEL` in `.env` when required. The website calls FastAPI, not Ollama directly.

For the public website, deploy FastAPI over HTTPS and set `window.AVA_API_URL` to that URL.
Visitors cannot connect to an Ollama instance running only on your personal computer.

After the first setup, start the complete local stack with:

```powershell
.\start-local.ps1
```

## Environment

Copy `.env.example` to `.env` when you connect real services.

This MVP runs with in-memory sample data first. PostgreSQL, pgvector, and Redis are prepared in `docker-compose.yml` for the next step.
