import { Request, Response } from "express";
import hotelService from "../services/hotel-services";
import { HotelRequest } from "../models/hotel-request";
import { validateHotelRequest } from "../utils/validate-request-utils";

export class HotelController {
  static async handleHotelPost(req: Request, res: Response): Promise<Response> {
    const requestBody = req.body as HotelRequest;
    const validationError = validateHotelRequest(requestBody);
    if (validationError) {
      return res.status(400).json(validationError);
    }

    if (requestBody.hotel_ids && requestBody.hotel_ids.length > 0) {
      const hotels = await hotelService.getHotelsById(requestBody.hotel_ids);
      return res.status(200).json(hotels);
    } else if (requestBody.destination_id) {
      const hotels = await hotelService.getHotelsByDestinationId(
        requestBody.destination_id
      );
      return res.status(200).json(hotels);
    }

    return res.status(400).json({ message: "Invalid request" });
  }
}
