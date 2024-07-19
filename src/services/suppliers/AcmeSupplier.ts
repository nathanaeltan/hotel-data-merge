import {
  Amenities,
  Hotel,
  ImageCategory,
  Location,
} from "../../models/hotel-interfaces";
import { BaseSupplier } from "./BaseSupplier";
import {
  AcmeSupplierHotel,
  SupplierHotelInput,
} from "../../models/supplier-interfaces";
import { StringUtils } from "../../utils/string-utils";

export class AcmeSupplier extends BaseSupplier {
  constructor() {
    super("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme", "acme");
  }


  getId(hotel: AcmeSupplierHotel): string {
    return hotel.Id;
  };
  getName(hotel: SupplierHotelInput): string {
    return StringUtils.trimString(hotel.Name);
  }

  getDestinationId(hotel: AcmeSupplierHotel): number {
    return hotel.DestinationId;
  }

  getLocation(hotel: SupplierHotelInput): Location {
    return {
      lat: hotel.Latitude || 0,
      lng: hotel.Longitude || 0,
      address: StringUtils.trimString(hotel.Address),
      city: hotel.City,
      country: hotel.Country,
    };
  }

  getDescription(hotel: SupplierHotelInput): string {
    return StringUtils.trimString(hotel.Description);
  }

  getAmenities(hotel: SupplierHotelInput): Amenities {
    return {
      general: StringUtils.removeSpaceArray(hotel.Facilities),
      room: [],
    };
  }

  getImages(_hotel: SupplierHotelInput): ImageCategory {
    return {
      rooms: [],
      site: [],
      amenities: [],
    };
  }

  getBookingConditions(hotel: SupplierHotelInput): string[] {
    return [];
  }

}
