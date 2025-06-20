
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Download, Shield, CheckCircle, XCircle, Sparkles } from 'lucide-react';

const AdminCodes = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock verification codes data
  const [codes] = useState([
    {
      id: 1,
      code: 'TN12345',
      product: 'TitanEvolve Pre-Workout Extreme',
      batch: 'BATCH001',
      status: 'active',
      verifications: 0,
      createdDate: '2024-01-15',
    },
    {
      id: 2,
      code: 'TN12346',
      product: 'Premium Whey Protein Isolate',
      batch: 'BATCH002',
      status: 'verified',
      verifications: 1,
      createdDate: '2024-01-14',
    },
    {
      id: 3,
      code: 'TN12347',
      product: 'Creatine Monohydrate Ultra',
      batch: 'BATCH001',
      status: 'expired',
      verifications: 0,
      createdDate: '2024-01-10',
    },
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Shield className="w-4 h-4" />;
      case 'verified':
        return <CheckCircle className="w-4 h-4" />;
      case 'expired':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Shield className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border border-green-500/30';
      case 'verified':
        return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
      case 'expired':
        return 'bg-red-500/20 text-red-400 border border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    }
  };

  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        </div>
        
        <Card className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Access Denied</h2>
            <p className="text-gray-300">You don't have permission to access this page.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-cyan-500/25 to-blue-500/25 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Admin Panel</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Verification Codes
            </h1>
            <p className="text-gray-300 mt-2">Manage product authenticity verification codes</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Generate Codes</span>
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 bg-white/5 backdrop-blur-xl border border-white/10">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search verification codes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400/50"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">All Status</Button>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">Product</Button>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">Batch</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Codes Table */}
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Verification Codes</CardTitle>
            <CardDescription className="text-gray-300">Track and manage product verification codes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-4 text-gray-300">Code</th>
                    <th className="text-left p-4 text-gray-300">Product</th>
                    <th className="text-left p-4 text-gray-300">Batch</th>
                    <th className="text-left p-4 text-gray-300">Status</th>
                    <th className="text-left p-4 text-gray-300">Verifications</th>
                    <th className="text-left p-4 text-gray-300">Created</th>
                    <th className="text-left p-4 text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {codes.map((code) => (
                    <tr key={code.id} className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-4 font-mono font-bold text-purple-400">{code.code}</td>
                      <td className="p-4 text-white">{code.product}</td>
                      <td className="p-4 font-mono text-sm text-gray-300">{code.batch}</td>
                      <td className="p-4">
                        <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(code.status)}`}>
                          {getStatusIcon(code.status)}
                          <span className="capitalize">{code.status}</span>
                        </div>
                      </td>
                      <td className="p-4 text-white">{code.verifications}</td>
                      <td className="p-4 text-gray-300">{code.createdDate}</td>
                      <td className="p-4">
                        <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-white">1,234</div>
              <p className="text-sm text-gray-300">Total Codes</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-white">856</div>
              <p className="text-sm text-gray-300">Active Codes</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-white">234</div>
              <p className="text-sm text-gray-300">Verified</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-white">95.2%</div>
              <p className="text-sm text-gray-300">Success Rate</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminCodes;
