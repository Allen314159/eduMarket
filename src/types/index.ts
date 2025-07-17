export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  rating: number;
  reviews: number;
  instructor?: string;
  duration?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  isFavorite?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  viewHistory: string[];
  favorites: string[];
}

export interface SearchFilters {
  query: string;
  priceRange: 'all' | 'under-500k' | '500k-1m' | 'over-1m';
  category: string;
  level?: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface SuggestionRequest {
  userId: string;
  limit?: number;
}

export interface PriceRange {
  min: number;
  max: number | null;
  label: string;
}
