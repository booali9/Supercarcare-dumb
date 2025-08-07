import React from 'react';
import { Users, CheckCircle, XCircle, Edit, Trash2, Plus } from 'lucide-react';

const AdminUserStats = () => {
  // Dummy data included directly in the component
  const userStats = {
    total: 1243,
    active: 1024,
    inactive: 219,
    recent: [
      { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active' },
      { id: 4, name: 'Alice Williams', email: 'alice@example.com', status: 'active' },
      { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', status: 'inactive' }
    ]
  };

  return (
    <div className="mb-6 p-4 bg-gray-900 rounded-lg border border-ferrari/10">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-medium text-white flex items-center">
          <Users className="mr-2" size={18} /> User Overview
        </h4>
        <button className="text-xs bg-ferrari text-white px-3 py-1 rounded-full flex items-center">
          <Plus size={14} className="mr-1" /> Add User
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-800 p-3 rounded-lg">
          <div className="text-gray-400 text-xs">Total Users</div>
          <div className="text-white font-medium text-xl">{userStats.total}</div>
        </div>
        <div className="bg-gray-800 p-3 rounded-lg">
          <div className="flex items-center text-xs">
            <CheckCircle className="text-green-500 mr-1" size={14} />
            <span className="text-gray-400">Active</span>
          </div>
          <div className="text-white font-medium text-xl">{userStats.active}</div>
        </div>
        <div className="bg-gray-800 p-3 rounded-lg">
          <div className="flex items-center text-xs">
            <XCircle className="text-red-500 mr-1" size={14} />
            <span className="text-gray-400">Inactive</span>
          </div>
          <div className="text-white font-medium text-xl">{userStats.inactive}</div>
        </div>
        <div className="bg-gray-800 p-3 rounded-lg">
          <div className="text-gray-400 text-xs">New Today</div>
          <div className="text-white font-medium text-xl">24</div>
        </div>
      </div>

      <div className="space-y-3">
        <h5 className="text-xs text-gray-400 font-medium">Recent Users</h5>
        {userStats.recent.map(user => (
          <div key={user.id} className="flex items-center justify-between p-2 bg-gray-800 rounded-lg">
            <div>
              <div className="text-white text-sm">{user.name}</div>
              <div className="text-gray-400 text-xs">{user.email}</div>
              <span className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full ${
                user.status === 'active' 
                  ? 'bg-green-500/20 text-green-500' 
                  : 'bg-red-500/20 text-red-500'
              }`}>
                {user.status}
              </span>
            </div>
            <div className="flex space-x-2">
              <button className="p-1 text-gray-400 hover:text-ferrari rounded-full hover:bg-ferrari/10">
                <Edit size={16} />
              </button>
              <button className="p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-500/10">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUserStats;