import React, { useState, useEffect } from 'react';
import { HardDrive, MapPin, Plus, X, Search, Star, Bookmark } from 'lucide-react';

const SavedInstallers = () => {
  const [zipCode, setZipCode] = useState('');
  const [selectedServices, setSelectedServices] = useState({
    tires: true,
    wheels: false,
    springs: false,
    performanceSuspension: false,
    shocksStruts: false,
    brakes: false,
    roadForceBalance: false,
    enginePerformance: false
  });
  const [savedInstallers, setSavedInstallers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showMap, setShowMap] = useState(false);

  // Sample data - replace with your API calls
  useEffect(() => {
    if (zipCode.length >= 3) {
      // Simulate API call with timeout
      const timer = setTimeout(() => {
        setSearchResults([
          {
            id: 1,
            name: "Premium Auto Care",
            address: "123 Main St, Anytown, CA 90210",
            rating: 4.8,
            distance: "2.5 miles",
            services: ["Tires", "Brakes"],
            coordinates: { lat: 34.0522, lng: -118.2437 }
          },
          {
            id: 2,
            name: "Elite Wheel Specialists",
            address: "456 Oak Ave, Somewhere, CA 90210",
            rating: 4.5,
            distance: "5.1 miles",
            services: ["Wheels", "Performance Suspension"],
            coordinates: { lat: 34.0522, lng: -118.2537 }
          }
        ]);
        setShowMap(true);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);
      setShowMap(false);
    }
  }, [zipCode]);

  const handleServiceToggle = (service) => {
    setSelectedServices({
      ...selectedServices,
      [service]: !selectedServices[service]
    });
  };

  const handleSaveInstaller = (installer) => {
    if (!savedInstallers.some(item => item.id === installer.id)) {
      setSavedInstallers([...savedInstallers, installer]);
    }
  };

  const handleRemoveInstaller = (id) => {
    setSavedInstallers(savedInstallers.filter(installer => installer.id !== id));
  };

  return (
    <div className="flex-1 p-6 md:p-8 bg-white rounded-lg">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Saved Installers</h1>

        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                Enter ZIP / Postal Code
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="e.g. 90210"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1252E] focus:border-[#A1252E] transition-all"
                />
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button className="text-sm font-medium text-[#A1252E] hover:text-[#A1252E]/90 flex items-center justify-center md:justify-start transition-colors">
              Learn More About Pricing <span className="ml-1">→</span>
            </button>
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-800 mb-3">Select Services Needed</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: 'tires', label: 'Tires' },
                { id: 'wheels', label: 'Wheels' },
                { id: 'springs', label: 'Springs' },
                { id: 'performanceSuspension', label: 'Performance Suspension' },
                { id: 'shocksStruts', label: 'Shocks/Struts' },
                { id: 'brakes', label: 'Brakes' },
                { id: 'roadForceBalance', label: 'Road Force Balance' },
                { id: 'enginePerformance', label: 'Engine Performance' }
              ].map((service) => (
                <div key={service.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={service.id}
                    checked={selectedServices[service.id]}
                    onChange={() => handleServiceToggle(service.id)}
                    className="h-5 w-5 text-[#A1252E] focus:ring-2 focus:ring-[#A1252E] border-gray-300 rounded"
                  />
                  <label htmlFor={service.id} className="ml-2 text-sm text-gray-700">
                    {service.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {!zipCode && (
            <div className="mt-6 text-center py-6 bg-gray-50 rounded-lg">
              <Search className="mx-auto h-10 w-10 text-gray-400 mb-3" />
              <p className="text-sm text-gray-500">
                To view installer options please enter your ZIP / Postal Code.
              </p>
            </div>
          )}
        </div>

        {/* Map and Search Results Section */}
        {showMap && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-[#A1252E]" />
                Installers Near {zipCode}
              </h2>
              <div className="text-sm text-gray-500">
                {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Map Placeholder - Replace with your actual map component */}
              <div className="lg:col-span-2 h-96 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                  <div className="text-center p-6">
                    <MapPin className="mx-auto h-12 w-12 text-[#A1252E] mb-3" />
                    <h3 className="font-medium text-gray-700">Map View</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Showing installers near {zipCode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Search Results */}
              <div className="space-y-4">
                {searchResults.map((installer) => (
                  <div key={installer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{installer.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{installer.address}</p>
                        <div className="flex items-center mt-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 text-sm font-medium">{installer.rating}</span>
                          </div>
                          <span className="mx-2 text-gray-300">|</span>
                          <span className="text-sm text-gray-500">{installer.distance}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleSaveInstaller(installer)}
                        className="text-[#A1252E] hover:text-[#A1252E]/80 p-1.5 rounded-full hover:bg-[#A1252E]/10 transition-colors"
                        title="Save this installer"
                      >
                        <Bookmark className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {installer.services.map((service, index) => (
                        <span key={index} className="px-2.5 py-1 bg-[#A1252E]/10 text-[#A1252E] text-xs rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Saved Installers List */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <HardDrive className="mr-2 h-5 w-5 text-[#A1252E]" />
            Your Saved Installers
          </h2>

          {savedInstallers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedInstallers.map((installer) => (
                <div key={installer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{installer.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{installer.address}</p>
                      <div className="flex items-center mt-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{installer.rating}</span>
                        </div>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="text-sm text-gray-500">{installer.distance}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveInstaller(installer.id)}
                      className="text-gray-400 hover:text-red-500 p-1.5 rounded-full hover:bg-red-500/10 transition-colors"
                      title="Remove from saved"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {installer.services.map((service, index) => (
                      <span key={index} className="px-2.5 py-1 bg-[#A1252E]/10 text-[#A1252E] text-xs rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <HardDrive className="mx-auto h-14 w-14 text-gray-400 mb-3" />
              <h3 className="text-sm font-medium text-gray-900">No saved installers</h3>
              <p className="text-sm text-gray-500 mt-1">
                {zipCode ? 'Save installers from the search results above' : 'Enter a ZIP code to find installers'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedInstallers;