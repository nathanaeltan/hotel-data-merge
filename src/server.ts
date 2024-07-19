import express from "express";
import hotelRoutes from './routes/hotel-routes';
import swaggerDocs from "./utils/swagger";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/api/hotels', hotelRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  swaggerDocs(app)
});
