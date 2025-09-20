export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  availability: 'in-stock' | 'out-of-stock' | 'pre-order';
  images: string[];
  description: string;
  highlights: string[];
  specifications: Record<string, string>;
  faqs: { question: string; answer: string }[];
  whatsInBox: string[];
  relatedProducts?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  products: string[];
}

export interface NavigationItem {
  name: string;
  href?: string;
  children?: NavigationItem[];
}