import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Check } from 'lucide-react';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    name: 'Boo Ali',
    email: 'boo.ali@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    // Add password change logic here
  };

  return (
    <div className="bg-black text-white px-4 md:px-8">
      <div className="bg-[#0a0606] rounded-2xl shadow-sm p-8 max-w-2xl w-full border border-ferrari/20 mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-ferrari/10 p-3 rounded-full">
            <Lock className="text-ferrari" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Change Password</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                value={formData.name}
                readOnly
                className="w-full px-4 py-3 bg-gray-900 border border-ferrari/30 rounded-lg focus:outline-none text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                readOnly
                className="w-full px-4 py-3 bg-gray-900 border border-ferrari/30 rounded-lg focus:outline-none text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Current Password</label>
            <div className="relative">
              <input
                type={showPassword.current ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari pr-10 bg-gray-900 text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => ({ ...prev, current: !prev.current }))}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-ferrari transition"
              >
                {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">New Password</label>
              <div className="relative">
                <input
                  type={showPassword.new ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari pr-10 bg-gray-900 text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => ({ ...prev, new: !prev.new }))}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-ferrari transition"
                >
                  {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword.confirm ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari pr-10 bg-gray-900 text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => ({ ...prev, confirm: !prev.confirm }))}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-ferrari transition"
                >
                  {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all ${
                isSaved 
                  ? 'bg-green-500 text-white'
                  : 'bg-ferrari text-white hover:bg-ferrari/90'
              }`}
            >
              {isSaved ? (
                <>
                  <Check size={18} />
                  Password Updated
                </>
              ) : 'Change Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;