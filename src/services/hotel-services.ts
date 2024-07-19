import { Hotel } from "../models/hotel-interfaces";
import { MergeUtil } from "../utils/merge-hotel-utils";
import { AcmeSupplier } from "./suppliers/AcmeSupplier";
import { PaperfliesSupplier } from "./suppliers/PaperfliesSupplier";
import { PatagoniaSupplier } from "./suppliers/PatagoniaSupplier";

class HotelService {
  private suppliers: any[];

  constructor() {
    this.suppliers = [
      new AcmeSupplier(),
      new PatagoniaSupplier(),
      new PaperfliesSupplier(),
    ];
  }

  protected async fetchAndMergeHotels(): Promise<Hotel[]> {
    // Fetch Hotels
    const promises = this.suppliers.map((supplier) => supplier.fetchHotels());
    const results = await Promise.all(promises);
    const hotels = results.flat() as Hotel[];

    // Merge Hotels
    const mergedHotel = new MergeUtil(hotels).mergeHotels();
    return mergedHotel;
  }

  async getHotelsById(hotelIds: string[]): Promise<Hotel[]> {
    const hotels = await this.fetchAndMergeHotels();
    return hotels.filter((hotel) => hotelIds.includes(hotel.id));
  }
  async getHotelsByDestinationId(destinationId: number): Promise<Hotel[]> {
    const hotels = await this.fetchAndMergeHotels();
    return hotels.filter((hotel) => hotel.destination_id === destinationId);
  }
}

const hotelService = new HotelService();

export default hotelService;
