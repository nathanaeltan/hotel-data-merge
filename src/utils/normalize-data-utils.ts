import { StringUtils } from "./string-utils";

export class NormalizeUtils {
  static normalizeAmenitities(amenities: string[]): string[] {
    const standardTerms: { [key: string]: string } = {
      wifi: "Wifi",
      "wi-fi": "Wifi",
      aircon: "Air conditioning",
      "air conditioner": "Air conditioning",
      tv: "Television",
      "coffee machine": "Coffee maker",
      kettle: "Electric kettle",
      "hair dryer": "Hairdryer",
      tub: "Bathtub",
      "bath tub": "Bathtub",
      "outdoor pool": "Outdoor pool",
      "business center": "Business centre",
      businesscenter: "Business centre",
      "dry cleaning": "Dry cleaning service",
      drycleaning: "Dry cleaning service",
      breakfast: "Breakfast included",
      childcare: "Childcare services",
      parking: "Parking available",
      bar: "Bar",
      concierge: "Concierge services",
    };

    return amenities
      .map((amenity) => {
        const normalized = amenity.trim().toLowerCase();
        return (
          standardTerms[normalized] ||
          StringUtils.capitalizeFirstLetter(normalized)
        );
      })
      .filter((amenity) => amenity !== "");
  }

  static normalizeCountry(country: string): string {
    country = country.trim();
    const countryMap: { [key: string]: string } = {
      SG: "Singapore",
      Singapore: "Singapore",
      JP: "Japan",
      Japan: "Japan",
    };

    const normalizedCountry = country.length > 2 ? StringUtils.capitalizeFirstLetter(country.trim()): country.toUpperCase();
    return countryMap[normalizedCountry] || country;
  }
}
