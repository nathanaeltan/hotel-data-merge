import express, { Application } from "express";
import hotelRoutes from './routes/hotel-routes';

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());

app.use('/api/hotels', hotelRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
