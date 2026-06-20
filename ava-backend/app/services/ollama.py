import httpx

from app.config import settings
from app.schemas import ChatRequest, ChatResponse


SYSTEM_PROMPT = """You are AVA Assistant for the AVA Intelligence website.
Use only the AVA product facts below. Never invent locations, customers, integrations, live prices, or capabilities.

AVA PRODUCT FACTS:
- AVA Fuel compares fuel prices by country and operator, shows official source/date information, and presents explanatory trend estimates influenced by verified news signals.
- AVA ElectricityCost shows electricity price windows, estimates appliance energy cost, and suggests a lower-cost time to run a device.
- AVA Parking is designed to combine parking availability, traffic, and prediction to guide users toward a suitable parking area.
- AVA News Verify evaluates source credibility, rhetoric, freshness, topic relevance, and probable market impact.
- AVA currently presents planning estimates. Actual prices and outcomes depend on official data freshness, location, tariffs, taxes, contracts, and real consumption.

Be concise, practical, and transparent. Never claim a prediction is guaranteed. If a requested fact is not listed above or supplied by the user, say that the information is not available yet. Answer in the requested language. When useful, suggest the relevant AVA product page. Do not provide investment, legal, or emergency advice."""


LANGUAGE_NAMES = {"fr": "French", "en": "English", "es": "Spanish"}


class OllamaUnavailableError(RuntimeError):
    pass


class OllamaService:
    async def status(self) -> dict:
        try:
            async with httpx.AsyncClient(timeout=3.0) as client:
                response = await client.get(f"{settings.ollama_url}/api/tags")
                response.raise_for_status()
                models = [item.get("name", "") for item in response.json().get("models", [])]
                return {
                    "available": True,
                    "model": settings.ollama_model,
                    "model_installed": any(
                        name == settings.ollama_model or name.startswith(f"{settings.ollama_model}:")
                        for name in models
                    ),
                }
        except (httpx.HTTPError, ValueError):
            return {"available": False, "model": settings.ollama_model, "model_installed": False}

    async def chat(self, request: ChatRequest) -> ChatResponse:
        messages = [
            {
                "role": "system",
                "content": (
                    f"{SYSTEM_PROMPT}\nRespond in {LANGUAGE_NAMES[request.language]}. "
                    f"The visitor is currently viewing: {request.page}."
                ),
            }
        ]
        messages.extend(message.model_dump() for message in request.history)
        messages.append({"role": "user", "content": request.message.strip()})

        try:
            async with httpx.AsyncClient(timeout=settings.ollama_timeout_seconds) as client:
                response = await client.post(
                    f"{settings.ollama_url}/api/chat",
                    json={"model": settings.ollama_model, "messages": messages, "stream": False},
                )
                response.raise_for_status()
                answer = response.json().get("message", {}).get("content", "").strip()
        except (httpx.HTTPError, ValueError) as exc:
            raise OllamaUnavailableError("Ollama is unavailable or the configured model is missing.") from exc

        if not answer:
            raise OllamaUnavailableError("Ollama returned an empty response.")

        return ChatResponse(answer=answer, model=settings.ollama_model)


ollama_service = OllamaService()
