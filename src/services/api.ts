import axios from 'axios';
import { Product, ApiResponse, SuggestionRequest } from '../types';

// Mock API base URL
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

// Mock data for educational products
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Complete English Course with Native Speaker',
    price: 599000,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
    shortDescription: 'Learn English from native speakers with interactive lessons',
    fullDescription: 'Comprehensive English course designed for Vietnamese learners. Includes conversation practice, grammar lessons, pronunciation training, and cultural insights. Perfect for beginners to intermediate learners.',
    category: 'Language',
    rating: 4.8,
    reviews: 1250,
    instructor: 'John Smith',
    duration: '40 hours',
    level: 'Intermediate',
    tags: ['English', 'Speaking', 'Grammar', 'IELTS']
  },
  {
    id: '2',
    name: 'Python Programming for Beginners',
    price: 799000,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
    shortDescription: 'Master Python programming from scratch',
    fullDescription: 'Complete Python programming course covering basics to advanced topics. Learn data structures, algorithms, web development, and data science fundamentals.',
    category: 'Programming',
    rating: 4.9,
    reviews: 890,
    instructor: 'Sarah Johnson',
    duration: '60 hours',
    level: 'Beginner',
    tags: ['Python', 'Programming', 'Data Science', 'Web Development']
  },
  {
    id: '3',
    name: 'Digital Marketing Masterclass',
    price: 1200000,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    shortDescription: 'Complete digital marketing strategy and implementation',
    fullDescription: 'Learn all aspects of digital marketing including SEO, SEM, social media marketing, content marketing, email marketing, and analytics.',
    category: 'Marketing',
    rating: 4.7,
    reviews: 650,
    instructor: 'Michael Chen',
    duration: '45 hours',
    level: 'Intermediate',
    tags: ['SEO', 'SEM', 'Social Media', 'Analytics']
  },
  {
    id: '4',
    name: 'Japanese Language N5 to N3',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=250&fit=crop',
    shortDescription: 'JLPT preparation course for N5 to N3 levels',
    fullDescription: 'Structured Japanese learning program focusing on JLPT preparation. Includes hiragana, katakana, kanji, grammar, and conversation practice.',
    category: 'Language',
    rating: 4.6,
    reviews: 420,
    instructor: 'Tanaka Hiroshi',
    duration: '80 hours',
    level: 'Beginner',
    tags: ['Japanese', 'JLPT', 'Kanji', 'Grammar']
  },
  {
    id: '5',
    name: 'React & TypeScript Modern Development',
    price: 1500000,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
    shortDescription: 'Build modern web applications with React and TypeScript',
    fullDescription: 'Advanced React development course with TypeScript, hooks, context, testing, and modern development practices.',
    category: 'Programming',
    rating: 4.9,
    reviews: 980,
    instructor: 'Alex Rodriguez',
    duration: '70 hours',
    level: 'Advanced',
    tags: ['React', 'TypeScript', 'JavaScript', 'Frontend']
  },
  {
    id: '6',
    name: 'UI/UX Design Fundamentals',
    price: 890000,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    shortDescription: 'Learn design principles and create beautiful user interfaces',
    fullDescription: 'Comprehensive UI/UX design course covering design principles, user research, wireframing, prototyping, and design tools like Figma.',
    category: 'Design',
    rating: 4.8,
    reviews: 730,
    instructor: 'Emma Wilson',
    duration: '50 hours',
    level: 'Beginner',
    tags: ['UI', 'UX', 'Figma', 'Design Thinking']
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const productService = {
  // Get all products
  async getProducts(): Promise<ApiResponse<Product[]>> {
    await delay(800);
    return {
      data: mockProducts,
      message: 'Products fetched successfully',
      success: true
    };
  },

  // Get product by ID
  async getProductById(id: string): Promise<ApiResponse<Product | null>> {
    await delay(500);
    const product = mockProducts.find(p => p.id === id);
    return {
      data: product || null,
      message: product ? 'Product found' : 'Product not found',
      success: !!product
    };
  },

  // Search products
  async searchProducts(query: string): Promise<ApiResponse<Product[]>> {
    await delay(600);
    const filteredProducts = mockProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    return {
      data: filteredProducts,
      message: `Found ${filteredProducts.length} products`,
      success: true
    };
  },

  // Filter products by price range
  async filterByPriceRange(range: string): Promise<ApiResponse<Product[]>> {
    await delay(400);
    let filteredProducts: Product[] = [];

    switch (range) {
      case 'under-500k':
        filteredProducts = mockProducts.filter(p => p.price < 500000);
        break;
      case '500k-1m':
        filteredProducts = mockProducts.filter(p => p.price >= 500000 && p.price <= 1000000);
        break;
      case 'over-1m':
        filteredProducts = mockProducts.filter(p => p.price > 1000000);
        break;
      default:
        filteredProducts = mockProducts;
    }

    return {
      data: filteredProducts,
      message: `Filtered ${filteredProducts.length} products`,
      success: true
    };
  },

  // Get AI suggestions
  async getSuggestions(request: SuggestionRequest): Promise<ApiResponse<Product[]>> {
    await delay(1200); // Longer delay to simulate AI processing
    
    // Mock AI logic: suggest products based on user behavior
    const suggested = mockProducts
      .sort(() => Math.random() - 0.5) // Random shuffle
      .slice(0, request.limit || 3);

    return {
      data: suggested,
      message: 'AI suggestions generated successfully',
      success: true
    };
  },

  // Get products by category
  async getProductsByCategory(category: string): Promise<ApiResponse<Product[]>> {
    await delay(500);
    const filteredProducts = mockProducts.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );

    return {
      data: filteredProducts,
      message: `Found ${filteredProducts.length} products in ${category}`,
      success: true
    };
  }
};

export default productService;
