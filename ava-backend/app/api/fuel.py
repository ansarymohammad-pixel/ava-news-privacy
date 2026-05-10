from fastapi import APIRouter, Query

from app.core.prediction_engine import prediction_engine
from app.repositories.sample_data import fuel_prices

router = APIRouter()


@router.get("/prices")
def prices(country: str = Query("france", pattern="^(france|italy|spain)$")) -> dict:
    return {"country": country, "rows": [row.model_dump() for row in fuel_prices(country)]}


@router.get("/prediction")
def prediction(country: str = Query("france", pattern="^(france|italy|spain)$")) -> dict:
    return prediction_engine.fuel_forecast(country).model_dump()
