import React, { useState } from 'react';
import { Settings, Mail, Bell, Car, Heart, Tag, Check } from 'lucide-react';

const AccountSettings = () => {
  const [email, setEmail] = useState('user@example.com');
  const [settings, setSettings] = useState({
    vehicleUpdates: true,
    savedItemNotifications: true,
    specialOffers: true,
    priceDropAlerts: false,
    newArrivals: true,
    orderUpdates: true,
    newsletter: false,
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Settings saved:', { email, settings });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="flex-1 p-6 md:p-8 bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Settings className="h-8 w-8 text-ferrari mr-3" />
          <h1 className="text-2xl font-bold text-white">Account Settings</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#0a0606] rounded-xl shadow-sm p-6 md:p-8 border border-ferrari/20">
          {/* Email Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 text-ferrari mr-2" />
              <h2 className="text-lg font-semibold text-white">Email Preferences</h2>
            </div>
            <div className="space-y-3">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari bg-gray-900 text-white transition-all"
                  required
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div>
            <div className="flex items-center mb-4">
              <Bell className="h-5 w-5 text-ferrari mr-2" />
              <h2 className="text-lg font-semibold text-white">Notification Preferences</h2>
            </div>

            <div className="space-y-5">
              {/* Vehicle Updates */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="vehicleUpdates"
                    name="vehicleUpdates"
                    type="checkbox"
                    checked={settings.vehicleUpdates}
                    onChange={handleChange}
                    className="h-4 w-4 text-ferrari focus:ring-ferrari border-gray-600 rounded bg-gray-800"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <label htmlFor="vehicleUpdates" className="flex items-center">
                    <Car className="h-4 w-4 text-ferrari mr-2" />
                    <span className="block text-sm font-medium text-white">Saved Vehicle Updates</span>
                  </label>
                  <p className="text-sm text-gray-400 mt-1">
                    Get notified about maintenance reminders and updates for your saved vehicles
                  </p>
                </div>
              </div>

              {/* Saved Items */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="savedItemNotifications"
                    name="savedItemNotifications"
                    type="checkbox"
                    checked={settings.savedItemNotifications}
                    onChange={handleChange}
                    className="h-4 w-4 text-ferrari focus:ring-ferrari border-gray-600 rounded bg-gray-800"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <label htmlFor="savedItemNotifications" className="flex items-center">
                    <Heart className="h-4 w-4 text-ferrari mr-2" />
                    <span className="block text-sm font-medium text-white">Saved Item Notifications</span>
                  </label>
                  <p className="text-sm text-gray-400 mt-1">
                    Receive alerts when your saved items are back in stock or have price changes
                  </p>
                </div>
              </div>

              {/* Special Offers */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="specialOffers"
                    name="specialOffers"
                    type="checkbox"
                    checked={settings.specialOffers}
                    onChange={handleChange}
                    className="h-4 w-4 text-ferrari focus:ring-ferrari border-gray-600 rounded bg-gray-800"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <label htmlFor="specialOffers" className="flex items-center">
                    <Tag className="h-4 w-4 text-ferrari mr-2" />
                    <span className="block text-sm font-medium text-white">Special Offers & Promotions</span>
                  </label>
                  <p className="text-sm text-gray-400 mt-1">
                    Be the first to know about exclusive deals and limited-time offers
                  </p>
                </div>
              </div>

              {/* Price Drop Alerts */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="priceDropAlerts"
                    name="priceDropAlerts"
                    type="checkbox"
                    checked={settings.priceDropAlerts}
                    onChange={handleChange}
                    className="h-4 w-4 text-ferrari focus:ring-ferrari border-gray-600 rounded bg-gray-800"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <label htmlFor="priceDropAlerts" className="block text-sm font-medium text-white">
                    Price Drop Alerts
                  </label>
                  <p className="text-sm text-gray-400 mt-1">
                    Get notified when items in your wishlist drop in price
                  </p>
                </div>
              </div>

              {/* New Arrivals */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newArrivals"
                    name="newArrivals"
                    type="checkbox"
                    checked={settings.newArrivals}
                    onChange={handleChange}
                    className="h-4 w-4 text-ferrari focus:ring-ferrari border-gray-600 rounded bg-gray-800"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <label htmlFor="newArrivals" className="block text-sm font-medium text-white">
                    New Product Arrivals
                  </label>
                  <p className="text-sm text-gray-400 mt-1">
                    Receive updates about new products matching your interests
                  </p>
                </div>
              </div>

              {/* Order Updates */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="orderUpdates"
                    name="orderUpdates"
                    type="checkbox"
                    checked={settings.orderUpdates}
                    onChange={handleChange}
                    className="h-4 w-4 text-ferrari focus:ring-ferrari border-gray-600 rounded bg-gray-800"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <label htmlFor="orderUpdates" className="block text-sm font-medium text-white">
                    Order Status Updates
                  </label>
                  <p className="text-sm text-gray-400 mt-1">
                    Get shipping and delivery notifications for your orders
                  </p>
                </div>
              </div>

              {/* Newsletter */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={settings.newsletter}
                    onChange={handleChange}
                    className="h-4 w-4 text-ferrari focus:ring-ferrari border-gray-600 rounded bg-gray-800"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <label htmlFor="newsletter" className="block text-sm font-medium text-white">
                    Monthly Newsletter
                  </label>
                  <p className="text-sm text-gray-400 mt-1">
                    Receive our curated monthly newsletter with tips and trends
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-10 pt-6 border-t border-gray-800 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-ferrari text-white rounded-lg hover:bg-ferrari/90 transition-colors flex items-center"
            >
              {isSaved ? (
                <>
                  <Check className="h-5 w-5 mr-2" />
                  Settings Saved!
                </>
              ) : (
                'Save Settings'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;