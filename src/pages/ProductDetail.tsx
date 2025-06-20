
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Shield, Star, Plus, Minus, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: parseInt(id || '1'),
    name: 'TitanEvolve Pre-Workout Extreme',
    price: 49.99,
    originalPrice: 69.99,
    category: 'Pre Workout',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    images: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg'
    ],
    description: 'Unleash your full potential with TitanEvolve Pre-Workout Extreme. Our scientifically formulated blend delivers explosive energy, enhanced focus, and incredible pumps to power through your most intense training sessions.',
    ingredients: ['Caffeine Anhydrous (300mg)', 'L-Citrulline (6g)', 'Beta-Alanine (3.2g)', 'Creatine Monohydrate (3g)'],
    benefits: ['Explosive Energy', 'Enhanced Focus', 'Incredible Pumps', 'Increased Endurance'],
    servings: 30,
    flavor: 'Blue Raspberry'
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category
      });
    }
    toast.success(`Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Header />
      
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        
        {/* Floating Gradient Orbs - Reduced on mobile */}
        <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-cyan-500/25 to-blue-500/25 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10 pt-20 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb - Fixed layout and spacing */}
          <div className="mb-6 md:mb-8">
            <Link 
              to="/products" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-sm md:text-base">Back to Products</span>
            </Link>
            
            {/* Premium Badge - Better positioning */}
            <div className="flex items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                <span className="text-xs md:text-sm font-medium text-purple-300">Premium Product</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <img 
                      src={product.images[selectedImage]} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {product.images.map((image, index) => (
                  <Card 
                    key={index}
                    className={`cursor-pointer transition-all bg-white/5 backdrop-blur-xl border ${
                      selectedImage === index 
                        ? 'border-purple-400/50 ring-2 ring-purple-400/30' 
                        : 'border-white/10 hover:border-purple-400/30'
                    } overflow-hidden`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <img 
                          src={image} 
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-3 bg-purple-600/20 text-purple-300 border-purple-500/30">
                  {product.category}
                </Badge>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent leading-tight">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 md:w-5 md:h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-white">₹{product.price}</span>
                  <span className="text-lg md:text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
                  <Badge className="bg-red-600/20 text-red-300 border-red-500/30 text-xs md:text-sm">
                    Save ₹{(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                </div>
              </div>

              {/* Description */}
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{product.description}</p>
                </CardContent>
              </Card>

              {/* Quantity Selector */}
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between md:gap-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium">Quantity:</span>
                      <div className="flex items-center bg-white/10 rounded-lg border border-white/20">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 p-0 text-white hover:bg-white/20"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center font-medium text-white">{quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 p-0 text-white hover:bg-white/20"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="lg"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex-shrink-0"
                      >
                        <Heart className="w-5 h-5" />
                      </Button>
                      <Button 
                        onClick={handleAddToCart}
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 md:px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex-1 md:flex-initial"
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Product Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-purple-400" />
                      Key Benefits
                    </h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-300 text-sm">• {benefit}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Product Info</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Servings:</span>
                        <span className="text-gray-300">{product.servings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Flavor:</span>
                        <span className="text-gray-300">{product.flavor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Stock:</span>
                        <span className="text-green-400">In Stock</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Ingredients */}
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Ingredients</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <div key={index} className="text-gray-300 text-xs md:text-sm bg-white/5 rounded-lg p-3 border border-white/10">
                        {ingredient}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
