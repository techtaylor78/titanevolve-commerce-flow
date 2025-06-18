
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-gradient">TitanEvolve</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium nutrition supplements for athletes and fitness enthusiasts. 
              Evolve your performance with TitanEvolve Nutrition.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/verify" className="text-gray-400 hover:text-white transition-colors">Verify Product</Link></li>
              <li><Link to="/profile" className="text-gray-400 hover:text-white transition-colors">My Account</Link></li>
              <li><Link to="/cart" className="text-gray-400 hover:text-white transition-colors">Shopping Cart</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=pre-workout" className="text-gray-400 hover:text-white transition-colors">Pre Workout</Link></li>
              <li><Link to="/products?category=whey-protein" className="text-gray-400 hover:text-white transition-colors">Whey Protein</Link></li>
              <li><Link to="/products?category=creatine" className="text-gray-400 hover:text-white transition-colors">Creatine</Link></li>
              <li><Link to="/products?category=vitamins" className="text-gray-400 hover:text-white transition-colors">Vitamins</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@titanevolve.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>123 Fitness Street, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 TitanEvolve Nutrition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
