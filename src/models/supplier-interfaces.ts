// Acme Supplier interfaces
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


// Patagonia Supplier interfaces
export interface PatagoniaImage {
  url: string;
  description: string;
}
export interface PatagoniaImages {
  rooms: PatagoniaImage[];
  amenities: PatagoniaImage[];
}

export interface PatagoniaSupplierHotel {
  id: string;
  destination: number;
  name: string;
  lat: number;
  lng: number;
  address?: string | null;
  info?: string | null;
  amenities?: string[] | null;
  images: PatagoniaImages;
}


// Supplier Input types
export type SupplierHotelInput = AcmeSupplierHotel | PatagoniaSupplierHotel;
