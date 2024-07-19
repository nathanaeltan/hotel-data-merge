import { BaseSupplier } from "./BaseSupplier";
import { AcmeSupplierHotel } from "../../models/supplier-interfaces";
import { StringUtils } from "../../utils/string-utils";
import { NormalizeUtils } from "../../utils/normalize-data-utils";

export class AcmeSupplier extends BaseSupplier {
  constructor() {
    super("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme", "acme");
  }

  getId(hotel: AcmeSupplierHotel) {
    return hotel.Id;
  }
  getName(hotel: AcmeSupplierHotel) {
    return StringUtils.trimString(hotel.Name);
  }

  getDestinationId(hotel: AcmeSupplierHotel) {
    return hotel.DestinationId;
  }

  getLocation(hotel: AcmeSupplierHotel) {
    return {
      lat: hotel.Latitude || 0,
      lng: hotel.Longitude || 0,
      address: StringUtils.trimAndCapitalize(hotel.Address),
      city: hotel.City,
      country: NormalizeUtils.normalizeCountry(hotel.Country),
    };
  }

  getDescription(hotel: AcmeSupplierHotel) {
    return StringUtils.trimString(hotel.Description);
  }

  getAmenities(hotel: AcmeSupplierHotel) {
    return {
      general: NormalizeUtils.normalizeAmenitities(hotel.Facilities),
      room: [],
    };
  }

  getImages(_hotel: AcmeSupplierHotel) {
    return {
      rooms: [],
      site: [],
      amenities: [],
    };
  }

  getBookingConditions(_hotel: AcmeSupplierHotel) {
    return [];
  }
}
