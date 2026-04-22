export interface Car {
  id: string;
  name: string;
  category: string;
  priceUSD: number;
  priceDOP: number;
  image: string;
  seats: number;
  bags: number;
  transmission: string;
  fuelType: string;
  features: string[];
  location: string;
  available: boolean;
  featured?: boolean;
}
