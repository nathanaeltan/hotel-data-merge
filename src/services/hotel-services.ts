import { Hotel } from "../models/hotel-interfaces";
import { AcmeSupplier } from "./suppliers/AcmeSupplier";
import { PatagoniaSupplier } from "./suppliers/PatagoniaSupplier";

class HotelService {
    private suppliers: any[];

    constructor() {
        this.suppliers = [
            // new AcmeSupplier(),
            new PatagoniaSupplier(),
        ]
    }

    async getHotels(hotelIds: string[], destinationIds: string[]) {
        const promises = this.suppliers.map(supplier => supplier.fetchHotels());
        const results = await Promise.all(promises);
        const hotels = results.flat();
        console.log(hotels, 'THOTELSLSLS')
        return hotels;
    }
}

const hotelService = new HotelService();

export default hotelService;