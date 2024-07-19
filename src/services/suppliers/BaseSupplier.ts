import axios from "axios";
import {
  Amenities,
  Hotel,
  ImageCategory,
  Location,
} from "../../models/hotel-interfaces";
import { SupplierHotelInput } from "../../models/supplier-interfaces";

export abstract class BaseSupplier {
  protected supplierURL: string;
  protected supplierName: string;

  constructor(supplierURL: string, supplierName: string) {
    this.supplierURL = supplierURL;
    this.supplierName = supplierName;
  }

  protected async fetchSupplierData(): Promise<any[]> {
    try {
      const response = await axios.get(this.supplierURL);
      return response.data;
    } catch (error) {
      console.error(`Error querying ${this.supplierName} data endpoint`);
      return [];
    }
  }
  async fetchHotels() {
    const hotelData = await this.fetchSupplierData();
    return hotelData.map(this.normalizeHotelData);
  }

  protected normalizeHotelData = (hotel: SupplierHotelInput): Hotel =>{
    return {
      id: this.getId(hotel),
      destination_id: this.getDestinationId(hotel),
      name: this.getName(hotel),
      location: this.getLocation(hotel),
      description: this.getDescription(hotel),
      amenities: this.getAmenities(hotel),
      images: this.getImages(hotel),
      booking_conditions: this.getBookingConditions(hotel),
    };
  }

  abstract getId(hotel: SupplierHotelInput): string;
  abstract getDestinationId(hotel: SupplierHotelInput): number;
  abstract getName(hotel: SupplierHotelInput): string;
  abstract getLocation(hotel: SupplierHotelInput): Location;
  abstract getDescription(hotel: SupplierHotelInput): string;
  abstract getAmenities(hotel: SupplierHotelInput): Amenities;
  abstract getImages(hotel: SupplierHotelInput): ImageCategory;
  abstract getBookingConditions(hotel: SupplierHotelInput): string[];
}
