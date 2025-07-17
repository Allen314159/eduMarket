import { useState, useEffect, useCallback } from 'react';
import { Product } from '../types';
import { productService } from '../services/api';
import { useFavorites } from '../hooks';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { Heart, ShoppingBag } from 'lucide-react';

const FavoritesPage = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const loadFavoriteProducts = useCallback(async () => {
    if (favorites.length === 0) {
      setFavoriteProducts([]);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const response = await productService.getProducts();
      if (response.success) {
        const favoriteItems = response.data.filter(product => 
          favorites.includes(product.id)
        );
        setFavoriteProducts(favoriteItems);
      }
    } catch (error) {
      console.error('Error loading favorite products:', error);
    } finally {
      setIsLoading(false);
    }
  }, [favorites]);

  useEffect(() => {
    loadFavoriteProducts();
  }, [loadFavoriteProducts]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="card">
                <div className="h-48 bg-gray-200 rounded"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
          <Heart className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Favorites</h1>
          <p className="text-gray-600">
            {favoriteProducts.length} course{favoriteProducts.length !== 1 ? 's' : ''} saved
          </p>
        </div>
      </div>

      {/* Content */}
      {favoriteProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No favorites yet
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Start exploring our courses and add your favorites by clicking the heart icon on any course card.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-hero-button hover:from-primary-600 hover:to-secondary-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <ShoppingBag className="w-5 h-5" />
            Browse Courses
          </button>
        </div>
      ) : (
        <>
          {/* Favorite Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleProductClick}
                onToggleFavorite={toggleFavorite}
                isFavorite={isFavorite(product.id)}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Your Learning Journey</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  {favoriteProducts.length}
                </div>
                <div className="text-sm text-gray-600">Courses Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  {favoriteProducts.reduce((total, product) => total + (product.duration ? parseInt(product.duration) : 0), 0)}h
                </div>
                <div className="text-sm text-gray-600">Total Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  {new Set(favoriteProducts.map(p => p.category)).size}
                </div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
            </div>
          </div>
        </>
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
  );
};

export default FavoritesPage;
