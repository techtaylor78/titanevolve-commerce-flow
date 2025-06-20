
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 transform hover:-translate-y-2 rounded-2xl md:rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-2xl md:rounded-t-3xl">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm font-bold rounded-full shadow-lg">
            Save ₹{(product.originalPrice - product.price).toFixed(0)}
          </div>
        )}
        
        {/* Quick Actions - Hidden on mobile, visible on desktop */}
        <div className={`absolute top-3 right-3 md:top-4 md:right-4 hidden md:flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <button className="w-9 h-9 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
            <Heart className="w-3 h-3 md:w-4 md:h-4" />
          </button>
          <Link to={`/product/${product.id}`}>
            <button className="w-9 h-9 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
              <Eye className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </Link>
        </div>
        
        {/* Category Badge */}
        <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
          <span className="px-2 py-1 md:px-3 md:py-1 bg-purple-600/80 backdrop-blur-sm text-purple-100 text-xs md:text-sm font-medium rounded-full border border-purple-400/30">
            {product.category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-4 md:p-6 relative z-20">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-base md:text-lg font-bold text-white mb-3 hover:text-purple-300 transition-colors line-clamp-2 group-hover:text-purple-300 leading-tight">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-3 md:mb-4">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 md:w-4 md:h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-500'}`} 
              />
            ))}
          </div>
          <span className="text-xs md:text-sm text-gray-400">
            {product.rating} ({product.reviews})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-lg md:text-2xl font-bold text-white">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm md:text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
          </div>
          {product.originalPrice && (
            <div className="text-xs md:text-sm text-green-400 font-semibold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </div>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2.5 md:py-3 rounded-lg md:rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group text-sm md:text-base"
        >
          <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 mr-2 group-hover:animate-bounce" />
          Add to Cart
        </Button>

        {/* Mobile Quick Actions */}
        <div className="md:hidden flex justify-center space-x-4 mt-3">
          <button className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300">
            <Heart className="w-4 h-4" />
          </button>
          <Link to={`/product/${product.id}`}>
            <button className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300">
              <Eye className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
