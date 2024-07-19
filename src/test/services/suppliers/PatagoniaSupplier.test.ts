import { PatagoniaSupplierHotel } from "../../../models/supplier-interfaces";
import { PatagoniaSupplier } from "../../../services/suppliers/PatagoniaSupplier";

describe("PatagoniaSupplier", () => {
  let patagoniaSupplier: PatagoniaSupplier;
  let mockHotel: PatagoniaSupplierHotel;

  beforeEach(() => {
    patagoniaSupplier = new PatagoniaSupplier();
    mockHotel = {
      id: "142",
      destination: 456,
      name: "Patagonia Test Hotel",
      lat: -33.0,
      lng: 65.0,
      address: "456 Patagonia St",
      info: "A nice hotel in Patagonia",
      amenities: ["Pool", "Free WiFi"],
      images: {
        rooms: [
          { url: "http://example.com/room1.jpg", description: "Room view" },
          { url: "http://example.com/room2.jpg", description: "Another room view" }
        ],
        amenities: [
          { url: "http://example.com/spa.jpg", description: "Spa" },
          { url: "http://example.com/wifi.jpg", description: "Free WiFi" }
        ]
      }
    };
  });

  test("getId should return the hotel's ID", () => {
    expect(patagoniaSupplier.getId(mockHotel)).toBe("142");
  });

  test("getName should return the hotel's name", () => {
    expect(patagoniaSupplier.getName(mockHotel)).toBe("Patagonia Test Hotel");
  });

  test("getDestinationId should return the hotel's destination ID", () => {
    expect(patagoniaSupplier.getDestinationId(mockHotel)).toBe(456);
  });

  test("getLocation should return the hotel's location", () => {
    const expectedLocation = {
      lat: -33.0,
      lng: 65.0,
      address: "456 Patagonia St",
      city: "",
      country: "",
    };
    expect(patagoniaSupplier.getLocation(mockHotel)).toEqual(expectedLocation);
  });

  test("getDescription should return the hotel's description", () => {
    expect(patagoniaSupplier.getDescription(mockHotel)).toBe("A cozy hotel in Patagonia");
  });

  test("getAmenities should return the hotel's amenities", () => {
    const expectedAmenities = {
      general: ["Spa", "Free WiFi"],
      room: [],
    };
    expect(patagoniaSupplier.getAmenities(mockHotel)).toEqual(expectedAmenities);
  });

  test("getImages should return the hotel's images", () => {
    const expectedImages = {
      rooms: [
        { link: "http://example.com/room1.jpg", description: "Room view" },
        { link: "http://example.com/room2.jpg", description: "Another room view" }
      ],
      site: [],
      amenities: [
        { link: "http://example.com/spa.jpg", description: "Spa" },
        { link: "http://example.com/wifi.jpg", description: "Free WiFi" }
      ],
    };
    expect(patagoniaSupplier.getImages(mockHotel)).toEqual(expectedImages);
  });

  test("getBookingConditions should return an empty array", () => {
    expect(patagoniaSupplier.getBookingConditions(mockHotel)).toEqual([]);
  });
});