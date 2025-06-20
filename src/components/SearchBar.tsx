
import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock products for search
  const mockProducts = [
    { id: 1, name: 'TitanEvolve Pre-Workout Extreme', category: 'Pre Workout', price: 49.99 },
    { id: 2, name: 'Premium Whey Protein Isolate', category: 'Whey Protein', price: 79.99 },
    { id: 3, name: 'Creatine Monohydrate Ultra', category: 'Creatine', price: 29.99 },
    { id: 4, name: 'BCAA Energy Boost', category: 'BCAA', price: 39.99 },
    { id: 5, name: 'Mass Gainer Pro', category: 'Mass Gainer', price: 89.99 },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to products page with search query
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Button (Mobile/Desktop) */}
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-white/80 hover:text-white hover:bg-white/10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Search className="w-4 h-4" />
      </Button>

      {/* Search Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 z-50">
          <Card className="bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl">
            <CardContent className="p-4">
              {/* Search Input */}
              <form onSubmit={handleSearchSubmit} className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400/50 rounded-xl"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>

              {/* Search Results */}
              {searchQuery.trim().length > 0 && (
                <div className="space-y-2">
                  {searchResults.length > 0 ? (
                    <>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Products</h4>
                      {searchResults.slice(0, 5).map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={() => setIsOpen(false)}
                          className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-purple-400/30"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-white font-medium text-sm">{product.name}</p>
                              <p className="text-gray-400 text-xs">{product.category}</p>
                            </div>
                            <p className="text-purple-300 font-semibold text-sm">₹{product.price}</p>
                          </div>
                        </Link>
                      ))}
                      {searchResults.length > 5 && (
                        <Link
                          to={`/products?search=${encodeURIComponent(searchQuery)}`}
                          onClick={() => setIsOpen(false)}
                          className="block p-2 text-center text-purple-400 hover:text-purple-300 text-sm font-medium"
                        >
                          View all {searchResults.length} results
                        </Link>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-400 text-sm">No products found</p>
                      <p className="text-gray-500 text-xs mt-1">Try searching with different keywords</p>
                    </div>
                  )}
                </div>
              )}

              {/* Quick Links */}
              {searchQuery.trim().length === 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Quick Links</h4>
                  <Link
                    to="/products?category=pre-workout"
                    onClick={() => setIsOpen(false)}
                    className="block p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    Pre-Workout Supplements
                  </Link>
                  <Link
                    to="/products?category=protein"
                    onClick={() => setIsOpen(false)}
                    className="block p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    Protein Powders
                  </Link>
                  <Link
                    to="/products?category=creatine"
                    onClick={() => setIsOpen(false)}
                    className="block p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    Creatine Products
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
