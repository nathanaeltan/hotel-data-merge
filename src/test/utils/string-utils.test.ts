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

  describe("removeSpace", () => {
    it("should remove all spaces from a string", () => {
      const input = "h o t e l  m e r g e";
      const expected = "hotelmerge";
      expect(StringUtils.removeSpace(input)).toBe(expected);
    });

    it("should return the original string if there are no spaces", () => {
      const input = "hotelmerger";
      const expected = "hotelmerger";
      expect(StringUtils.removeSpace(input)).toBe(expected);
    });

    it("should return an empty string if input is only spaces", () => {
      const input = "     ";
      const expected = "";
      expect(StringUtils.removeSpace(input)).toBe(expected);
    });
  });

  describe("removeSpaceArray", () => {
    it("should remove all spaces from strings in an array and filter out empty strings", () => {
      const input = [" hotel ", "merge", " ", " data ", "  "];
      const expected = ["hotel", "merge", "data"];
      expect(StringUtils.removeSpaceArray(input)).toEqual(expected);
    });

    it("should return an empty array if all elements are spaces", () => {
      const input = [" ", "  ", "   "];
      const expected: any[] = [];
      expect(StringUtils.removeSpaceArray(input)).toEqual(expected);
    });

    it("should return the original array if there are no spaces", () => {
      const input = ["hotel", "merger", "data"];
      const expected = ["hotel", "merger", "data"];
      expect(StringUtils.removeSpaceArray(input)).toEqual(expected);
    });
  });

  describe("createSpaceBetweenWords", () => {
    it("should insert a space before each uppercase letter in a string", () => {
      const input = "HotelMergerData";
      const expected = "Hotel Merger Data";
      expect(StringUtils.createSpaceBetweenWords(input)).toBe(expected);
    });

    it("should not insert a space before the first letter if it is uppercase", () => {
      const input = "DataMerge";
      const expected = "Data Merge";
      expect(StringUtils.createSpaceBetweenWords(input)).toBe(expected);
    });

    it("should return the original string if there are no uppercase letters", () => {
      const input = "hotel merger";
      const expected = "hotel merger";
      expect(StringUtils.createSpaceBetweenWords(input)).toBe(expected);
    });
  });

  describe("createSpaceBetweenWordArray", () => {
    it("should insert a space before each uppercase letter in each string of the array", () => {
      const input = ["HotelMerger", "DataMerge"];
      const expected = ["Hotel Merger", "Data Merge"];
      expect(StringUtils.createSpaceBetweenWordArray(input)).toEqual(expected);
    });

    it("should return an empty array if the input array is empty", () => {
      const input: string[] = [];
      const expected: string[] = [];
      expect(StringUtils.createSpaceBetweenWordArray(input)).toEqual(expected);
    });

    it("should filter out empty strings after processing", () => {
      const input = ["", "HotelMerger", "", "DataMerge", ""];
      const expected = ["Hotel Merger", "Data Merge"];
      expect(StringUtils.createSpaceBetweenWordArray(input)).toEqual(expected);
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