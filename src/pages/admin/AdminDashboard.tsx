
import { BarChart, Users, Package, ShoppingCart, TrendingUp, DollarSign, Sparkles } from 'lucide-react';
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
      color: "text-green-400"
    },
    {
      title: "Total Orders",
      value: "1,247",
      change: "+8.2%",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      title: "Total Products",
      value: "156",
      change: "+3.1%",
      icon: <Package className="w-6 h-6" />,
      color: "text-purple-400"
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+15.3%",
      icon: <Users className="w-6 h-6" />,
      color: "text-orange-400"
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
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Header />
      
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-cyan-500/25 to-blue-500/25 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Admin Dashboard</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-gray-300 mt-2">Welcome back! Here's what's happening with your store.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-300">{stat.title}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className={`text-sm ${stat.color} font-medium mt-1 flex items-center`}>
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`${stat.color} bg-white/10 p-3 rounded-lg backdrop-blur-sm`}>
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map(order => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                      <div>
                        <p className="font-medium text-white">{order.id}</p>
                        <p className="text-sm text-gray-300">{order.customer}</p>
                        <p className="text-xs text-gray-400">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white">{order.amount}</p>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          order.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          order.status === 'Processing' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                          'bg-blue-500/20 text-blue-400 border border-blue-500/30'
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
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Top Selling Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                      <div className="flex-1">
                        <p className="font-medium text-white truncate">{product.name}</p>
                        <p className="text-sm text-gray-300">{product.sales} units sold</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white">{product.revenue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="cursor-pointer hover:shadow-lg transition-all bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30">
              <CardContent className="p-6 text-center">
                <Package className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Manage Products</h3>
                <p className="text-sm text-gray-300">Add, edit, or remove products from your catalog</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-all bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30">
              <CardContent className="p-6 text-center">
                <ShoppingCart className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">View Orders</h3>
                <p className="text-sm text-gray-300">Process and manage customer orders</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-all bg-white/5 backdrop-blur-xl border border-white/10 hover:border-green-500/30">
              <CardContent className="p-6 text-center">
                <BarChart className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Analytics</h3>
                <p className="text-sm text-gray-300">View detailed sales and performance reports</p>
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
