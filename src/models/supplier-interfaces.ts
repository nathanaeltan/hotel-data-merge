export interface AcmeSupplierHotel {
  Id: string;
  DestinationId: number;
  Name: string;
  Latitude: number | null;
  Longitude: number | null;
  Address: string;
  City: string;
  Country: string;
  PostalCode: string;
  Description: string;
  Facilities: string[];
}


export type SupplierHotelInput = AcmeSupplierHotel;