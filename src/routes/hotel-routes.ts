import { Router } from "express";
import { HotelController } from "../controllers/hotel-controller";

const router: Router = Router();

router.post("/", HotelController.handleHotelPost);

export default router;
