import { PaperfliesSupplierHotel } from "../../../models/supplier-interfaces";
import { PaperfliesSupplier } from "../../../services/suppliers/PaperfliesSupplier";

describe("PaperfliesSupplier", () => {
  let supplier: PaperfliesSupplier;
  let mockHotel: PaperfliesSupplierHotel;

  beforeEach(() => {
    supplier = new PaperfliesSupplier();
    mockHotel = {
      hotel_id: "1",
      hotel_name: "Test Hotel",
      destination_id: 233,
      location: {
        address: "123 Test St",
        country: "SG",
      },
      amenities: {
        general: ["wifi", "parking"],
        room: ["air conditioning", "tv"],
      },
      images: {
        rooms: [{ link: "room.jpg", caption: "Room view" }],
        site: [{ link: "site.jpg", caption: "Site view" }],
      },
      booking_conditions: ["condition1", "condition2"],
      details: "Hotel details",
    };
  });

  test("getId should return the correct hotel ID", () => {
    expect(supplier.getId(mockHotel)).toBe("1");
  });

  test("getName should return the trimmed and capitalized hotel name", () => {
    expect(supplier.getName(mockHotel)).toBe("Test Hotel");
  });

  test("getDestinationId should return the correct destination ID", () => {
    expect(supplier.getDestinationId(mockHotel)).toBe(233);
  });

  test("getLocation should return a normalized location object", () => {
    const expectedLocation = {
      address: "123 TEST ST",
      country: "Singapore",
      lat: 0,
      lng: 0,
      city: "",
    };
    expect(supplier.getLocation(mockHotel)).toEqual(expectedLocation);
  });

  test("getAmenities should return normalized amenities", () => {
    const expectedAmenities = {
      general: ["Wifi", "Parking available"],
      room: ["Air conditioning", "Television"],
    };
    expect(supplier.getAmenities(mockHotel)).toEqual(expectedAmenities);
  });

  test("getImages should return correctly formatted images", () => {
    const expectedImages = {
      rooms: [{ link: "room.jpg", description: "ROOM VIEW" }],
      site: [{ link: "site.jpg", description: "SITE VIEW" }],
      amenities: [],
    };
    expect(supplier.getImages(mockHotel)).toEqual(expectedImages);
  });
});
