import { X, Star, Heart, Share2, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleFavorite: (productId: string) => void;
  isFavorite: boolean;
}

const ProductModal = ({
  product,
  isOpen,
  onClose,
  onToggleFavorite,
  isFavorite
}: ProductModalProps) => {
  if (!isOpen || !product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium text-gray-700 ml-1">
                    {product.rating}
                  </span>
                </div>
                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span>
                {product.level && (
                  <span className="bg-primary-100 text-primary-600 text-sm px-2 py-1 rounded-full">
                    {product.level}
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleFavorite(product.id)}
                className={`p-2 rounded-full transition-colors ${
                  isFavorite
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-400 hover:text-red-500'
                }`}
              >
                <Heart
                  className="w-5 h-5"
                  fill={isFavorite ? 'currentColor' : 'none'}
                />
              </button>
              <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Course Details</h3>
              <div className="space-y-2">
                {product.instructor && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Instructor:</span>
                    <span className="font-medium">{product.instructor}</span>
                  </div>
                )}
                {product.duration && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{product.duration}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Students:</span>
                  <span className="font-medium">{product.reviews} enrolled</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">What you'll learn</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm font-medium text-gray-700 mr-2">Tags:</span>
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-primary-600">
                  {formatPrice(product.price)}
                </span>
              </div>
              <div className="flex gap-3">
                <button className="btn-secondary">
                  Add to Wishlist
                </button>
                <button className="btn-primary flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
