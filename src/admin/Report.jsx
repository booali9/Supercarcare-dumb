import React, { useState } from 'react';
import { 
  Download, FileText, Users, BarChart2, Calendar, Filter,
  ArrowDown, ArrowUp, ChevronDown, ChevronUp, Printer ,TrendingUp,Activity
} from 'lucide-react';
import { saveAs } from 'file-saver';

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState('finance');
  const [dateRange, setDateRange] = useState('last30');
  const [reportFormat, setReportFormat] = useState('pdf');
  const [financeSort, setFinanceSort] = useState({ field: 'date', order: 'desc' });
  const [userSort, setUserSort] = useState({ field: 'name', order: 'asc' });

  // Dummy data for reports
  const financeReports = [
    { id: 1, date: '2023-06-15', type: 'Monthly Summary', amount: 24500, status: 'completed' },
    { id: 2, date: '2023-06-10', type: 'Revenue Breakdown', amount: 18750, status: 'completed' },
    { id: 3, date: '2023-06-05', type: 'Expense Report', amount: 12500, status: 'completed' },
    { id: 4, date: '2023-05-28', type: 'Tax Summary', amount: 9800, status: 'completed' },
    { id: 5, date: '2023-05-20', type: 'Monthly Summary', amount: 22000, status: 'completed' },
  ];

  const userReports = [
    { id: 1, name: 'John Doe', email: 'john@example.com', signup: '2023-01-15', purchases: 12, status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', signup: '2023-02-20', purchases: 8, status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', signup: '2023-03-05', purchases: 5, status: 'inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', signup: '2023-04-10', purchases: 15, status: 'active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', signup: '2023-05-15', purchases: 3, status: 'inactive' },
  ];

  // Sort functions
  const sortFinanceReports = (field) => {
    const order = financeSort.field === field && financeSort.order === 'asc' ? 'desc' : 'asc';
    setFinanceSort({ field, order });
  };

  const sortUserReports = (field) => {
    const order = userSort.field === field && userSort.order === 'asc' ? 'desc' : 'asc';
    setUserSort({ field, order });
  };

  // Download report function
  const downloadReport = (type) => {
    // In a real app, this would generate or fetch the actual report
    const blob = new Blob([`Dummy ${type} report content`], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${type}_report_${new Date().toISOString().slice(0,10)}.${reportFormat}`);
  };

  // Generate sample report data
  const generateReport = () => {
    const reportType = activeTab === 'finance' ? 'Financial' : 'User';
    const fileName = `${reportType}_Report_${dateRange}.${reportFormat}`;
    const content = activeTab === 'finance' 
      ? financeReports.map(r => `${r.date} | ${r.type} | $${r.amount}`).join('\n')
      : userReports.map(u => `${u.name} | ${u.email} | ${u.signup} | ${u.purchases} purchases`).join('\n');
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, fileName);
  };

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold flex items-center">
          <FileText className="mr-2" size={24} /> Reports Dashboard
        </h1>
        <p className="text-gray-400">Generate and download financial and user reports</p>
      </div>

      {/* Report Controls */}
      <div className="bg-gray-900 rounded-xl border border-ferrari/20 p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Tab Selection */}
          <div className="flex border-b border-gray-700 md:border-none">
            <button
              className={`px-4 py-2 font-medium flex items-center ${activeTab === 'finance' ? 'text-ferrari border-b-2 border-ferrari' : 'text-gray-400'}`}
              onClick={() => setActiveTab('finance')}
            >
              <BarChart2 className="mr-2" size={18} /> Finance Reports
            </button>
            <button
              className={`px-4 py-2 font-medium flex items-center ${activeTab === 'users' ? 'text-ferrari border-b-2 border-ferrari' : 'text-gray-400'}`}
              onClick={() => setActiveTab('users')}
            >
              <Users className="mr-2" size={18} /> User Reports
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <select
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-ferrari focus:border-ferrari block w-full p-2 pr-8 appearance-none"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="last7">Last 7 Days</option>
                <option value="last30">Last 30 Days</option>
                <option value="last90">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </select>
              <Calendar className="absolute right-2.5 top-2.5 h-4 w-4 text-gray-400" />
            </div>

            <div className="relative">
              <select
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-ferrari focus:border-ferrari block w-full p-2 pr-8 appearance-none"
                value={reportFormat}
                onChange={(e) => setReportFormat(e.target.value)}
              >
                <option value="pdf">PDF</option>
                <option value="csv">CSV</option>
                <option value="xlsx">Excel</option>
              </select>
              <FileText className="absolute right-2.5 top-2.5 h-4 w-4 text-gray-400" />
            </div>

            <button
              className="bg-ferrari text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-ferrari/90 transition-colors"
              onClick={generateReport}
            >
              <Download className="mr-2" size={18} /> Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-gray-900 rounded-xl border border-ferrari/20 overflow-hidden">
        {activeTab === 'finance' ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                    onClick={() => sortFinanceReports('date')}
                  >
                    <div className="flex items-center">
                      Date
                      {financeSort.field === 'date' ? (
                        financeSort.order === 'asc' ? <ChevronUp className="ml-1" size={16} /> : <ChevronDown className="ml-1" size={16} />
                      ) : <Filter className="ml-1" size={16} />}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Report Type
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                    onClick={() => sortFinanceReports('amount')}
                  >
                    <div className="flex items-center">
                      Amount
                      {financeSort.field === 'amount' ? (
                        financeSort.order === 'asc' ? <ChevronUp className="ml-1" size={16} /> : <ChevronDown className="ml-1" size={16} />
                      ) : <Filter className="ml-1" size={16} />}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {financeReports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-800/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      {report.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      {report.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      ${report.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        report.status === 'completed' 
                          ? 'bg-green-500/20 text-green-500' 
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => downloadReport(report.type.toLowerCase().replace(' ', '_'))}
                        className="text-ferrari hover:text-ferrari/80 flex items-center justify-end w-full"
                      >
                        <Download className="mr-1" size={16} /> Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                    onClick={() => sortUserReports('name')}
                  >
                    <div className="flex items-center">
                      Name
                      {userSort.field === 'name' ? (
                        userSort.order === 'asc' ? <ChevronUp className="ml-1" size={16} /> : <ChevronDown className="ml-1" size={16} />
                      ) : <Filter className="ml-1" size={16} />}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Signup Date
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                    onClick={() => sortUserReports('purchases')}
                  >
                    <div className="flex items-center">
                      Purchases
                      {userSort.field === 'purchases' ? (
                        userSort.order === 'asc' ? <ChevronUp className="ml-1" size={16} /> : <ChevronDown className="ml-1" size={16} />
                      ) : <Filter className="ml-1" size={16} />}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {userReports.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-800/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      {user.signup}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      {user.purchases}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        user.status === 'active' 
                          ? 'bg-green-500/20 text-green-500' 
                          : 'bg-red-500/20 text-red-500'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-3">
                        <button
                          onClick={() => downloadReport(`user_${user.id}`)}
                          className="text-ferrari hover:text-ferrari/80 flex items-center"
                          title="Download Report"
                        >
                          <Download size={16} />
                        </button>
                        <button
                          className="text-gray-400 hover:text-white"
                          title="Print"
                        >
                          <Printer size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-900 p-4 rounded-xl border border-ferrari/20">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Total {activeTab === 'finance' ? 'Revenue' : 'Users'}</p>
              <p className="text-2xl font-bold">
                {activeTab === 'finance' ? '$54,250' : '1,750'}
              </p>
            </div>
            <div className={`p-2 rounded-lg ${
              activeTab === 'finance' ? 'bg-green-500/20' : 'bg-blue-500/20'
            }`}>
              {activeTab === 'finance' ? (
                <TrendingUp className="text-green-500" size={20} />
              ) : (
                <Users className="text-blue-500" size={20} />
              )}
            </div>
          </div>
          <div className="flex items-center mt-2 text-green-500 text-sm">
            <ArrowUp size={14} className="mr-1" />
            <span>
              {activeTab === 'finance' ? '18% from last period' : '12% from last month'}
            </span>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl border border-ferrari/20">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">{activeTab === 'finance' ? 'Reports Generated' : 'Active Users'}</p>
              <p className="text-2xl font-bold">
                {activeTab === 'finance' ? '24' : '1,400'}
              </p>
            </div>
            <div className={`p-2 rounded-lg ${
              activeTab === 'finance' ? 'bg-purple-500/20' : 'bg-green-500/20'
            }`}>
              {activeTab === 'finance' ? (
                <FileText className="text-purple-500" size={20} />
              ) : (
                <Activity className="text-green-500" size={20} />
              )}
            </div>
          </div>
          <div className="flex items-center mt-2 text-green-500 text-sm">
            <ArrowUp size={14} className="mr-1" />
            <span>
              {activeTab === 'finance' ? '3 new today' : '8% from last month'}
            </span>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl border border-ferrari/20">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">{activeTab === 'finance' ? 'Avg. Daily Revenue' : 'Conversion Rate'}</p>
              <p className="text-2xl font-bold">
                {activeTab === 'finance' ? '$1,250' : '3.2%'}
              </p>
            </div>
            <div className={`p-2 rounded-lg ${
              activeTab === 'finance' ? 'bg-yellow-500/20' : 'bg-ferrari/20'
            }`}>
              {activeTab === 'finance' ? (
                <BarChart2 className="text-yellow-500" size={20} />
              ) : (
                <TrendingUp className="text-ferrari" size={20} />
              )}
            </div>
          </div>
          <div className={`flex items-center mt-2 text-sm ${
            activeTab === 'finance' ? 'text-green-500' : 'text-red-500'
          }`}>
            {activeTab === 'finance' ? (
              <ArrowUp size={14} className="mr-1" />
            ) : (
              <ArrowDown size={14} className="mr-1" />
            )}
            <span>
              {activeTab === 'finance' ? '5% from last week' : '0.5% from last month'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;