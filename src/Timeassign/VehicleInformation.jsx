import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MakeList from './helpers/MakeList';

const SignupModal = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setSubmitted(true);
  };
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-black rounded-2xl shadow-2xl p-8 w-full max-w-md relative border border-ferrari animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-ferrari">Sign Up</h2>
        {submitted ? (
          <div className="text-center text-ferrari font-semibold text-lg">Thank you for signing up!</div>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
            <input type="email" className="w-full border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ferrari text-white placeholder-gray-400 bg-gray-900 text-base" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" className="w-full border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ferrari text-white placeholder-gray-400 bg-gray-900 text-base" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <input type="password" className="w-full border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ferrari text-white placeholder-gray-400 bg-gray-900 text-base" placeholder="Confirm Password" value={confirm} onChange={e => setConfirm(e.target.value)} required />
            {error && <div className="text-ferrari text-sm">{error}</div>}
            <button type="submit" className="w-full bg-ferrari hover:bg-ferrari/90 text-white py-3 rounded-lg font-bold text-lg mt-2 transition-all duration-150 shadow focus:outline-none focus:ring-2 focus:ring-ferrari focus:ring-offset-2">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

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
  const [showSignup, setShowSignup] = useState(false);
  const [name, setName] = useState("");

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
    if (validateFields()) {
      navigate('/services');
    } else {
      alert('Please fill all required fields.');
    }
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
      {/* Name input and OR Signup link above the form */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-center  gap-2 max-w-3xl mx-auto mb-2">
        <input type="text" className="w-full border border-ferrari rounded-lg px-4 py-3 text-base placeholder:text-base focus:outline-none focus:ring-2 focus:ring-ferrari text-white placeholder-gray-400 bg-black text-center" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
        <span className="text-gray-400 text-sm mx-2">or</span>
        <button type="button" className="text-ferrari font-semibold underline hover:text-ferrari/80 text-sm" onClick={() => setShowSignup(true)}>Signup</button>
      </div>
      <SignupModal open={showSignup} onClose={() => setShowSignup(false)} />
      <form
        onSubmit={handleSubmit}
        className="bg-black border border-ferrari p-8 rounded-lg shadow-lg w-full max-w-2xl flex flex-col gap-6 sm:gap-8"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-white">Vehicle Make *</label>
              <select
                required
                value={data.make}
                name="make"
                onChange={handleOnChange}
                className="p-2 mt-1 w-full rounded bg-black border border-ferrari text-white focus:border-ferrari focus:outline-none"
                style={{ color: 'white', backgroundColor: 'black' }}
              >
                <option value="" style={{ color: 'white', backgroundColor: 'black' }}>Select Make</option>
                {MakeList.map((el, index) => (
                  <option value={el.value} key={el.value + index} style={{ color: 'white', backgroundColor: 'black' }}>
                    {el.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Vehicle Year *</label>
              <input
                type="number"
                placeholder="2023"
                name="year"
                onChange={handleOnChange}
                value={data.year}
                className="mt-1 p-2 w-full rounded bg-black border border-ferrari text-white placeholder-gray-400 focus:border-ferrari focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white">Vehicle Model *</label>
              <input
                type="text"
                placeholder="Camry"
                name="model"
                onChange={handleOnChange}
                value={data.model}
                className="mt-1 p-2 w-full rounded bg-black border border-ferrari text-white placeholder-gray-400 focus:border-ferrari focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white">ZIP or Postal Code *</label>
              <input
                type="text"
                placeholder="ZIP or Postal Code"
                name="zip"
                onChange={handleOnChange}
                value={data.zip || ''}
                className="mt-1 p-2 w-full rounded bg-black border border-ferrari text-white placeholder-gray-400 focus:border-ferrari focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white">Select What You're Shopping For *</label>
              <select
                required
                value={data.shoppingFor || ''}
                name="shoppingFor"
                onChange={handleOnChange}
                className="p-2 mt-1 w-full rounded bg-black border border-ferrari text-white focus:border-ferrari focus:outline-none"
              >
                <option value="">Select</option>
                <option value="tires">Tires</option>
                <option value="wheels">Wheels</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        <div className="flex justify-center mb-6 sticky bottom-0 bg-black z-10 p-4 sm:static sm:p-0">
          <button
            type="submit"
            className="bg-ferrari text-white px-4 py-3 rounded w-full max-w-xs font-semibold text-lg shadow-lg hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] hover:bg-ferrari/80 transition-colors duration-200"
          >
            Continue to Tire Selection
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">* Required Fields</p>
      </form>
    </div>
  );
};

export default VehicleInformation;