import { PatagoniaSupplierHotel } from "../../models/supplier-interfaces";
import { BaseSupplier } from "./BaseSupplier";

export class PatagoniaSupplier extends BaseSupplier {
  constructor() {
    super(
      "https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia",
      "patagonia"
    );
  }

  getId(hotel: PatagoniaSupplierHotel) {
    return hotel.id;
  }
  getName(hotel: PatagoniaSupplierHotel) {
    return hotel.name;
  }
  getDestinationId(hotel: PatagoniaSupplierHotel) {
    return hotel.destination;
  }
  getLocation(hotel: PatagoniaSupplierHotel) {
    return {
      lat: hotel.lat,
      lng: hotel.lng,
      address: hotel.address || "",
      city: "",
      country: "",
    };
  }
  getDescription(hotel: PatagoniaSupplierHotel) {
    return hotel.info || "";
  }

  getAmenities(hotel: PatagoniaSupplierHotel) {
    return {
      general: hotel.amenities || [],
      room: [],
    };
  }

  getImages(hotel: PatagoniaSupplierHotel) {
    return {
      rooms: hotel.images.rooms.map((image) => ({
        link: image.url,
        description: image.description,
      })),
      site: [],
      amenities: hotel.images.amenities.map((image) => ({
        link: image.url,
        description: image.description,
      })),
    };
  }
  getBookingConditions(_hotel: PatagoniaSupplierHotel) {
    return [];
  }
}