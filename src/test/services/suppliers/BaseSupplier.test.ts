import axios from "axios";
import { BaseSupplier } from "../../../services/suppliers/BaseSupplier";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock subclass to test the abstract BaseSupplier class
class MockSupplier extends BaseSupplier {
  constructor() {
    super("http://mocksupplier.com", "MockSupplier");
  }
  //   For the sake of testing protected method
  public async testFetchSupplierData() {
    return this.fetchSupplierData();
  }
  getId(_hotel: any): string {
    return "mockId";
  }
  getDestinationId(_hotel: any): number {
    return 1;
  }
  getName(_hotel: any): string {
    return "mockName";
  }
  getLocation(_hotel: any): any {
    return { lat: 0, lng: 0 };
  }
  getDescription(_hotel: any): string {
    return "mockDescription";
  }
  getAmenities(_hotel: any): any {
    return { general: [], room: [] };
  }
  getImages(_hotel: any): any {
    return { rooms: [], site: [], amenities: [] };
  }
  getBookingConditions(_hotel: any): string[] {
    return ["condition1", "condition2"];
  }
}

describe("BaseSupplier", () => {
  describe("fetchSupplierData", () => {
    it("should fetch data successfully from an API", async () => {
      const data = [{ id: 1, name: "Hotel Mock" }];
      mockedAxios.get.mockResolvedValue({ data });

      const supplier = new MockSupplier();
      const result = await supplier.testFetchSupplierData();

      expect(result).toEqual(data);
      expect(mockedAxios.get).toHaveBeenCalledWith("http://mocksupplier.com");
    });

    it("should handle fetch error", async () => {
      mockedAxios.get.mockRejectedValue(new Error("Network error"));

      const supplier = new MockSupplier();
      const result = await supplier.testFetchSupplierData();

      expect(result).toEqual([]);
      expect(mockedAxios.get).toHaveBeenCalledWith("http://mocksupplier.com");
    });
  });

  describe("fetchHotels", () => {
    it("should normalize fetched hotel data", async () => {
      const mockHotelData = [{ Id: "1", DestinationId: 1, Name: "Hotel Mock" }];
      mockedAxios.get.mockResolvedValue({ data: mockHotelData });

      const supplier = new MockSupplier();
      const result = await supplier.fetchHotels();

      expect(result).toEqual([
        {
          id: "mockId",
          destination_id: 1,
          name: "mockName",
          location: { lat: 0, lng: 0 },
          description: "mockDescription",
          amenities: { general: [], room: [] },
          images: { rooms: [], site: [], amenities: [] },
          booking_conditions: ["condition1", "condition2"],
        },
      ]);
    });
  });
});
