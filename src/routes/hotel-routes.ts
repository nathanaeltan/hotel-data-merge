import { Router, Request, Response } from "express";
import hotelService from "../services/hotel-services";

const router: Router = Router();

router.post("/", async (req: Request, res: Response) => {
  const hotels = await hotelService.getHotels(["12"], ["12"]);
  return res.status(200).json(hotels);
});

export default router;
