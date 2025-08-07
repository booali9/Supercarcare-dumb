// src/pages/AccountVehicles.jsx
import React, { useState } from 'react';
import { Car, Plus, Trash2, Clock } from 'lucide-react';

const AccountVehicles = () => {
  const [selectedMake, setSelectedMake] = useState('');
  const [savedVehicles, setSavedVehicles] = useState([]);

  // Sample vehicle makes - replace with your actual data
  const vehicleMakes = [
    'Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 
    'Mercedes', 'Audi', 'Tesla', 'Nissan', 'Hyundai'
  ];

  const handleSaveVehicle = () => {
    if (selectedMake) {
      setSavedVehicles([...savedVehicles, {
        id: Date.now(),
        make: selectedMake,
        model: 'Model X', // You would expand this with more fields
        year: '2022',
        lastViewed: '2 days ago'
      }]);
      setSelectedMake('');
    }
  };

  const handleDeleteVehicle = (id) => {
    setSavedVehicles(savedVehicles.filter(vehicle => vehicle.id !== id));
  };

  return (
    <div className="flex-1 p-6 md:p-8 bg-black rounded-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">My Vehicles</h1>
        
        {/* Add New Vehicle Section */}
        <div className="bg-black p-6 rounded-lg shadow-sm mb-8 border border-ferrari/20">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Plus className="mr-2 h-5 w-5 text-ferrari" />
            Add New Vehicle
          </h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="make" className="block text-sm font-medium text-gray-300 mb-1">
                Select Make
              </label>
              <select
                id="make"
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full px-3 py-2 border border-ferrari/30 rounded-md shadow-sm focus:outline-none focus:ring-ferrari focus:border-ferrari bg-black text-white"
              >
                <option value="" className="text-gray-700 bg-white">Select a make</option>
                {vehicleMakes.map((make) => (
                  <option key={make} value={make} className="text-black bg-white">
                    {make}
                  </option>
                ))}
              </select>
            </div>
            
            <button 
              onClick={handleSaveVehicle}
              className="w-full px-4 py-2 bg-ferrari text-white rounded-md hover:bg-ferrari/90 transition-colors"
            >
              Save Vehicle
            </button>
          </div>
        </div>
        
        {/* Saved Vehicles Section */}
        <div className="bg-black p-6 rounded-lg shadow-sm border border-ferrari/20">
          <h2 className="text-lg font-semibold text-white mb-4">Saved Vehicles</h2>
          
          {savedVehicles.length > 0 ? (
            <div className="space-y-4">
              {savedVehicles.map((vehicle) => (
                <div key={vehicle.id} className="flex items-center justify-between p-4 border border-ferrari/30 rounded-lg hover:bg-ferrari/5">
                  <div className="flex items-center space-x-4">
                    <div className="bg-ferrari/10 p-3 rounded-full">
                      <Car className="h-5 w-5 text-ferrari" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{vehicle.make} {vehicle.model}</h3>
                      <p className="text-sm text-gray-400">{vehicle.year} • Last viewed {vehicle.lastViewed}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDeleteVehicle(vehicle.id)}
                    className="text-gray-400 hover:text-ferrari transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-black border border-ferrari/20 rounded-lg">
              <Car className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-white">No saved vehicles</h3>
              <p className="mt-1 text-sm text-gray-500">
                You currently have no saved vehicles, but you can begin by selecting a vehicle above.
              </p>
            </div>
          )}
          
          {/* Recently Viewed Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Clock className="mr-2 h-5 w-5 text-gray-400" />
              Recently Viewed Vehicles
            </h2>
            <p className="text-sm text-gray-500">
              Your recently viewed vehicles will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountVehicles;