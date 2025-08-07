import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line 
} from 'recharts';
import { 
  Users, Activity, ShoppingCart, TrendingUp, Circle, ArrowUp 
} from 'lucide-react';

const AnalyticsPage = () => {
  // Dummy data for charts
  const userActivityData = [
    { name: 'Jan', active: 400, inactive: 100 },
    { name: 'Feb', active: 600, inactive: 150 },
    { name: 'Mar', active: 800, inactive: 200 },
    { name: 'Apr', active: 1000, inactive: 250 },
    { name: 'May', active: 1200, inactive: 300 },
    { name: 'Jun', active: 1400, inactive: 350 },
  ];

  const salesData = [
    { name: 'Week 1', sales: 400 },
    { name: 'Week 2', sales: 600 },
    { name: 'Week 3', sales: 800 },
    { name: 'Week 4', sales: 1200 },
  ];

  const topBuyers = [
    { name: 'John Doe', purchases: 12, amount: 2400 },
    { name: 'Jane Smith', purchases: 9, amount: 1800 },
    { name: 'Bob Johnson', purchases: 7, amount: 1400 },
    { name: 'Alice Brown', purchases: 5, amount: 1000 },
    { name: 'Charlie Wilson', purchases: 4, amount: 800 },
  ];

  const userStatusData = [
    { name: 'Active', value: 1400 },
    { name: 'Inactive', value: 350 },
  ];

  const COLORS = ['#FF4560', '#008FFB']; // Ferrari red and blue

  return (
    <div className="p-6 bg-black text-white">
      <div className="mb-8">
        <h1 className="text-2xl font-bold flex items-center">
          <TrendingUp className="mr-2" size={24} /> Analytics Dashboard
        </h1>
        <p className="text-gray-400">Monitor your platform performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900 p-4 rounded-xl border border-ferrari/20">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Total Users</p>
              <p className="text-2xl font-bold">1,750</p>
            </div>
            <div className="bg-ferrari/20 p-2 rounded-lg">
              <Users className="text-ferrari" size={20} />
            </div>
          </div>
          <div className="flex items-center mt-2 text-green-500 text-sm">
            <ArrowUp size={14} className="mr-1" />
            <span>12% from last month</span>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl border border-ferrari/20">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Active Users</p>
              <p className="text-2xl font-bold">1,400</p>
            </div>
            <div className="bg-green-500/20 p-2 rounded-lg">
              <Activity className="text-green-500" size={20} />
            </div>
          </div>
          <div className="flex items-center mt-2 text-green-500 text-sm">
            <ArrowUp size={14} className="mr-1" />
            <span>8% from last month</span>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl border border-ferrari/20">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Monthly Sales</p>
              <p className="text-2xl font-bold">$12,450</p>
            </div>
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <ShoppingCart className="text-blue-500" size={20} />
            </div>
          </div>
          <div className="flex items-center mt-2 text-green-500 text-sm">
            <ArrowUp size={14} className="mr-1" />
            <span>22% from last month</span>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl border border-ferrari/20">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Avg. Order Value</p>
              <p className="text-2xl font-bold">$89.50</p>
            </div>
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <TrendingUp className="text-purple-500" size={20} />
            </div>
          </div>
          <div className="flex items-center mt-2 text-green-500 text-sm">
            <ArrowUp size={14} className="mr-1" />
            <span>5% from last month</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* User Activity Chart */}
        <div className="bg-gray-900 p-4 rounded-xl border border-ferrari/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Activity className="mr-2" size={20} /> User Activity (Last 6 Months)
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="name" stroke="#A0AEC0" />
                <YAxis stroke="#A0AEC0" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A202C', borderColor: '#FF4560' }}
                  itemStyle={{ color: '#FFFFFF' }}
                />
                <Legend />
                <Bar dataKey="active" fill="#FF4560" name="Active Users" />
                <Bar dataKey="inactive" fill="#008FFB" name="Inactive Users" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Status Pie Chart */}
        <div className="bg-gray-900 p-4 rounded-xl border border-ferrari/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Circle className="mr-2" size={20} /> User Status Distribution
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {userStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A202C', borderColor: '#FF4560' }}
                  itemStyle={{ color: '#FFFFFF' }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales Trend Chart */}
        <div className="bg-gray-900 p-4 rounded-xl border border-ferrari/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="mr-2" size={20} /> Monthly Sales Trend
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="name" stroke="#A0AEC0" />
                <YAxis stroke="#A0AEC0" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A202C', borderColor: '#FF4560' }}
                  itemStyle={{ color: '#FFFFFF' }}
                />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#FF4560" name="Sales ($)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Buyers Table */}
        <div className="bg-gray-900 p-4 rounded-xl border border-ferrari/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <ShoppingCart className="mr-2" size={20} /> Top Buyers (This Month)
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Purchases</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {topBuyers.map((buyer, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">{buyer.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-400">{buyer.purchases}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-400">${buyer.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;