from fastapi import APIRouter, HTTPException, status

from app.schemas import ChatRequest, ChatResponse
from app.services.gemini import GeminiUnavailableError, gemini_service

router = APIRouter()


@router.get("/status")
async def chat_status() -> dict:
    return await gemini_service.status()


@router.post("/message", response_model=ChatResponse)
async def chat_message(request: ChatRequest) -> ChatResponse:
    try:
        return await gemini_service.chat(request)
    except GeminiUnavailableError as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=str(exc),
        ) from exc
