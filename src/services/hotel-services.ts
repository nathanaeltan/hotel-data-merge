import { Hotel } from "../models/hotel-interfaces";
import { HotelCache } from "../utils/cache-utils";
import { MergeUtil } from "../utils/merge-hotel-utils";
import { AcmeSupplier } from "./suppliers/AcmeSupplier";
import { PaperfliesSupplier } from "./suppliers/PaperfliesSupplier";
import { PatagoniaSupplier } from "./suppliers/PatagoniaSupplier";

class HotelService {
  private suppliers: any[];
  private cache: HotelCache;
  constructor() {
    this.suppliers = [
      new AcmeSupplier(),
      new PatagoniaSupplier(),
      new PaperfliesSupplier(),
    ];
    this.cache = new HotelCache(3600);
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
    // Check cache first
    const cachedHotels = hotelIds.map(id => this.cache.get(id)).filter(hotel => hotel !==undefined);
    if(cachedHotels.length === hotelIds.length) {
      return cachedHotels as Hotel[];
    }
    const hotels = await this.fetchAndMergeHotels();
    // Set hotels in the cache
    hotels.forEach((hotel) => this.cache.set(hotel.id, hotel));
    return hotels.filter((hotel) => hotelIds.includes(hotel.id));
  }


  async getHotelsByDestinationId(destinationId: number): Promise<Hotel[]> {
    // check cache first
    const cachedHotels = this.cache.get(`destination_${destinationId}`);
    if(cachedHotels) {
      return cachedHotels as Hotel[];
    }
    const hotels = await this.fetchAndMergeHotels();
    const filteredHotelByDestinationId = hotels.filter((hotel) => hotel.destination_id === destinationId);
    this.cache.set(`destination_${destinationId}`, filteredHotelByDestinationId);
    return filteredHotelByDestinationId
  }
}

const hotelService = new HotelService();

export default hotelService;
