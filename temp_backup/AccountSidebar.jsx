import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Car, 
  MapPin, 
  HardDrive, 
  Heart, 
  Settings, 
  Package, 
  HelpCircle,
  CreditCard,
  User,
  Lock,
  Star,
  LogOut
} from 'lucide-react';

const AccountSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { 
      path: "/account/vehicles", 
      icon: <Car className="shrink-0" size={20} />, 
      label: "My Vehicles",
      description: "Manage your saved vehicles"
    },
    
  
  
    { 
      path: "/account/orders", 
      icon: <Package className="shrink-0" size={20} />, 
      label: "My Schedule",
      description: "Purchase history & tracking"
    },
    
    { 
      path: "/account/setting", 
      icon: <Settings className="shrink-0" size={20} />, 
      label: "Account Settings",
      description: "Profile & preferences"
    },
    { 
      path: "/account/password", 
      icon: <Lock className="shrink-0" size={20} />, 
      label: "Change Password",
      description: "Update login credentials"
    },
    {
      path: "/account/payment-gateway",
      icon: <CreditCard className="shrink-0" size={20} />,
      label: "Payment Gateway",
      description: "Manage your payment methods"
    },
  ];

  return (
    <div className="w-72 bg-black rounded-xl shadow-sm p-6 h-fit sticky top-6 border border-ferrari/20">
      {/* User Profile Section */}
      <div className="flex items-center space-x-4 p-3 mb-6  rounded-lg">
        <div className="bg-ferrari text-white p-3 rounded-full flex items-center justify-center">
          <User size={20} />
        </div>
        <div>
          <h3 className="font-medium text-white">Boo Ali</h3>
          <p className="text-xs text-gray-400">Premium Member</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-start p-3 rounded-xl transition-all ${
              location.pathname === item.path
                ? 'bg-ferrari/10 border border-ferrari/20'
                : 'hover:bg-ferrari/5 border border-transparent'
            }`}
          >
            <span className={`mt-0.5 ${
              location.pathname === item.path ? 'text-ferrari' : 'text-gray-400'
            }`}>
              {item.icon}
            </span>
            <div className="ml-3">
              <span className={`block font-medium ${
                location.pathname === item.path ? 'text-ferrari' : 'text-gray-300'
              }`}>
                {item.label}
              </span>
              <span className="block text-xs text-gray-400 mt-0.5">
                {item.description}
              </span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Sign Out Button */}
      <div className="mt-8 pt-5 border-t border-ferrari/20">
        <button className="w-full flex items-center p-3 text-gray-300 hover:text-ferrari rounded-xl hover:bg-ferrari/10 transition-colors">
          <LogOut className="shrink-0 text-gray-400 group-hover:text-ferrari" size={20} />
          <span className="ml-3 font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default AccountSidebar;