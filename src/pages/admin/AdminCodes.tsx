
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Download, Shield, CheckCircle, XCircle } from 'lucide-react';

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
        return 'bg-green-100 text-green-800';
      case 'verified':
        return 'bg-blue-100 text-blue-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
            <p className="text-gray-600">You don't have permission to access this page.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Verification Codes</h1>
            <p className="text-gray-600 mt-2">Manage product authenticity verification codes</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </Button>
            <Button className="btn-primary flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Generate Codes</span>
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search verification codes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline">All Status</Button>
                <Button variant="outline">Product</Button>
                <Button variant="outline">Batch</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Codes Table */}
        <Card>
          <CardHeader>
            <CardTitle>Verification Codes</CardTitle>
            <CardDescription>Track and manage product verification codes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Code</th>
                    <th className="text-left p-4">Product</th>
                    <th className="text-left p-4">Batch</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Verifications</th>
                    <th className="text-left p-4">Created</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {codes.map((code) => (
                    <tr key={code.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-mono font-bold">{code.code}</td>
                      <td className="p-4">{code.product}</td>
                      <td className="p-4 font-mono text-sm">{code.batch}</td>
                      <td className="p-4">
                        <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(code.status)}`}>
                          {getStatusIcon(code.status)}
                          <span className="capitalize">{code.status}</span>
                        </div>
                      </td>
                      <td className="p-4">{code.verifications}</td>
                      <td className="p-4 text-gray-600">{code.createdDate}</td>
                      <td className="p-4">
                        <Button size="sm" variant="outline">
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
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-sm text-gray-600">Total Codes</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">856</div>
              <p className="text-sm text-gray-600">Active Codes</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">234</div>
              <p className="text-sm text-gray-600">Verified</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">95.2%</div>
              <p className="text-sm text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminCodes;
