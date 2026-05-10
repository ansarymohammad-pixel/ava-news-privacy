from app.repositories.sample_data import electricity_prices, fuel_prices


class OfficialDataService:
    def fuel_prices(self, country: str):
        return fuel_prices(country)

    def electricity_prices(self, country: str):
        return electricity_prices(country)


official_data = OfficialDataService()
