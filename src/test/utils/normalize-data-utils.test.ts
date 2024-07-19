import { NormalizeUtils } from "../../../src/utils/normalize-data-utils";

describe("NormalizeUtils", () => {
  describe("normalizeAmenitities", () => {
    it("should normalize and capitalize amenities correctly", () => {
      const amenities = [
        "wifi",
        "wi-fi",
        "aircon",
        "tv",
        "coffee machine",
        "kettle",
        "hair dryer",
      ];
      const expected = [
        "Wifi",
        "Wifi",
        "Air conditioning",
        "Television",
        "Coffee maker",
        "Electric kettle",
        "Hairdryer",
      ];
      expect(NormalizeUtils.normalizeAmenitities(amenities)).toEqual(expected);
    });

    it("should return an empty array if no amenities are provided", () => {
      expect(NormalizeUtils.normalizeAmenitities([])).toEqual([]);
    });
  });

  describe("normalizeCountry", () => {
    it("should normalize country names and codes correctly", () => {
      const countries = ["SG", "Singapore", "JP", "Japan", "US"];
      const expected = ["Singapore", "Singapore", "Japan", "Japan", "US"];
      countries.forEach((country, index) => {
        expect(NormalizeUtils.normalizeCountry(country)).toBe(expected[index]);
      });
    });

    it("should return the original country if it's not in the map", () => {
      const country = "Germany";
      expect(NormalizeUtils.normalizeCountry(country)).toBe("Germany");
    });
  });
});