import { useState, useEffect, useCallback } from 'react';
import { Product, SearchFilters } from '../types';
import { productService } from '../services/api';
import { useFavorites, useViewHistory } from '../hooks';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import SearchBar from '../components/SearchBar';
import HeroSection from '../components/HeroSection';
import { ProductGridSkeleton } from '../components/Skeleton';
import toast from 'react-hot-toast';
import { Sparkles, TrendingUp } from 'lucide-react';

interface HomePageProps {
  searchInputRef?: React.RefObject<HTMLInputElement>;
}

const HomePage = ({ searchInputRef }: HomePageProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    priceRange: 'all',
    category: 'All Categories'
  });

  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToHistory } = useViewHistory();

  const filterProducts = useCallback(() => {
    let filtered = [...products];

    // Filter by search query
    if (filters.query) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filters.query.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(filters.query.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(filters.query.toLowerCase()))
      );
    }

    // Filter by price range
    if (filters.priceRange !== 'all') {
      switch (filters.priceRange) {
        case 'under-500k':
          filtered = filtered.filter(p => p.price < 500000);
          break;
        case '500k-1m':
          filtered = filtered.filter(p => p.price >= 500000 && p.price <= 1000000);
          break;
        case 'over-1m':
          filtered = filtered.filter(p => p.price > 1000000);
          break;
      }
    }

    // Filter by category
    if (filters.category !== 'All Categories') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    setFilteredProducts(filtered);
  }, [products, filters]);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      const response = await productService.getProducts();
      if (response.success) {
        setProducts(response.data);
      } else {
        toast.error('Failed to load products');
      }
    } catch (error) {
      toast.error('Error loading products');
      console.error('Error loading products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    addToHistory(product.id);
  };

  const handleAISuggestions = async () => {
    try {
      setIsLoadingSuggestions(true);
      const response = await productService.getSuggestions({
        userId: 'user-123',
        limit: 3
      });
      
      if (response.success) {
        setSuggestions(response.data);
        setShowSuggestions(true);
        toast.success('AI suggestions generated!');
      } else {
        toast.error('Failed to get AI suggestions');
      }
    } catch (error) {
      toast.error('Unable to get suggestions at this time');
      console.error('Error getting suggestions:', error);
    } finally {
      setIsLoadingSuggestions(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-hero-gradient">
        <div className="container py-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 mb-8 animate-pulse">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 bg-white/20 h-10 rounded-lg"></div>
              <div className="bg-white/20 h-10 w-32 rounded-lg"></div>
              <div className="bg-white/20 h-10 w-32 rounded-lg"></div>
              <div className="bg-white/20 h-10 w-32 rounded-lg"></div>
            </div>
          </div>
          <ProductGridSkeleton count={6} />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section - only show on home without filters */}
      {!filters.query && filters.category === 'All Categories' && filters.priceRange === 'all' && !showSuggestions && (
        <HeroSection />
      )}
      
      <div className="container py-8">
        {/* Search and Filters */}
        <SearchBar
          filters={filters}
          onFiltersChange={setFilters}
          onAISuggestions={handleAISuggestions}
          isLoadingSuggestions={isLoadingSuggestions}
          searchInputRef={searchInputRef}
        />

        {/* AI Suggestions Section */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">AI Recommendations for You</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {suggestions.map((product) => (
                <ProductCard
                  key={`suggestion-${product.id}`}
                  product={product}
                  onViewDetails={handleProductClick}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={isFavorite(product.id)}
                />
              ))}
            </div>
            <button
              onClick={() => setShowSuggestions(false)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Hide suggestions
            </button>
          </div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-white/70" />
            <h2 className="text-lg font-semibold text-white">
              {filters.query || filters.category !== 'All Categories' || filters.priceRange !== 'all'
                ? `Search Results (${filteredProducts.length})`
                : `All Courses (${filteredProducts.length})`}
            </h2>
          </div>
          
          {(filters.query || filters.category !== 'All Categories' || filters.priceRange !== 'all') && (
            <button
              onClick={() => setFilters({
                query: '',
                priceRange: 'all',
                category: 'All Categories'
              })}
              className="text-sm text-hero-blue hover:text-hero-pink transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or browse our recommendations.
            </p>
            <button
              onClick={handleAISuggestions}
              disabled={isLoadingSuggestions}
              className="bg-hero-button hover:from-primary-600 hover:to-secondary-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get AI Suggestions
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleProductClick}
                onToggleFavorite={toggleFavorite}
                isFavorite={isFavorite(product.id)}
              />
            ))}
          </div>
        )}

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onToggleFavorite={toggleFavorite}
          isFavorite={selectedProduct ? isFavorite(selectedProduct.id) : false}
        />
      </div>
    </>
  );
};

export default HomePage;
