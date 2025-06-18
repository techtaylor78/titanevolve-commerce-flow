
import { useState } from 'react';
import { Shield, CheckCircle, XCircle, Mail } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Authenticity Verification</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Verify the authenticity of your TitanEvolve Nutrition products by entering the 7-digit code found on your product packaging.
            </p>
          </div>

          {/* Verification Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Enter Verification Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Look for the 7-digit verification code on your product label or packaging
                </p>
                <div className="max-w-md mx-auto">
                  <Input
                    placeholder="Enter 7-digit code (e.g., TEN1234)"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="text-center text-lg font-mono tracking-wider uppercase"
                    maxLength={7}
                  />
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={handleVerification}
                  className="btn-primary"
                  disabled={!verificationCode.trim()}
                >
                  Verify Product
                </Button>
              </div>

              {/* Verification Results */}
              {verificationResult === 'valid' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    ✅ Product Verified Successfully!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Congratulations! Your TitanEvolve Nutrition product is 100% authentic and genuine.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Product Details:</h4>
                    <p className="text-sm text-green-700">
                      • Verification Code: {verificationCode.toUpperCase()}<br/>
                      • Status: Authentic<br/>
                      • Verified on: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-green-700 mt-4">
                    Thank you for choosing TitanEvolve Nutrition! 💪
                  </p>
                </div>
              )}

              {verificationResult === 'invalid' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                  <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-red-800 mb-2">
                    ❌ Invalid Verification Code
                  </h3>
                  <p className="text-red-700 mb-4">
                    The verification code you entered does not match our records. This may indicate a counterfeit product.
                  </p>
                  <Button
                    onClick={() => setShowContactForm(true)}
                    variant="destructive"
                    className="mb-4"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Seller Support
                  </Button>
                  <p className="text-sm text-red-600">
                    For your safety, please do not consume this product and contact the seller immediately.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Form */}
          {showContactForm && (
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Contact Seller Support</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        value={contactForm.name}
                        onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Where did you purchase? *
                      </label>
                      <Input
                        value={contactForm.purchaseLocation}
                        onChange={(e) => setContactForm(prev => ({ ...prev, purchaseLocation: e.target.value }))}
                        placeholder="Store name, website, etc."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <Textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Please provide any additional details about your purchase, including batch number, expiry date, or any suspicious packaging..."
                      rows={4}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="btn-primary flex-1">
                      Submit Support Request
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowContactForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* How to Find Code */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>How to Find Your Verification Code</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Check the Label</h4>
                  <p className="text-sm text-gray-600">
                    Look for a scratch-off section or printed code on the product label.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">QR Code</h4>
                  <p className="text-sm text-gray-600">
                    Scan the QR code with your phone camera to be directed here automatically.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Inside Packaging</h4>
                  <p className="text-sm text-gray-600">
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
