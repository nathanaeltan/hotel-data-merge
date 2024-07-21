import { Amenities, Hotel, ImageCategory } from "../../models/hotel-interfaces";
import { MergeUtil } from "../../utils/merge-hotel-utils";

describe("MergeUtil", () => {
  describe("mergeNames", () => {
    it("should return the longer name", () => {
      const currentHotel = { name: "Longer Hotel Name" } as Hotel;
      const mergingHotel = { name: "Short" } as Hotel;
      const result = MergeUtil.mergeNames(currentHotel, mergingHotel);
      expect(result).toBe(currentHotel.name);
    });
  });

  describe("mergeDescriptions", () => {
    it("should return the longer description", () => {
      const currentHotel = {
        description: "This is a longer description.",
      } as Hotel;
      const mergingHotel = { description: "Short desc" } as Hotel;
      const result = MergeUtil.mergeDescriptions(currentHotel, mergingHotel);
      expect(result).toBe(currentHotel.description);
    });
  });

  describe("mergeAmenities", () => {
    it("should merge and deduplicate amenities", () => {
      const currentHotel = {
        amenities: {
          general: ["WiFi", "Parking"],
          room: ["TV"],
        },
      } as Hotel;
      const mergingHotel = {
        amenities: {
          general: ["Parking", "Pool"],
          room: ["TV", "Air Conditioning"],
        },
      } as Hotel;
      const expectedAmenities: Amenities = {
        general: ["WiFi", "Parking", "Pool"],
        room: ["TV", "Air Conditioning"],
      };
      const result = MergeUtil.mergeAmenities(currentHotel, mergingHotel);
      expect(result).toEqual(expectedAmenities);
    });
  });

  describe("mergeImages", () => {
    it("should merge and deduplicate images", () => {
      const currentHotel = {
        images: {
          rooms: [
            { link: "room1.jpg", description: "Room 1" },
            { link: "room2.jpg", description: "Room 2" },
          ],
          site: [{ link: "site1.jpg", description: "Site 1" }],
          amenities: [{ link: "amenity1.jpg", description: "Amenity 1" }],
        },
      } as Hotel;
      const mergingHotel = {
        images: {
          rooms: [
            { link: "room2.jpg", description: "Room 2" },
            { link: "room3.jpg", description: "Room 3" },
          ],
          site: [{ link: "site2.jpg", description: "Site 2" }],
          amenities: [
            { link: "amenity1.jpg", description: "Amenity 1" },
            { link: "amenity2.jpg", description: "Amenity 2" },
          ],
        },
      } as Hotel;
      const expectedImages: ImageCategory = {
        rooms: [
          { link: "room1.jpg", description: "Room 1" },
          { link: "room2.jpg", description: "Room 2" },
          { link: "room3.jpg", description: "Room 3" },
        ],
        site: [
          { link: "site1.jpg", description: "Site 1" },
          { link: "site2.jpg", description: "Site 2" },
        ],
        amenities: [
          { link: "amenity1.jpg", description: "Amenity 1" },
          { link: "amenity2.jpg", description: "Amenity 2" },
        ],
      };
      const result = MergeUtil.mergeImages(currentHotel, mergingHotel);
      expect(result).toEqual(expectedImages);
    });
  });

  describe("mergeLocations", () => {
    it("should merge locations, preferring non-null values from both hotels", () => {
      const currentHotel = {
        location: {
          lat: 10,
          lng: 20,
          address: "123 Main St",
          city: "",
          country: "Countryland",
        },
      } as Hotel;
      const mergingHotel = {
        location: {
          lat: 0,
          lng: 0,
          address: "",
          city: "Villagetown",
          country: "Countryland",
        },
      } as Hotel;
      const expectedResult = {
        lat: 10,
        lng: 20,
        address: "123 Main St",
        city: "Villagetown",
        country: "Countryland",
      };
      const result = MergeUtil.mergeLocations(currentHotel, mergingHotel);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("mergeBookingConditions", () => {
    it("should merge and deduplicate booking conditions", () => {
      const currentHotel = {
        booking_conditions: ["Non-refundable", "Breakfast included"],
      } as Hotel;
      const mergingHotel = {
        booking_conditions: ["Breakfast included", "Free WiFi"],
      } as Hotel;
      const expectedConditions = [
        "Non-refundable",
        "Breakfast included",
        "Free WiFi",
      ];
      const result = MergeUtil.mergeBookingConditions(
        currentHotel,
        mergingHotel,
      );
      expect(result).toEqual(expectedConditions);
    });
  });
});
