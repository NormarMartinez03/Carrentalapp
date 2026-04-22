export interface Car {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  seats: number;
  bags: number;
  transmission: string;
  fuelType: string;
  features: string[];
  featured?: boolean;
}
