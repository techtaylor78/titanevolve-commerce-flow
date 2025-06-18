
import { useState } from 'react';
import { Filter, Search, Grid, List } from 'lucide-react';
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
      price: 49.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500",
      category: "pre-workout",
      rating: 4.8,
      reviews: 324
    },
    {
      id: 2,
      name: "Evolve Whey Protein Isolate",
      price: 79.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500",
      category: "whey-protein",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      name: "Titan Creatine Monohydrate",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      category: "creatine",
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      name: "Evolve Recovery Complex",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
      category: "recovery",
      rating: 4.6,
      reviews: 67
    },
    {
      id: 5,
      name: "Titan Mass Gainer Pro",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=500",
      category: "mass-gainer",
      rating: 4.5,
      reviews: 123
    },
    {
      id: 6,
      name: "Evolve BCAA Complex",
      price: 34.99,
      originalPrice: 39.99,
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
            <p className="text-xl text-gray-600">
              Discover our complete range of premium nutrition supplements
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                {/* Category Filter */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="px-3"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="px-3"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {allProducts.length} products
            </p>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or browse all products.
              </p>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}>
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
