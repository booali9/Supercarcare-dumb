import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MakeList from './helpers/MakeList';

const VehicleInformation = () => {
  const navigate = useNavigate();
  const [showLicensePlate, setShowLicensePlate] = useState(false);
  const [data, setData] = useState({
    year: '',
    make: '',
    model: '',
    trim: '',
    licensePlateNumber: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "year") {
      const numericValue = parseInt(value, 10);
      if (numericValue > 0 || value === "") {
        setData((prev) => ({
          ...prev,
          [name]: value,
        }));
      } else {
        setData((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const validateFields = () => {
    if (showLicensePlate) {
      return data.licensePlateNumber.trim() !== '';
    } else {
      return data.year.trim() !== '' && data.make.trim() !== '' && data.model.trim() !== '';
    }
  };

  const handleContinue = () => {
    if (validateFields()) {
      navigate('/tire-info');
    } else {
      alert('Please fill all required fields.');
    }
  };

  const handleBack = () => {
    navigate('/location');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-gradient-to-b from-[#0a0606] to-black text-white font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-black border border-ferrari p-8 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-2 text-center text-ferrari">
          Vehicle Information
        </h2>

        <p className="text-center text-sm text-gray-300 mb-6">
          Please provide your vehicle details so we can find the right tires for you.
        </p>

        {/* Tab Buttons */}
        <div className="flex bg-black rounded-lg p-1 mb-6 border border-ferrari">
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              !showLicensePlate 
                ? 'bg-ferrari text-white' 
                : 'text-white hover:bg-ferrari/10'
            }`}
            onClick={(e) => {
              e.preventDefault();
              setShowLicensePlate(false);
            }}
          >
            Enter Vehicle Details
          </button>

          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              showLicensePlate 
                ? 'bg-ferrari text-white' 
                : 'text-white hover:bg-ferrari/10'
            }`}
            onClick={(e) => {
              e.preventDefault();
              setShowLicensePlate(true);
            }}
          >
            Use License Plate
          </button>
        </div>

        {showLicensePlate ? (
          // License Plate Input Only
          <div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-white">
                License Plate Number *
              </label>
              <input
                type="text"
                placeholder="ARC 1734"
                name="licensePlateNumber"
                onChange={handleOnChange}
                value={data.licensePlateNumber}
                className="mt-1 p-2 w-full rounded bg-black border border-ferrari text-white placeholder-gray-400 focus:border-ferrari focus:outline-none"
              />
            </div>
            <p className="text-sm text-gray-300 mb-6">
              We'll use your license plate to automatically identify your vehicle and recommend
              the right tires.
            </p>
          </div>
        ) : (
          // Vehicle Details Inputs
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-white">Year *</label>
                <input
                  type="number"
                  placeholder="2023"
                  name="year"
                  onChange={handleOnChange}
                  value={data.year}
                  className="mt-1 p-2 w-full rounded bg-black border border-ferrari text-white placeholder-gray-400 focus:border-ferrari focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Make *</label>
                <select
                  required
                  value={data.make}
                  name="make"
                  onChange={handleOnChange}
                  className="p-2 mt-1 w-full rounded bg-black border border-ferrari text-white focus:border-ferrari focus:outline-none"
                >
                  <option value="">Select Make</option>
                  {MakeList.map((el, index) => (
                    <option value={el.value} key={el.value + index} className="text-black">
                      {el.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Model *</label>
                <input
                  type="text"
                  placeholder="Camry"
                  name="model"
                  onChange={handleOnChange}
                  value={data.model}
                  className="mt-1 p-2 w-full rounded bg-black border border-ferrari text-white placeholder-gray-400 focus:border-ferrari focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Trim (Optional)
              </label>
              <input
                type="text"
                placeholder="SE"
                name="trim"
                onChange={handleOnChange}
                value={data.trim}
                className="mt-1 p-2 w-full rounded bg-black border border-ferrari text-white placeholder-gray-400 focus:border-ferrari focus:outline-none"
              />
            </div>
          </div>
        )}

        <div className="flex justify-center mb-6">
          <button
            type="button"
            onClick={handleContinue}
            className="bg-ferrari text-white px-4 py-2 rounded w-56 hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] hover:bg-ferrari/80 transition-colors duration-200 font-semibold"
          >
            Continue to Tire Selection
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">* Required Fields</p>
      </form>
    </div>
  );
};

export default VehicleInformation;