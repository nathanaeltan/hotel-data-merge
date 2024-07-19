export class StringUtils {
  static trimString(str: string): string {
    return str ? str.trim() : "";
  }

  static removeSpace(str: string): string {
    return str.replace(/\s/g, "");
  }

  static removeSpaceArray(arr: string[]): string[] {
    return arr
      .map((str) => StringUtils.removeSpace(str))
      .filter((str) => str !== "");
  }

  static createSpaceBetweenWords(str: string): string {
    return str.replace(/([A-Z])/g, " $1").trim();
  }

  static createSpaceBetweenWordArray(arr: string[]): string[] {
    return arr
      .map((str) => StringUtils.createSpaceBetweenWords(str))
      .filter((str) => str !== "");
  }

  static trimAndCapitalize(str: string): string {
    return str.toUpperCase().trim();
  }

  static capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static capitalizeEveryWord(items: string[]): string[] {
    return items.map((item) => StringUtils.capitalizeFirstLetter(item));
  }

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

    return amenities.map((amenity) => {
      const normalized = amenity.trim().toLowerCase();
      return (
        standardTerms[normalized] ||
        StringUtils.capitalizeFirstLetter(normalized)
      );
    }).filter((amenity) => amenity !== "");
  }
}
