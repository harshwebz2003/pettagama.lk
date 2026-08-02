export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  longDescription?: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  sku: string;
  badge?: 'NEW' | 'BEST SELLER' | 'HOT' | 'SALE' | 'EXCLUSIVE';
  images: string[];
  options?: {
    name: string; // e.g. Color, Size, Type
    values: string[];
  }[];
  specifications?: Record<string, string>;
  features?: string[];
  isFeatured?: boolean;
  isFlashDeal?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isCraftKit?: boolean;
  isGiftItem?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOptions?: Record<string, string>;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}
