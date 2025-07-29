// Mock data for the e-commerce platform

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  description: string;
  specifications: Record<string, string>;
  inStock: boolean;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  icon: string;
  subcategories: string[];
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  link: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400',
    icon: '📱',
    subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Accessories']
  },
  {
    id: '2',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400',
    icon: '👗',
    subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Footwear', 'Accessories']
  },
  {
    id: '3',
    name: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
    icon: '🏠',
    subcategories: ['Furniture', 'Kitchen Appliances', 'Home Decor', 'Garden']
  },
  {
    id: '4',
    name: 'Books',
    image: 'https://images.unsplash.com/photo-1498050108023-4b2e558d2937?w=400',
    icon: '📚',
    subcategories: ['Fiction', 'Non-fiction', 'Academic', 'Children\'s Books']
  },
  {
    id: '5',
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400',
    icon: '⚽',
    subcategories: ['Cricket', 'Football', 'Fitness', 'Outdoor Sports']
  },
  {
    id: '6',
    name: 'Beauty',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400',
    icon: '💄',
    subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Fragrance']
  }
];

export const banners: Banner[] = [
  {
    id: '1',
    title: 'Festival Dhamaka Sale!',
    subtitle: 'Up to 80% off on Electronics',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800',
    cta: 'Shop Now',
    link: '/electronics'
  },
  {
    id: '2',
    title: 'New Fashion Collection',
    subtitle: 'Latest trends for this season',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800',
    cta: 'Explore',
    link: '/fashion'
  },
  {
    id: '3',
    title: 'Smart Home Essentials',
    subtitle: 'Transform your living space',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    cta: 'Discover',
    link: '/home-kitchen'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 159900,
    originalPrice: 179900,
    image: 'https://images.unsplash.com/photo-1588058365548-4c2415708155?w=400',
    rating: 4.5,
    reviews: 1250,
    category: 'Electronics',
    brand: 'Apple',
    description: 'The ultimate iPhone with titanium design, Action Button, and powerful A17 Pro chip.',
    specifications: {
      'Display': '6.7-inch Super Retina XDR',
      'Processor': 'A17 Pro chip',
      'Storage': '256GB',
      'Camera': 'Pro camera system',
      'Battery': 'Up to 29 hours video playback'
    },
    inStock: true,
    discount: 11
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    price: 114900,
    originalPrice: 124900,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    rating: 4.8,
    reviews: 890,
    category: 'Electronics',
    brand: 'Apple',
    description: 'Supercharged by M2 chip. Redesigned around the next-generation M2 chip.',
    specifications: {
      'Display': '13.6-inch Liquid Retina',
      'Processor': 'Apple M2 chip',
      'Memory': '8GB unified memory',
      'Storage': '256GB SSD',
      'Battery': 'Up to 18 hours'
    },
    inStock: true,
    discount: 8
  },
  {
    id: '3',
    name: 'Samsung Galaxy S24 Ultra',
    price: 129999,
    originalPrice: 139999,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    rating: 4.6,
    reviews: 2100,
    category: 'Electronics',
    brand: 'Samsung',
    description: 'Galaxy AI is here. Epic, just like that. Meet Galaxy S24 Ultra.',
    specifications: {
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '12GB',
      'Storage': '256GB',
      'Camera': '200MP + 50MP + 12MP + 10MP'
    },
    inStock: true,
    discount: 7
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5',
    price: 29990,
    originalPrice: 34990,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    rating: 4.7,
    reviews: 650,
    category: 'Electronics',
    brand: 'Sony',
    description: 'Industry-leading noise canceling with Dual Noise Sensor technology.',
    specifications: {
      'Driver': '30mm',
      'Frequency Response': '4Hz-40,000Hz',
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.2',
      'Weight': '250g'
    },
    inStock: true,
    discount: 14
  },
  {
    id: '5',
    name: 'Nike Air Force 1',
    price: 7495,
    originalPrice: 8995,
    image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400',
    rating: 4.4,
    reviews: 3200,
    category: 'Fashion',
    brand: 'Nike',
    description: 'Classic basketball shoe with premium leather and Air-Sole cushioning.',
    specifications: {
      'Material': 'Premium Leather',
      'Sole': 'Rubber outsole',
      'Closure': 'Lace-up',
      'Style': 'Low-top',
      'Care': 'Spot clean'
    },
    inStock: true,
    discount: 17
  },
  {
    id: '6',
    name: 'Levi\'s 511 Slim Jeans',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    rating: 4.3,
    reviews: 1800,
    category: 'Fashion',
    brand: 'Levi\'s',
    description: 'Slim fit jeans with a classic five-pocket design.',
    specifications: {
      'Fit': 'Slim',
      'Material': '99% Cotton, 1% Elastane',
      'Wash': 'Dark Blue',
      'Rise': 'Mid Rise',
      'Care': 'Machine wash cold'
    },
    inStock: true,
    discount: 25
  },
  {
    id: '7',
    name: 'Instant Pot Duo 7-in-1',
    price: 8995,
    originalPrice: 11995,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    rating: 4.6,
    reviews: 4500,
    category: 'Home & Kitchen',
    brand: 'Instant Pot',
    description: '7-in-1 Electric Pressure Cooker, Sterilizer, Slow Cooker, Rice Cooker.',
    specifications: {
      'Capacity': '6 Quart',
      'Functions': '7-in-1',
      'Material': 'Stainless Steel',
      'Power': '1000W',
      'Warranty': '1 Year'
    },
    inStock: true,
    discount: 25
  },
  {
    id: '8',
    name: 'The Alchemist',
    price: 350,
    originalPrice: 450,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
    rating: 4.9,
    reviews: 15000,
    category: 'Books',
    brand: 'HarperCollins',
    description: 'A magical story about following your dreams by Paulo Coelho.',
    specifications: {
      'Pages': '163',
      'Language': 'English',
      'Publisher': 'HarperCollins',
      'Format': 'Paperback',
      'ISBN': '9780062315007'
    },
    inStock: true,
    discount: 22
  }
];

export const flashSaleProducts = products.slice(0, 4);
export const trendingProducts = products.slice(2, 6);
export const recommendedProducts = products.slice(1, 5);