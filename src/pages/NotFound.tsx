
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Sparkles } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-cyan-500/25 to-blue-500/25 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Oops!</span>
          </div>
          
          <div className="text-9xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            404
          </div>
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Page Not Found
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-md mx-auto leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-xl transform hover:scale-105 transition-all duration-300 h-12">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
          </Button>
          
          <Button asChild className="bg-white/10 border border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-3 rounded-xl transform hover:scale-105 transition-all duration-300 h-12">
            <Link to="/products" className="flex items-center space-x-2">
              <span>Browse Products</span>
            </Link>
          </Button>
        </div>
        
        <div className="mt-12">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 mx-auto text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
