import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, ChevronDown, Check, MapPin } from 'lucide-react';
import MakeList from './helpers/MakeList';

const VehicleInfoPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('vehicle');
  const [data, setData] = useState({
    make: '',
    year: '',
    model: '',
    zipCode: '',
    shoppingCategory: 'Tires',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateFields = () => {
    if (activeTab === 'vehicle') {
      return data.make.trim() !== '' && data.year.trim() !== '' && data.model.trim() !== '' && data.zipCode.trim() !== '';
    } else {
      return data.zipCode.trim() !== '';
    }
  };

  const handleViewResults = () => {
          if (validateFields()) {
        // Navigate to service selection page
        navigate('/services-page');
      } else {
        alert('Please fill all required fields.');
      }
  };

  const handleClose = () => {
    navigate('/');
  };

  // Generate years array (current year to 25 years back)
  const years = Array.from({ length: 25 }, (_, i) => 2024 - i);

  return (
    <div className="bg-black bg-gradient-to-b from-[#0a0606] to-black min-h-screen py-10 px-4" style={{ paddingTop: '140px' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black border border-[#DC143C]/30 rounded-lg shadow-2xl relative backdrop-blur-sm"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 rounded-lg opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(220, 20, 60, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(220, 20, 60, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }} />
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-[#DC143C] transition-colors z-30"
          >
            <X className="text-xl" />
          </button>

          {/* Header */}
          <div className="p-6 border-b border-[#DC143C]/20 relative z-20 bg-black">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl font-bold text-white">
                Vehicle Information
              </h2>
            </div>
            <p className="text-center text-sm text-gray-400">
              Tell us about your vehicle to get personalized service recommendations
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-[#DC143C]/20 relative z-20 bg-black">
            <button
              className={`flex-1 py-4 text-center font-medium transition-all duration-300 flex items-center justify-center ${
                activeTab === 'vehicle'
                  ? 'text-[#DC143C] border-b-2 border-[#DC143C] bg-[#DC143C]/5'
                  : 'text-gray-400 hover:text-gray-300 hover:bg-white/5'
              }`}
              onClick={() => setActiveTab('vehicle')}
            >
              Shop by Vehicle
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium transition-all duration-300 flex items-center justify-center ${
                activeTab === 'size'
                  ? 'text-[#DC143C] border-b-2 border-[#DC143C] bg-[#DC143C]/5'
                  : 'text-gray-400 hover:text-gray-300 hover:bg-white/5'
              }`}
              onClick={() => setActiveTab('size')}
            >
              Shop Tires by Size
            </button>
          </div>

          <div className="p-6 space-y-6 relative z-20 bg-black">
            {activeTab === 'vehicle' ? (
              // Shop by Vehicle Tab - Matching the second image exactly
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Vehicle Information Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Vehicle Make
                    </label>
                    <div className="relative">
                      <select
                        name="make"
                        value={data.make}
                        onChange={handleOnChange}
                        className="w-full p-3 bg-black border border-[#DC143C]/30 rounded-lg focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C] text-white appearance-none pr-10"
                      >
                        <option value="">Choose</option>
                        {MakeList.map(make => (
                          <option key={make.id} value={make.value}>{make.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Vehicle Year
                    </label>
                    <div className="relative">
                      <select
                        name="year"
                        value={data.year}
                        onChange={handleOnChange}
                        className="w-full p-3 bg-black border border-[#DC143C]/30 rounded-lg focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C] text-white appearance-none pr-10"
                      >
                        <option value="">Choose</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Vehicle Model
                    </label>
                    <div className="relative">
                      <select
                        name="model"
                        value={data.model}
                        onChange={handleOnChange}
                        className="w-full p-3 bg-black border border-[#DC143C]/30 rounded-lg focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C] text-white appearance-none pr-10"
                      >
                        <option value="">Choose</option>
                        <option value="camry">Camry</option>
                        <option value="accord">Accord</option>
                        <option value="civic">Civic</option>
                        <option value="corolla">Corolla</option>
                        <option value="altima">Altima</option>
                        <option value="sentra">Sentra</option>
                        <option value="fusion">Fusion</option>
                        <option value="focus">Focus</option>
                        <option value="malibu">Malibu</option>
                        <option value="cruze">Cruze</option>
                        <option value="3-series">3 Series</option>
                        <option value="5-series">5 Series</option>
                        <option value="c-class">C-Class</option>
                        <option value="e-class">E-Class</option>
                        <option value="a4">A4</option>
                        <option value="a6">A6</option>
                        <option value="model-3">Model 3</option>
                        <option value="model-s">Model S</option>
                        <option value="sonata">Sonata</option>
                        <option value="elantra">Elantra</option>
                        <option value="forte">Forte</option>
                        <option value="soul">Soul</option>
                        <option value="golf">Golf</option>
                        <option value="jetta">Jetta</option>
                        <option value="911">911</option>
                        <option value="cayenne">Cayenne</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Logical Operator Separator */}
                <div className="flex items-center justify-center">
                  <div className="w-full border-t border-[#DC143C]/20 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black border border-[#DC143C]/30 rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-[#DC143C] font-bold text-sm">&</span>
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Enter ZIP or Postal Code to See Shipping & Installer Options:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="zipCode"
                      value={data.zipCode}
                      onChange={handleOnChange}
                      placeholder="Enter ZIP code"
                      className="w-full p-3 bg-black border border-[#DC143C]/30 rounded-lg focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C] text-white placeholder-gray-500 pr-12"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-600 rounded-full w-6 h-6 flex items-center justify-center">
                      <Check className="text-white w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Shopping Category Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select What You're Shopping For:
                  </label>
                  <div className="relative">
                    <select
                      name="shoppingCategory"
                      value={data.shoppingCategory}
                      onChange={handleOnChange}
                      className="w-full p-3 bg-black border border-[#DC143C]/30 rounded-lg focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C] text-white appearance-none pr-10"
                    >
                      <option value="Tires">Tires</option>
                      <option value="Oil Change">Oil Change</option>
                      <option value="Brake Services">Brake Services</option>
                      <option value="Battery Services">Battery Services</option>
                      <option value="Detailing Services">Detailing Services</option>
                      <option value="Diagnostic Services">Diagnostic Services</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ) : (
              // Shop Tires by Size Tab
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tire Width
                    </label>
                    <div className="relative">
                      <select
                        name="tireWidth"
                        value={data.tireWidth}
                        onChange={handleOnChange}
                        className="w-full p-3 bg-black border border-[#DC143C]/30 rounded-lg focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C] text-white appearance-none pr-10"
                      >
                        <option value="">Choose</option>
                        {Array.from({ length: 20 }, (_, i) => 165 + (i * 5)).map(width => (
                          <option key={width} value={width}>{width}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Aspect Ratio
                    </label>
                    <div className="relative">
                      <select
                        name="tireAspectRatio"
                        value={data.tireAspectRatio}
                        onChange={handleOnChange}
                        className="w-full p-3 bg-black border border-[#DC143C]/30 rounded-lg focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C] text-white appearance-none pr-10"
                      >
                        <option value="">Choose</option>
                        {[30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85].map(ratio => (
                          <option key={ratio} value={ratio}>{ratio}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Rim Diameter
                    </label>
                    <div className="relative">
                      <select
                        name="tireDiameter"
                        value={data.tireDiameter}
                        onChange={handleOnChange}
                        className="w-full p-3 bg-black border border-[#DC143C]/30 rounded-lg focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C] text-white appearance-none pr-10"
                      >
                        <option value="">Choose</option>
                        {[13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map(diameter => (
                          <option key={diameter} value={diameter}>{diameter}"</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Logical Operator Separator */}
                <div className="flex items-center justify-center">
                  <div className="w-full border-t border-[#DC143C]/20 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black border border-[#DC143C]/30 rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-[#DC143C] font-bold text-sm">&</span>
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Enter ZIP or Postal Code to See Shipping & Installer Options:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="zipCode"
                      value={data.zipCode}
                      onChange={handleOnChange}
                      placeholder="Enter ZIP code"
                      className="w-full p-3 bg-black border border-[#DC143C]/30 rounded-lg focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C] text-white placeholder-gray-500 pr-12"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-600 rounded-full w-6 h-6 flex items-center justify-center">
                      <Check className="text-white w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Shopping Category Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select What You're Shopping For:
                  </label>
                  <div className="relative">
                    <select
                      name="shoppingCategory"
                      value={data.shoppingCategory}
                      onChange={handleOnChange}
                      className="w-full p-3 bg-black border border-[#DC143C]/30 rounded-lg focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C] text-white appearance-none pr-10"
                    >
                      <option value="Tires">Tires</option>
                      <option value="Oil Change">Oil Change</option>
                      <option value="Brake Services">Brake Services</option>
                      <option value="Battery Services">Battery Services</option>
                      <option value="Detailing Services">Detailing Services</option>
                      <option value="Diagnostic Services">Diagnostic Services</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* View Results Button */}
            <div className="flex justify-center pt-6">
              <button
                onClick={handleViewResults}
                className="bg-[#DC143C] hover:bg-[#DC143C]/80 text-white font-bold px-12 py-4 rounded-lg transition-colors duration-300 w-full max-w-md text-lg"
              >
                View Results
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VehicleInfoPage; 