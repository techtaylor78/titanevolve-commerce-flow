
import { BarChart, Users, Package, ShoppingCart, TrendingUp, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { user } = useAuth();

  if (!user?.isAdmin) {
    return <Navigate to="/login" replace />;
  }

  const stats = [
    {
      title: "Total Revenue",
      value: "$24,590",
      change: "+12.5%",
      icon: <DollarSign className="w-6 h-6" />,
      color: "text-green-600"
    },
    {
      title: "Total Orders",
      value: "1,247",
      change: "+8.2%",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "text-blue-600"
    },
    {
      title: "Total Products",
      value: "156",
      change: "+3.1%",
      icon: <Package className="w-6 h-6" />,
      color: "text-purple-600"
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+15.3%",
      icon: <Users className="w-6 h-6" />,
      color: "text-orange-600"
    }
  ];

  const recentOrders = [
    { id: '#12345', customer: 'John Doe', amount: '$89.99', status: 'Completed', date: '2024-01-15' },
    { id: '#12344', customer: 'Jane Smith', amount: '$159.99', status: 'Processing', date: '2024-01-15' },
    { id: '#12343', customer: 'Mike Johnson', amount: '$49.99', status: 'Shipped', date: '2024-01-14' },
    { id: '#12342', customer: 'Sarah Wilson', amount: '$199.99', status: 'Completed', date: '2024-01-14' }
  ];

  const topProducts = [
    { name: 'Titan Pre-Workout Explosive', sales: 324, revenue: '$16,200' },
    { name: 'Evolve Whey Protein Isolate', sales: 156, revenue: '$12,480' },
    { name: 'Titan Creatine Monohydrate', sales: 89, revenue: '$2,670' },
    { name: 'Evolve Recovery Complex', sales: 67, revenue: '$2,680' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm ${stat.color} font-medium mt-1`}>
                        <TrendingUp className="w-3 h-3 inline mr-1" />
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`${stat.color} bg-gray-100 p-3 rounded-lg`}>
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map(order => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.customer}</p>
                        <p className="text-xs text-gray-500">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{order.amount}</p>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Products */}
            <Card>
              <CardHeader>
                <CardTitle>Top Selling Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 truncate">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.sales} units sold</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{product.revenue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Package className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Manage Products</h3>
                <p className="text-sm text-gray-600">Add, edit, or remove products from your catalog</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <ShoppingCart className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">View Orders</h3>
                <p className="text-sm text-gray-600">Process and manage customer orders</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <BarChart className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                <p className="text-sm text-gray-600">View detailed sales and performance reports</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
