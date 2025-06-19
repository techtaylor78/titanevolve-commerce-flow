
import { useState } from 'react';
import { Filter, Search, Grid, List, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ProductCard from '@/components/ProductCard';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Mock products data
  const allProducts = [
    {
      id: 1,
      name: "Titan Pre-Workout Explosive",
      price: 4999.99,
      originalPrice: 5999.99,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500",
      category: "pre-workout",
      rating: 4.8,
      reviews: 324
    },
    {
      id: 2,
      name: "Evolve Whey Protein Isolate",
      price: 7999.99,
      originalPrice: 8999.99,
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500",
      category: "whey-protein",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      name: "Titan Creatine Monohydrate",
      price: 2999.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      category: "creatine",
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      name: "Evolve Recovery Complex",
      price: 3999.99,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
      category: "recovery",
      rating: 4.6,
      reviews: 67
    },
    {
      id: 5,
      name: "Titan Mass Gainer Pro",
      price: 5999.99,
      image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=500",
      category: "mass-gainer",
      rating: 4.5,
      reviews: 123
    },
    {
      id: 6,
      name: "Evolve BCAA Complex",
      price: 3499.99,
      originalPrice: 3999.99,
      image: "https://images.unsplash.com/photo-1585529688665-15ea3b3c0949?w=500",
      category: "bcaa",
      rating: 4.4,
      reviews: 78
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'pre-workout', label: 'Pre Workout' },
    { value: 'whey-protein', label: 'Whey Protein' },
    { value: 'creatine', label: 'Creatine' },
    { value: 'recovery', label: 'Recovery' },
    { value: 'mass-gainer', label: 'Mass Gainer' },
    { value: 'bcaa', label: 'BCAA' }
  ];

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return b.reviews - a.reviews; // popular
      }
    });

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Header />
      
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-cyan-500/25 to-blue-500/25 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Premium Collection</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Our Products
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our complete range of premium nutrition supplements designed for champions
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-12 hover:border-white/20 transition-all duration-500">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400/50 h-12 rounded-xl"
                />
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                {/* Category Filter */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white h-12 rounded-xl">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-white/20">
                    {categories.map(category => (
                      <SelectItem key={category.value} value={category.value} className="text-white hover:bg-white/10">
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white h-12 rounded-xl">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-white/20">
                    <SelectItem value="popular" className="text-white hover:bg-white/10">Most Popular</SelectItem>
                    <SelectItem value="price-low" className="text-white hover:bg-white/10">Price: Low to High</SelectItem>
                    <SelectItem value="price-high" className="text-white hover:bg-white/10">Price: High to Low</SelectItem>
                    <SelectItem value="rating" className="text-white hover:bg-white/10">Highest Rated</SelectItem>
                    <SelectItem value="name" className="text-white hover:bg-white/10">Name A-Z</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex bg-white/10 rounded-xl p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={`px-4 h-10 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={`px-4 h-10 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-400 text-lg">
              Showing <span className="text-purple-400 font-semibold">{filteredProducts.length}</span> of <span className="text-purple-400 font-semibold">{allProducts.length}</span> products
            </p>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10">
                <Search className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
              <p className="text-gray-400 mb-8 text-lg max-w-md mx-auto">
                Try adjusting your search criteria or browse all products to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-xl transform hover:scale-105 transition-all duration-300"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
