import { useState, useEffect, useCallback } from 'react';
import { Product } from '../types';
import { productService } from '../services/api';
import { useViewHistory } from '../hooks';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { useFavorites } from '../hooks';
import { History, Clock, Trash2 } from 'lucide-react';

const HistoryPage = () => {
  const [historyProducts, setHistoryProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { viewHistory, clearHistory } = useViewHistory();
  const { toggleFavorite, isFavorite } = useFavorites();

  const loadHistoryProducts = useCallback(async () => {
    if (viewHistory.length === 0) {
      setHistoryProducts([]);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const response = await productService.getProducts();
      if (response.success) {
        // Sort products by view history order
        const historyItems = viewHistory
          .map(historyId => response.data.find(product => product.id === historyId))
          .filter((product): product is Product => product !== undefined);
        setHistoryProducts(historyItems);
      }
    } catch (error) {
      console.error('Error loading history products:', error);
    } finally {
      setIsLoading(false);
    }
  }, [viewHistory]);

  useEffect(() => {
    loadHistoryProducts();
  }, [loadHistoryProducts]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear your viewing history?')) {
      clearHistory();
    }
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
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <History className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Viewing History</h1>
            <p className="text-gray-600">
              {historyProducts.length} course{historyProducts.length !== 1 ? 's' : ''} viewed recently
            </p>
          </div>
        </div>

        {historyProducts.length > 0 && (
          <button
            onClick={handleClearHistory}
            className="border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear History
          </button>
        )}
      </div>

      {/* Content */}
      {historyProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No viewing history
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Your recently viewed courses will appear here. Start exploring our course catalog to build your learning history.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-hero-button hover:from-primary-600 hover:to-secondary-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Browse Courses
          </button>
        </div>
      ) : (
        <>
          {/* History Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-blue-800">
                Showing your last {historyProducts.length} viewed courses, with most recent first
              </span>
            </div>
          </div>

          {/* History Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historyProducts.map((product, index) => (
              <div key={product.id} className="relative">
                <div className="absolute -top-2 -left-2 z-10">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    #{index + 1}
                  </span>
                </div>
                <ProductCard
                  product={product}
                  onViewDetails={handleProductClick}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={isFavorite(product.id)}
                />
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-4">Your Browsing Insights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {historyProducts.length}
                </div>
                <div className="text-sm text-gray-600">Courses Viewed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {new Set(historyProducts.map(p => p.category)).size}
                </div>
                <div className="text-sm text-gray-600">Categories Explored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round(historyProducts.reduce((sum, p) => sum + p.rating, 0) / historyProducts.length * 10) / 10}
                </div>
                <div className="text-sm text-gray-600">Avg. Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {historyProducts.filter(p => isFavorite(p.id)).length}
                </div>
                <div className="text-sm text-gray-600">Added to Favorites</div>
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

export default HistoryPage;
