import { HotelRequest } from "../models/hotel-request";

export function validateHotelRequest(
  hotelRequest: HotelRequest,
): { error: string } | null {
  if (hotelRequest.hotel_ids) {
    if (
      !Array.isArray(hotelRequest.hotel_ids) ||
      !hotelRequest.hotel_ids.every((id) => typeof id === "string")
    ) {
      return { error: "hotel_ids must be an array of strings." };
    }
  }

  if (hotelRequest.destination_id !== undefined) {
    if (typeof hotelRequest.destination_id !== "number") {
      return { error: "destination_id must be a number." };
    }
  }

  return null;
}
