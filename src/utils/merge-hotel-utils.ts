import { Hotel } from "../models/hotel-interfaces";

export class MergeUtil {
    static hotelMap: {};
    static hotels: Hotel[];
    constructor(hotels: Hotel[]) {
        MergeUtil.hotels = hotels;
        MergeUtil.hotelMap = {};
    }
    mergeHotels() {
        console.log(MergeUtil.hotels, "HOTELS")
    }
}