
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import SearchBar from '@/components/SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap">TitanEvolve</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/products" className="text-white/80 hover:text-purple-400 transition-colors font-medium">
              Products
            </Link>
            <Link to="/verify" className="flex items-center space-x-1 text-white/80 hover:text-purple-400 transition-colors font-medium">
              <Shield className="w-4 h-4" />
              <span>Verify</span>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search */}
            <SearchBar />

            {/* Cart */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                <ShoppingCart className="w-4 h-4" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="hidden md:flex items-center space-x-2">
                <Link to="/profile">
                  <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                    <User className="w-4 h-4" />
                  </Button>
                </Link>
                {user.isAdmin && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400/50 text-xs">
                      Admin
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="sm" onClick={handleLogout} className="text-white/80 hover:text-white hover:bg-white/10 text-xs">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 text-xs">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="default" size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 text-xs">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/products" 
                className="text-white/80 hover:text-purple-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/verify" 
                className="flex items-center space-x-1 text-white/80 hover:text-purple-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield className="w-4 h-4" />
                <span>Verify Product</span>
              </Link>
              
              {user ? (
                <>
                  <Link 
                    to="/profile" 
                    className="text-white/80 hover:text-purple-400 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  {user.isAdmin && (
                    <Link 
                      to="/admin" 
                      className="text-white/80 hover:text-purple-400 transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button 
                    onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                    className="text-left text-white/80 hover:text-purple-400 transition-colors font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full justify-start text-white/80 hover:text-white hover:bg-white/10">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="default" size="sm" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
