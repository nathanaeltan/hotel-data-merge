import { StringUtils } from "../../../src/utils/string-utils";

describe("StringUtils", () => {
  describe("trimString", () => {
    it("should trim leading and trailing spaces from a string", () => {
      const input = "  hotel merger  ";
      const expected = "hotel merger";
      expect(StringUtils.trimString(input)).toBe(expected);
    });

    it("should return an empty string if input is empty", () => {
      const input = "";
      const expected = "";
      expect(StringUtils.trimString(input)).toBe(expected);
    });

    it("should return an empty string if input is only spaces", () => {
      const input = "   ";
      const expected = "";
      expect(StringUtils.trimString(input)).toBe(expected);
    });
  });

  describe("trimAndCapitalize", () => {
    it("should trim and capitalize the input string", () => {
      const input = "  hotel merger  ";
      const expected = "HOTEL MERGER";
      expect(StringUtils.trimAndCapitalize(input)).toBe(expected);
    });

    it("should return an empty string if the input is empty", () => {
      const input = "";
      const expected = "";
      expect(StringUtils.trimAndCapitalize(input)).toBe(expected);
    });

    it("should return an empty string if the input is only spaces", () => {
      const input = "   ";
      const expected = "";
      expect(StringUtils.trimAndCapitalize(input)).toBe(expected);
    });
  });
});
