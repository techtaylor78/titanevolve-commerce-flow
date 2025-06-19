
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award, Users, Star, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-black"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Evolve Your
              <span className="block text-gradient">Performance</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Premium nutrition supplements designed for athletes who demand excellence. 
              Fuel your transformation with TitanEvolve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/verify">
                <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                  <Shield className="mr-2 w-5 h-5" />
                  Verify Authenticity
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TitanEvolve?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering the highest quality supplements with unmatched transparency and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Authenticity Verified",
                description: "Every product comes with a unique verification code to ensure authenticity."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Premium Quality",
                description: "Lab-tested, third-party verified supplements with no fillers or artificial additives."
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Fast Shipping",
                description: "Free shipping on orders over ₹75 with same-day processing."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Support",
                description: "Dedicated customer support team with certified nutritionists."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-xl text-gray-600">
                Discover our most popular supplements trusted by thousands of athletes.
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="hidden sm:flex items-center">
                View All
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12 sm:hidden">
            <Link to="/products">
              <Button variant="outline" className="btn-secondary">
                View All Products
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Athletes Say</h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers who've transformed their performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Professional Athlete",
                content: "TitanEvolve's pre-workout has completely transformed my training sessions. The energy boost is incredible and sustained throughout my entire workout.",
                rating: 5
              },
              {
                name: "Mike Chen",
                role: "Fitness Enthusiast",
                content: "The whey protein tastes amazing and mixes perfectly. I've seen significant gains in muscle mass since switching to TitanEvolve.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Crossfit Competitor",
                content: "I love that I can verify the authenticity of every product. The quality is unmatched and the results speak for themselves.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Evolve?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join the TitanEvolve community and experience the difference premium nutrition makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-4">
                Shop Now
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                  <Shield className="mr-2 w-5 h-5" />
                  Create Account
                </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
