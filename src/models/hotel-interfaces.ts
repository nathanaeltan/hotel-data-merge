export interface Location {
    lat: number;
    lng: number;
    address: string;
    city: string;
    country: string;
  }

  export interface Image {
    link: string;
    description: string;
  }

  export interface Amenities {
    general: string[];
    room: string[];
  }

  export interface ImageCategory {
    rooms: Image[];
    site: Image[];
    amenities: Image[];
  }

  export interface Hotel {
    id: string;
    destination_id: number;
    name: string;
    location: Location;
    description: string;
    amenities: Amenities;
    images: ImageCategory;
    booking_conditions: string[];
  }
