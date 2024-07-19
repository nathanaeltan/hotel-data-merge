import { PaperfliesSupplierHotel } from "../../models/supplier-interfaces";
import { BaseSupplier } from "./BaseSupplier";
import { StringUtils } from "../../utils/string-utils";

export class PaperfliesSupplier extends BaseSupplier {
  constructor() {
    super(
      "https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies",
      "paperflies"
    );
  }

  getId(hotel: PaperfliesSupplierHotel) {
    return hotel.hotel_id;
  }

  getName(hotel: PaperfliesSupplierHotel) {
    return StringUtils.trimString(hotel.hotel_name);
  }
  getDestinationId(hotel: PaperfliesSupplierHotel) {
    return hotel.destination_id;
  }

  getLocation(hotel: PaperfliesSupplierHotel) {
    return {
      address: StringUtils.trimAndCapitalize(hotel.location.address),
      country: hotel.location.country,
      lat: 0,
      lng: 0,
      city: "",
    };
  }
  getDescription(_hotel: PaperfliesSupplierHotel) {
    return "";
  }

  getAmenities(hotel: PaperfliesSupplierHotel) {
    return {
      general: StringUtils.capitalizeEveryWord(hotel.amenities.general),
      room:  StringUtils.capitalizeEveryWord(hotel.amenities.room),
    };
  }

  getImages(hotel: PaperfliesSupplierHotel) {
    return {
      rooms: hotel.images.rooms.map((image) => ({
        link: image.link,
        description: image.caption,
      })),
      site: hotel.images.site.map((image) => ({
        link: image.link,
        description: image.caption,
      })),
      amenities: [],
    };
  }
  getBookingConditions(hotel: PaperfliesSupplierHotel) {
    return hotel.booking_conditions;
  }
}
