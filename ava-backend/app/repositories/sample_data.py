from datetime import datetime, timedelta, timezone

from app.schemas import ElectricityPrice, FuelPrice, NewsArticle


def news_articles() -> list[NewsArticle]:
    now = datetime.now(timezone.utc)
    return [
        NewsArticle(
            id="reuters-hormuz",
            publisher="Reuters",
            title="Oil markets react to rising tensions around the Strait of Hormuz",
            url="https://www.reuters.com/",
            source_type="mainstream",
            topic="fuel",
            published_at=now - timedelta(hours=4),
            credibility_score=0.95,
            source_reputation=0.95,
        ),
        NewsArticle(
            id="bloomberg-traders",
            publisher="Bloomberg",
            title="Energy traders watch supply disruption risks in the Gulf",
            url="https://www.bloomberg.com/",
            source_type="mainstream",
            topic="geopolitics",
            published_at=now - timedelta(hours=9),
            credibility_score=0.92,
            source_reputation=0.92,
        ),
        NewsArticle(
            id="meteo-renewable",
            publisher="Official Weather Service",
            title="Strong wind generation may reduce electricity pressure tomorrow",
            url="https://example.com/weather",
            source_type="official",
            topic="electricity",
            published_at=now - timedelta(hours=2),
            credibility_score=0.9,
            source_reputation=0.88,
        ),
    ]


def fuel_prices(country: str) -> list[FuelPrice]:
    source_urls = {
        "france": "https://www.data.gouv.fr/fr/datasets/prix-des-carburants-en-france-flux-instantane-v2/",
        "italy": "https://dgsaie.mise.gov.it/prezzi_carburanti_settimanali.php?lang=en_US",
        "spain": "https://geoportalgasolineras.es/geoportal-instalaciones/Inicio",
    }
    rows = {
        "france": [
            ("TotalEnergies", "15/04/2026", "data.gouv.fr / Roole Data", 2.049, 2.312, "Diesel sous pression"),
            ("Esso Express", "15/04/2026", "data.gouv.fr", 2.061, 2.298, "Bon compromis"),
            ("Carrefour", "15/04/2026", "data.gouv.fr", 2.018, 2.284, "Meilleur SP95"),
        ],
        "italy": [
            ("Eni", "06/04/2026", "MASE weekly fuel prices", 1.762, 2.092, "Diesel eleve"),
            ("Q8", "06/04/2026", "MASE weekly fuel prices", 1.774, 2.104, "Prix stable"),
            ("IP", "06/04/2026", "MASE weekly fuel prices", 1.755, 2.088, "Bon compromis"),
        ],
        "spain": [
            ("Repsol", "13/04/2026", "Geoportal Gasolineras", 1.552, 1.885, "Euro 95 competitif"),
            ("Cepsa", "13/04/2026", "Geoportal Gasolineras", 1.564, 1.892, "Bon compromis"),
            ("Galp", "13/04/2026", "Geoportal Gasolineras", 1.548, 1.878, "Meilleur SP95"),
        ],
    }
    return [
        FuelPrice(
            operator=operator,
            country=country,
            date=date,
            source=source,
            source_url=source_urls[country],
            sp95_eur=sp95,
            diesel_eur=diesel,
            ava_advice=advice,
        )
        for operator, date, source, sp95, diesel, advice in rows[country]
    ]


def electricity_prices(country: str) -> list[ElectricityPrice]:
    values = [0.23, 0.21, 0.19, 0.16, 0.18, 0.26, 0.31, 0.24]
    hours = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"]
    return [
        ElectricityPrice(
            country=country,
            hour=hour,
            price_eur_kwh=price,
            signal="low" if price <= 0.18 else "high" if price >= 0.28 else "medium",
            recommendation="Best time" if price <= 0.18 else "Avoid large appliances" if price >= 0.28 else "Acceptable",
        )
        for hour, price in zip(hours, values)
    ]
