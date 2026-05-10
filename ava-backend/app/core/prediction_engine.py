from statistics import mean

from app.core.impact_engine import impact_engine
from app.repositories.sample_data import electricity_prices, fuel_prices, news_articles
from app.schemas import ElectricityBestTime, FuelForecast, ForecastPoint


class PredictionEngine:
    def fuel_forecast(self, country: str) -> FuelForecast:
        prices = fuel_prices(country)
        impacts = [impact_engine.score(article) for article in news_articles()]
        fuel_impacts = [impact for impact in impacts if impact.topic in {"fuel", "geopolitics", "taxes", "strike"}]
        avg_impact = mean([impact.impact_score for impact in fuel_impacts]) if fuel_impacts else 0.0
        avg_sp95 = mean([row.sp95_eur for row in prices])

        expected_change = round((avg_impact - 0.35) * 0.18, 3)
        direction = "up" if expected_change > 0.015 else "down" if expected_change < -0.015 else "stable"
        points = [
            ForecastPoint(label="Mon", value=round(avg_sp95 - 0.04, 3)),
            ForecastPoint(label="Tue", value=round(avg_sp95 - 0.02, 3)),
            ForecastPoint(label="Wed", value=round(avg_sp95, 3)),
            ForecastPoint(label="Thu", value=round(avg_sp95 + expected_change / 2, 3)),
            ForecastPoint(label="Fri", value=round(avg_sp95 + expected_change, 3)),
            ForecastPoint(label="Sat", value=round(avg_sp95 + expected_change * 0.7, 3)),
            ForecastPoint(label="Sun", value=round(avg_sp95 + expected_change * 0.4, 3)),
        ]

        return FuelForecast(
            country=country,
            direction=direction,
            confidence=round(min(0.92, 0.58 + avg_impact), 2),
            expected_change_eur_l=expected_change,
            points=points,
            explanation="Forecast combines official fuel prices with verified AVA News impact signals.",
        )

    def electricity_best_time(
        self,
        country: str,
        device: str,
        power_kw: float,
        duration_hours: float,
    ) -> ElectricityBestTime:
        prices = electricity_prices(country)
        best = min(prices, key=lambda row: row.price_eur_kwh)
        estimated_kwh = round(power_kw * duration_hours, 3)
        estimated_cost = round(estimated_kwh * best.price_eur_kwh, 3)
        risk = "high" if power_kw >= 3.0 else "medium" if power_kw >= 2.0 else "low"

        return ElectricityBestTime(
            country=country,
            device=device,
            best_start_hour=best.hour,
            estimated_kwh=estimated_kwh,
            estimated_cost_eur=estimated_cost,
            risk=risk,
            explanation="Best time is selected from the lowest available kWh price in the next sample window.",
        )


prediction_engine = PredictionEngine()
