import json
from typing import Any

import redis

from app.config import settings


class Cache:
    def __init__(self) -> None:
        self._client = redis.from_url(settings.redis_url, decode_responses=True)

    def get_json(self, key: str) -> Any | None:
        value = self._client.get(key)
        return json.loads(value) if value else None

    def set_json(self, key: str, value: Any, ttl_seconds: int = 300) -> None:
        self._client.setex(key, ttl_seconds, json.dumps(value))


cache = Cache()
