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


class GeminiUnavailableError(RuntimeError):
    pass


class GeminiService:
    @property
    def model_url(self) -> str:
        base_url = settings.gemini_api_url.rstrip("/")
        return f"{base_url}/models/{settings.gemini_model}"

    async def status(self) -> dict:
        if not settings.gemini_api_key:
            return {
                "available": False,
                "provider": "gemini",
                "model": settings.gemini_model,
                "reason": "api_key_missing",
            }

        try:
            async with httpx.AsyncClient(timeout=4.0) as client:
                response = await client.get(
                    self.model_url,
                    headers={"x-goog-api-key": settings.gemini_api_key},
                )
                response.raise_for_status()
        except (httpx.HTTPError, ValueError):
            return {
                "available": False,
                "provider": "gemini",
                "model": settings.gemini_model,
                "reason": "provider_unavailable",
            }

        return {"available": True, "provider": "gemini", "model": settings.gemini_model}

    async def chat(self, request: ChatRequest) -> ChatResponse:
        if not settings.gemini_api_key:
            raise GeminiUnavailableError("Gemini API key is not configured on the server.")

        contents = []
        for message in request.history:
            role = "model" if message.role == "assistant" else "user"
            contents.append({"role": role, "parts": [{"text": message.content}]})
        contents.append({"role": "user", "parts": [{"text": request.message.strip()}]})

        payload = {
            "system_instruction": {
                "parts": [
                    {
                        "text": (
                            f"{SYSTEM_PROMPT}\nRespond in {LANGUAGE_NAMES[request.language]}. "
                            f"The visitor is currently viewing: {request.page}."
                        )
                    }
                ]
            },
            "contents": contents,
            "generationConfig": {"temperature": 0.3, "maxOutputTokens": 500},
        }

        try:
            async with httpx.AsyncClient(timeout=settings.gemini_timeout_seconds) as client:
                response = await client.post(
                    f"{self.model_url}:generateContent",
                    headers={"x-goog-api-key": settings.gemini_api_key},
                    json=payload,
                )
                response.raise_for_status()
                parts = response.json()["candidates"][0]["content"]["parts"]
                answer = "".join(part.get("text", "") for part in parts).strip()
        except (httpx.HTTPError, KeyError, IndexError, TypeError, ValueError) as exc:
            raise GeminiUnavailableError("Gemini is unavailable or returned an invalid response.") from exc

        if not answer:
            raise GeminiUnavailableError("Gemini returned an empty response.")

        return ChatResponse(answer=answer, model=settings.gemini_model)


gemini_service = GeminiService()
