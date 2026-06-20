from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "AVA Intelligence API"
    app_env: str = "local"
    database_url: str = "postgresql+psycopg://ava:ava@localhost:5432/ava"
    redis_url: str = "redis://localhost:6379/0"
    gemini_api_key: str = ""
    gemini_model: str = "gemini-2.5-flash"
    gemini_api_url: str = "https://generativelanguage.googleapis.com/v1beta"
    gemini_timeout_seconds: float = 60.0
    allowed_origins: list[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:5500",
        "https://avaintelligent.info",
        "https://www.avaintelligent.info",
        "https://ansarymohammad-pixel.github.io",
    ]

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")


settings = Settings()
