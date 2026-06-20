from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "AVA Intelligence API"
    app_env: str = "local"
    database_url: str = "postgresql+psycopg://ava:ava@localhost:5432/ava"
    redis_url: str = "redis://localhost:6379/0"
    ollama_url: str = "http://127.0.0.1:11434"
    ollama_model: str = "llama3.2:3b"
    ollama_timeout_seconds: float = 60.0
    allowed_origins: list[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:5500",
        "https://avaintelligent.info",
        "https://www.avaintelligent.info",
        "https://ansarymohammad-pixel.github.io",
    ]

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")


settings = Settings()
