
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-xl text-white border-t border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">TitanEvolve</span>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Premium nutrition supplements for athletes and fitness enthusiasts. 
              Evolve your performance with TitanEvolve Nutrition.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-200 hover:text-purple-400 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-200 hover:text-purple-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-200 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products" className="text-gray-200 hover:text-purple-400 transition-colors">All Products</Link></li>
              <li><Link to="/verify" className="text-gray-200 hover:text-purple-400 transition-colors">Verify Product</Link></li>
              <li><Link to="/profile" className="text-gray-200 hover:text-purple-400 transition-colors">My Account</Link></li>
              <li><Link to="/cart" className="text-gray-200 hover:text-purple-400 transition-colors">Shopping Cart</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Categories</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products?category=pre-workout" className="text-gray-200 hover:text-purple-400 transition-colors">Pre Workout</Link></li>
              <li><Link to="/products?category=whey-protein" className="text-gray-200 hover:text-purple-400 transition-colors">Whey Protein</Link></li>
              <li><Link to="/products?category=creatine" className="text-gray-200 hover:text-purple-400 transition-colors">Creatine</Link></li>
              <li><Link to="/products?category=vitamins" className="text-gray-200 hover:text-purple-400 transition-colors">Vitamins</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-200">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>support@titanevolve.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-200">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-200">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>123 Fitness Street, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/30 mt-8 pt-8 text-center text-sm text-gray-200">
          <p>&copy; 2024 TitanEvolve Nutrition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
