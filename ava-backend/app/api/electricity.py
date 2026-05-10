from fastapi import APIRouter, Query

from app.core.prediction_engine import prediction_engine
from app.repositories.sample_data import electricity_prices

router = APIRouter()


@router.get("/prices")
def prices(country: str = Query("france", pattern="^(france|italy|spain)$")) -> dict:
    return {"country": country, "rows": [row.model_dump() for row in electricity_prices(country)]}


@router.get("/best-time")
def best_time(
    country: str = Query("france", pattern="^(france|italy|spain)$"),
    device: str = "washing_machine",
    power_kw: float = 2.0,
    duration_hours: float = 1.5,
) -> dict:
    return prediction_engine.electricity_best_time(
        country=country,
        device=device,
        power_kw=power_kw,
        duration_hours=duration_hours,
    ).model_dump()
