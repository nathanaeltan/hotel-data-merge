import {
  Amenities,
  Hotel,
  Image,
  ImageCategory,
} from "../models/hotel-interfaces";

export class MergeUtil {
  static hotelMap: { [key: string]: Hotel };
  static hotels: Hotel[];
  constructor(hotels: Hotel[]) {
    MergeUtil.hotels = hotels;
    MergeUtil.hotelMap = {};
  }
  mergeHotels() {
    MergeUtil.hotels.forEach((hotel) => {
      const id = hotel.id;
      if (!MergeUtil.hotelMap[id]) {
        MergeUtil.hotelMap[id] = hotel;
      } else {
        const currentHotel = MergeUtil.hotelMap[id];
        const mergingHotel = hotel;
        // Merge Names
        MergeUtil.hotelMap[id].name = MergeUtil.mergeNames(
          currentHotel,
          mergingHotel,
        );
        // Merge Locations
        MergeUtil.hotelMap[id].location = MergeUtil.mergeLocations(
          currentHotel,
          mergingHotel,
        );
        // Merge Descriptions
        MergeUtil.hotelMap[id].description = MergeUtil.mergeDescriptions(
          currentHotel,
          mergingHotel,
        );
        // Merge amenities
        MergeUtil.hotelMap[id].amenities = MergeUtil.mergeAmenities(
          currentHotel,
          mergingHotel,
        );
        // Merge Booking Conditions
        MergeUtil.hotelMap[id].booking_conditions =
          MergeUtil.mergeBookingConditions(currentHotel, mergingHotel);
        // Merge Images
        MergeUtil.hotelMap[id].images = MergeUtil.mergeImages(
          currentHotel,
          mergingHotel,
        );
      }
    });
    return Object.values(MergeUtil.hotelMap);
  }

  static mergeImages(currentHotel: Hotel, mergingHotel: Hotel): ImageCategory {
    const image: ImageCategory = {
      rooms: [],
      site: [],
      amenities: [],
    };

    const mergeAndRemoveDuplicates = (
      currentImages: Image[],
      mergingImages: Image[],
    ): Image[] => {
      const allImages = [...currentImages, ...mergingImages];
      const uniqueImages: Image[] = [];
      const links = new Set();

      allImages.forEach((image) => {
        if (!links.has(image.link)) {
          uniqueImages.push(image);
          links.add(image.link);
        }
      });

      return uniqueImages;
    };

    // Merge and deduplicate for each category
    image.rooms = mergeAndRemoveDuplicates(
      currentHotel.images.rooms,
      mergingHotel.images.rooms,
    );
    image.site = mergeAndRemoveDuplicates(
      currentHotel.images.site,
      mergingHotel.images.site,
    );
    image.amenities = mergeAndRemoveDuplicates(
      currentHotel.images.amenities,
      mergingHotel.images.amenities,
    );
    return image;
  }
  // Booking conditions
  static mergeBookingConditions(
    currentHotel: Hotel,
    mergingHotel: Hotel,
  ): string[] {
    return MergeUtil.createUniqueSet(
      currentHotel.booking_conditions,
      mergingHotel.booking_conditions,
    );
  }
  //   Longer name priority
  static mergeNames(currentHotel: Hotel, mergingHotel: Hotel): string {
    return currentHotel.name.length > mergingHotel.name.length
      ? currentHotel.name
      : mergingHotel.name;
  }
  static mergeLocations(currentHotel: Hotel, mergingHotel: Hotel) {
    return {
      lat: currentHotel.location.lat || mergingHotel.location.lat,
      lng: currentHotel.location.lng || mergingHotel.location.lng,
      address: currentHotel.location.address || mergingHotel.location.address,
      city: currentHotel.location.city || mergingHotel.location.city,
      country: currentHotel.location.country || mergingHotel.location.country,
    };
  }
  // Return the longer description
  static mergeDescriptions(currentHotel: Hotel, mergingHotel: Hotel): string {
    const currentDescription = currentHotel.description;
    const mergingDescription = mergingHotel.description;
    return currentDescription.length > mergingDescription.length
      ? currentDescription
      : mergingDescription;
  }

  //   Create unique array set of amenities
  static mergeAmenities(currentHotel: Hotel, mergingHotel: Hotel): Amenities {
    const generalAmenities = MergeUtil.createUniqueSet(
      currentHotel.amenities.general,
      mergingHotel.amenities.general,
    );
    const roomAmenities = MergeUtil.createUniqueSet(
      currentHotel.amenities.room,
      mergingHotel.amenities.room,
    );
    return {
      general: generalAmenities,
      room: roomAmenities,
    };
  }

  static createUniqueSet(currentArr: any[], incomingArr: any[]) {
    return Array.from(new Set([...currentArr, ...incomingArr]));
  }
}
