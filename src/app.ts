import express from "express";
import hotelRoutes from "./routes/hotel-routes";

const app = express();

app.use(express.json());

app.use("/api/hotels", hotelRoutes);

export default app;
