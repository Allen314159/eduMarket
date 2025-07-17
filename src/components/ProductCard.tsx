import { Heart, Star, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onToggleFavorite: (productId: string) => void;
  isFavorite: boolean;
}

const ProductCard = ({
  product,
  onViewDetails,
  onToggleFavorite,
  isFavorite
}: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 group cursor-pointer shadow-sm">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-200 ${
            isFavorite
              ? 'bg-accent-500 text-white'
              : 'bg-white/90 backdrop-blur-sm text-gray-400 hover:text-accent-500'
          }`}
        >
          <Heart
            className="w-5 h-5"
            fill={isFavorite ? 'currentColor' : 'none'}
          />
        </button>
        
        {product.level && (
          <span className="absolute top-3 left-3 bg-hero-button text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
            {product.level}
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700 ml-1">
              {product.rating}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            ({product.reviews} reviews)
          </span>
        </div>

        {product.instructor && (
          <p className="text-sm text-gray-600 mb-2">
            Instructor: {product.instructor}
          </p>
        )}

        {product.duration && (
          <p className="text-sm text-gray-600 mb-3">
            Duration: {product.duration}
          </p>
        )}

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold bg-hero-text bg-clip-text text-transparent">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="bg-hero-button hover:from-primary-600 hover:to-secondary-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            <Eye className="w-4 h-4" />
            Xem chi tiết
          </button>
        </div>

        <div className="flex flex-wrap gap-1 mt-3">
          {product.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
