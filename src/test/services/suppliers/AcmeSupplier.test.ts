import { AcmeSupplierHotel } from "../../../models/supplier-interfaces";
import { AcmeSupplier } from "../../../services/suppliers/AcmeSupplier";
// import { StringUtils } from "../../../utils/string-utils";

// jest.mock("../../../utils/string-utils", () => ({
//   StringUtils: {
//     trimString: jest.fn((input) => input.trim()),
//     removeSpaceArray: jest.fn((input) => input.filter((i: string) => i.trim())),
//   },
// }));

describe("AcmeSupplier", () => {
  let acmeSupplier: AcmeSupplier;
  let mockHotel: AcmeSupplierHotel;

  beforeEach(() => {
    acmeSupplier = new AcmeSupplier();
    mockHotel = {
      Id: "1",
      DestinationId: 123,
      Name: " Test Hotel ",
      Latitude: 45.0,
      Longitude: -45.0,
      Address: " 123 Test St ",
      City: "TestCity",
      Country: "TestCountry",
      Description: " A test hotel ",
      Facilities: [" Pool ", " Gym ", ""],
      PostalCode: "238909",
    };
  });

  test("getId should return the hotel's ID", () => {
    expect(acmeSupplier.getId(mockHotel)).toBe("1");
  });

  test("getName should trim the hotel's name", () => {
    expect(acmeSupplier.getName(mockHotel)).toBe("Test Hotel");
  });

  test("getDestinationId should return the hotel's destination ID", () => {
    expect(acmeSupplier.getDestinationId(mockHotel)).toBe(123);
  });

  test("getLocation should return the hotel's location", () => {
    const expectedLocation = {
      lat: 45.0,
      lng: -45.0,
      address: "123 Test St",
      city: "TestCity",
      country: "TestCountry",
    };
    expect(acmeSupplier.getLocation(mockHotel)).toEqual(expectedLocation);
  });

  test("getDescription should trim the hotel's description", () => {
    expect(acmeSupplier.getDescription(mockHotel)).toBe("A test hotel");
  });

  test("getAmenities should return the hotel's amenities with no spaces", () => {
    const expectedAmenities = {
      general: ["Pool", "Gym"],
      room: [],
    };
    expect(acmeSupplier.getAmenities(mockHotel)).toEqual(expectedAmenities);
  });

  test("getImages should return an empty ImageCategory object", () => {
    const expectedImages = {
      rooms: [],
      site: [],
      amenities: [],
    };
    expect(acmeSupplier.getImages(mockHotel)).toEqual(expectedImages);
  });

  test("getBookingConditions should return an empty array", () => {
    expect(acmeSupplier.getBookingConditions(mockHotel)).toEqual([]);
  });
});