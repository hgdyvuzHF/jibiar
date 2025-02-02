export interface Product {
  id: string;
  title: string;
  image: string;
  images: string[];
  description: string;
  features: string[];
  price: number;
  category: string;
}

export interface Filters {
  maxPrice: number;
  categories: string[];
}

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';