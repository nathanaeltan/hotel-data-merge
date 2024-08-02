import { HotelRequest } from "../models/hotel-request";

export function validateHotelRequest(
  hotelRequest: HotelRequest,
): { error: string[] } | null {
  let hotelIdState = false;
  let destinationIdState = false;
  const errors: string[] = [];

    if (
      hotelRequest.hotel_ids &&
      Array.isArray(hotelRequest.hotel_ids) &&
      hotelRequest.hotel_ids.every((id) => typeof id === "string") &&
      hotelRequest.hotel_ids.length > 0
    ) {
      hotelIdState = true;
    }

  if (hotelRequest.destination_id !== undefined && typeof hotelRequest.destination_id === "number") {
      destinationIdState = true;
  }

  return hotelIdState || destinationIdState ? null : { error: errors };

}
