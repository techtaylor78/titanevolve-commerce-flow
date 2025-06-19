
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award, Users, Star, ChevronRight, Sparkles, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ProductCard from '@/components/ProductCard';

const Index = () => {
  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Titan Pre-Workout Explosive",
      price: 4999.99,
      originalPrice: 5999.99,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500",
      category: "Pre Workout",
      rating: 4.8,
      reviews: 324
    },
    {
      id: 2,
      name: "Evolve Whey Protein Isolate",
      price: 7999.99,
      originalPrice: 8999.99,
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500",
      category: "Whey Protein",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      name: "Titan Creatine Monohydrate",
      price: 2999.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      category: "Creatine",
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      name: "Evolve Recovery Complex",
      price: 3999.99,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
      category: "Recovery",
      rating: 4.6,
      reviews: 67
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Header />
      
      {/* Hero Section - Redesigned with stunning visuals */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
          
          {/* Animated Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-80"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-50"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70"></div>
          
          {/* Floating Gradient Orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-cyan-500/25 to-blue-500/25 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Premium Nutrition Experience</span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Evolve Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                  Performance
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the future of nutrition with our 
                <span className="text-purple-400 font-semibold"> scientifically-crafted supplements</span> designed for champions who demand excellence.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <Link to="/products">
                <Button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 border-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Shop Premium Collection
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Button>
              </Link>
              
              <Link to="/verify">
                <Button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-semibold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105">
                  <Shield className="w-5 h-5 mr-2" />
                  Verify Authenticity
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50K+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">98%</div>
                <div className="text-sm text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-gray-400">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Glassmorphism Design */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose TitanEvolve?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience unmatched quality and transparency with every product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Authenticity Verified",
                description: "Every product comes with blockchain-verified authenticity codes",
                gradient: "from-purple-500 to-purple-700"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Premium Quality",
                description: "Lab-tested, third-party verified with zero compromises",
                gradient: "from-pink-500 to-pink-700"
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Same-day processing with premium delivery experience",
                gradient: "from-cyan-500 to-cyan-700"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Support",
                description: "Dedicated team of certified nutritionists at your service",
                gradient: "from-blue-500 to-blue-700"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Enhanced Design */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold">
                <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                  Featured Products
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl">
                Discover our most popular supplements trusted by elite athletes worldwide
              </p>
            </div>
            <Link to="/products" className="hidden lg:block">
              <Button className="group px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm rounded-xl transition-all duration-300">
                <span className="text-purple-300 group-hover:text-white transition-colors duration-300">
                  View All Collection
                </span>
                <ChevronRight className="ml-2 w-4 h-4 text-purple-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 lg:hidden">
            <Link to="/products">
              <Button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300">
                View All Products
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What Champions Say
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of athletes who've transformed their performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Professional Athlete",
                content: "TitanEvolve's pre-workout has completely revolutionized my training sessions. The sustained energy and focus are unmatched.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100"
              },
              {
                name: "Mike Chen",
                role: "Fitness Enthusiast",
                content: "The quality and results speak for themselves. I've seen incredible gains since switching to TitanEvolve's protein range.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
              },
              {
                name: "Emily Rodriguez",
                role: "CrossFit Competitor",
                content: "The authenticity verification gives me complete confidence. Premium quality with transparent sourcing - exactly what I need.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-purple-300">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-slate-950 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-6">
              <Target className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Ready to Transform?</span>
            </div>
            
            <h2 className="text-6xl font-bold">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Begin Your Evolution
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join the TitanEvolve community and experience the difference that premium nutrition makes in your fitness journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link to="/products">
                <Button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Shop Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Button>
              </Link>
              
              <Link to="/register">
                <Button className="px-10 py-4 bg-white text-slate-900 hover:bg-gray-100 font-bold text-lg rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <Shield className="w-5 h-5 mr-2" />
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
