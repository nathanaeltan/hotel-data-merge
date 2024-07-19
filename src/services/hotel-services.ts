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
        ]
    }

    async getHotels(hotelIds: string[], destinationIds: string[]) {
        const promises = this.suppliers.map(supplier => supplier.fetchHotels());
        const results = await Promise.all(promises);
        const hotels = results.flat() as Hotel[];
        const mergedHotel = new MergeUtil(hotels).mergeHotels();
        return hotels;
    }
}

const hotelService = new HotelService();

export default hotelService;