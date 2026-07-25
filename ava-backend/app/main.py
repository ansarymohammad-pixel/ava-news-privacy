from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import chat, electricity, fuel, news, waitlist
from app.config import settings

app = FastAPI(
    title=settings.app_name,
    version="0.1.0",
    description="AVA Intelligence backend for news verification, impact scoring, and price predictions.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(news.router, prefix="/news", tags=["news"])
app.include_router(fuel.router, prefix="/fuel", tags=["fuel"])
app.include_router(electricity.router, prefix="/electricity", tags=["electricity"])
app.include_router(chat.router, prefix="/chat", tags=["chat"])
app.include_router(waitlist.router, prefix="/waitlist", tags=["waitlist"])


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "environment": settings.app_env}
