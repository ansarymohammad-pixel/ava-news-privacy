from fastapi import APIRouter, HTTPException, status

from app.schemas import ChatRequest, ChatResponse
from app.services.ollama import OllamaUnavailableError, ollama_service

router = APIRouter()


@router.get("/status")
async def chat_status() -> dict:
    return await ollama_service.status()


@router.post("/message", response_model=ChatResponse)
async def chat_message(request: ChatRequest) -> ChatResponse:
    try:
        return await ollama_service.chat(request)
    except OllamaUnavailableError as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=str(exc),
        ) from exc
