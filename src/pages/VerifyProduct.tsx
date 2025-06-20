
import { useState } from 'react';
import { Shield, CheckCircle, XCircle, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { toast } from 'sonner';

const VerifyProduct = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationResult, setVerificationResult] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    purchaseLocation: '',
    message: ''
  });

  // Mock verification codes for demo
  const validCodes = ['TEN1234', 'TEN5678', 'TEN9012', 'TEN3456'];

  const handleVerification = () => {
    const code = verificationCode.toUpperCase().trim();
    
    if (!code) {
      toast.error('Please enter a verification code');
      return;
    }

    // Simulate verification process
    setTimeout(() => {
      if (validCodes.includes(code)) {
        setVerificationResult('valid');
        toast.success('Product verified successfully!');
      } else {
        setVerificationResult('invalid');
        toast.error('Invalid verification code');
      }
    }, 1000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success('Contact form submitted successfully! We will get back to you soon.');
    setShowContactForm(false);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      purchaseLocation: '',
      message: ''
    });
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header - Improved layout and symmetry */}
          <div className="text-center mb-8 md:mb-12">
            {/* Security First Badge - Better positioning */}
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                <span className="text-xs md:text-sm font-medium text-purple-300">Security First</span>
              </div>
            </div>
            
            {/* Shield Icon - Better centering and sizing */}
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Product Authenticity Verification
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Verify the authenticity of your TitanEvolve Nutrition products by entering the 7-digit code found on your product packaging.
            </p>
          </div>

          {/* Verification Section */}
          <Card className="mb-6 md:mb-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center text-xl md:text-2xl font-bold text-white">Enter Verification Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg px-4">
                  Look for the 7-digit verification code on your product label or packaging
                </p>
                <div className="max-w-md mx-auto">
                  <Input
                    placeholder="Enter 7-digit code (e.g., TEN1234)"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="text-center text-base md:text-lg font-mono tracking-wider uppercase h-12 md:h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400/50 rounded-xl"
                    maxLength={7}
                  />
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={handleVerification}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 md:px-8 py-3 rounded-xl transform hover:scale-105 transition-all duration-300 h-12"
                  disabled={!verificationCode.trim()}
                >
                  Verify Product
                </Button>
              </div>

              {/* Verification Results */}
              {verificationResult === 'valid' && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 md:p-6 text-center backdrop-blur-sm">
                  <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl md:text-2xl font-semibold text-green-300 mb-3">
                    ✅ Product Verified Successfully!
                  </h3>
                  <p className="text-green-200 mb-4 md:mb-6 text-base md:text-lg">
                    Congratulations! Your TitanEvolve Nutrition product is 100% authentic and genuine.
                  </p>
                  <div className="bg-white/5 rounded-xl p-4 border border-green-500/20">
                    <h4 className="font-semibold text-green-300 mb-3">Product Details:</h4>
                    <p className="text-sm text-green-200">
                      • Verification Code: {verificationCode.toUpperCase()}<br/>
                      • Status: Authentic<br/>
                      • Verified on: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-green-200 mt-4 text-base md:text-lg">
                    Thank you for choosing TitanEvolve Nutrition! 💪
                  </p>
                </div>
              )}

              {verificationResult === 'invalid' && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 md:p-6 text-center backdrop-blur-sm">
                  <XCircle className="w-12 h-12 md:w-16 md:h-16 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl md:text-2xl font-semibold text-red-300 mb-3">
                    ❌ Invalid Verification Code
                  </h3>
                  <p className="text-red-200 mb-4 md:mb-6 text-base md:text-lg">
                    The verification code you entered does not match our records. This may indicate a counterfeit product.
                  </p>
                  <Button
                    onClick={() => setShowContactForm(true)}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-3 rounded-xl mb-4"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Seller Support
                  </Button>
                  <p className="text-sm text-red-300">
                    For your safety, please do not consume this product and contact the seller immediately.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Form */}
          {showContactForm && (
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-6 md:mb-8">
              <CardHeader>
                <CardTitle className="text-red-400 text-xl md:text-2xl">Contact Seller Support</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={contactForm.name}
                        onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400/50 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400/50 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400/50 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Where did you purchase? *
                      </label>
                      <Input
                        value={contactForm.purchaseLocation}
                        onChange={(e) => setContactForm(prev => ({ ...prev, purchaseLocation: e.target.value }))}
                        placeholder="Store name, website, etc."
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400/50 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Please provide any additional details about your purchase, including batch number, expiry date, or any suspicious packaging..."
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400/50 rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl"
                    >
                      Submit Support Request
                    </Button>
                    <Button 
                      type="button" 
                      onClick={() => setShowContactForm(false)}
                      className="flex-1 h-12 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-xl"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* How to Find Code */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white text-xl md:text-2xl">How to Find Your Verification Code</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <span className="font-bold text-lg md:text-xl">1</span>
                  </div>
                  <h4 className="font-semibold mb-3 text-white text-base md:text-lg">Check the Label</h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    Look for a scratch-off section or printed code on the product label.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <span className="font-bold text-lg md:text-xl">2</span>
                  </div>
                  <h4 className="font-semibold mb-3 text-white text-base md:text-lg">QR Code</h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    Scan the QR code with your phone camera to be directed here automatically.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <span className="font-bold text-lg md:text-xl">3</span>
                  </div>
                  <h4 className="font-semibold mb-3 text-white text-base md:text-lg">Inside Packaging</h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    Some products have the code printed inside the lid or on inner packaging.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VerifyProduct;
