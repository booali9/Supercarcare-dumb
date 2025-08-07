import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

const ReviewAppointment = () => {
  const navigate = useNavigate();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [name, setName] = useState("");

  const handleBack = () => {
    navigate("/scheduler")
  };

  const handleConfirmAppointment = () => {
    setIsConfirming(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsConfirming(false);
      setIsConfirmed(true);
      
      // Redirect to home after 3 seconds
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 2000);
  };

  // Confirmation Success Animation
  if (isConfirmed) {
    return (
      <div className="bg-black bg-gradient-to-b from-[#0a0606] to-black min-h-screen flex justify-center items-center py-10 px-4" style={{ paddingTop: '140px' }}>
        <motion.div 
          className="max-w-md w-full border border-ferrari/30 rounded-lg p-8 bg-black shadow-md text-white text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Success Check Animation */}
          <motion.div 
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-ferrari flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <polyline points="20,6 9,17 4,12"></polyline>
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-2xl font-bold text-ferrari mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Appointment Confirmed!
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Your appointment has been successfully scheduled. You will receive a confirmation email shortly.
          </motion.p>
          
          <motion.div 
            className="bg-ferrari/10 border border-ferrari/30 rounded-lg p-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-ferrari font-medium">
              Appointment ID: #AP-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </motion.div>
          
          <motion.p 
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Redirecting to home page...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-black bg-gradient-to-b from-[#0a0606] to-black min-h-screen flex flex-col items-center py-10 px-4">
      {/* Name input and OR Signup link above the form */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-2 max-w-3xl mx-auto mb-6">
        <input type="text" className="w-full border border-ferrari rounded-lg px-4 py-3 text-base placeholder:text-base focus:outline-none focus:ring-2 focus:ring-ferrari text-white placeholder-gray-400 bg-black text-center" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
        <span className="text-gray-400 text-sm mx-2">or</span>
        <button type="button" className="text-ferrari font-semibold underline hover:text-ferrari/80 text-sm" onClick={() => setShowSignup(true)}>Signup</button>
      </div>
      <SignupModal open={showSignup} onClose={() => setShowSignup(false)} />
      <div className="max-w-3xl w-full border border-ferrari rounded-lg p-6 bg-black shadow-md text-white">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-ferrari">Review Your Appointment</h2>
            <p className="text-gray-300 mt-1">
              Please review your appointment details before confirming
            </p>
          </div>
          <button onClick={handleBack} className="border border-ferrari font-medium text-sm rounded-md py-2 px-4 hover:bg-ferrari/10 transition-colors text-white">
            Back
          </button>
        </div>

        {/* Vehicle Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-ferrari mb-3">Vehicle Information</h3>
          <div className="border border-ferrari bg-black p-4 rounded-md">
            <div className="grid grid-cols-2 gap-2">
              <p><span className="font-medium">Year:</span> 2022</p>
              <p><span className="font-medium">Make:</span> Toyota</p>
              <p><span className="font-medium">Model:</span> Camry</p>
              <p><span className="font-medium">Trim:</span> LE</p>
              <p><span className="font-medium">Tire Size:</span> 225/65R17</p>
            </div>
          </div>
        </div>

        {/* Selected Tires */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-ferrari mb-3">Selected Tires</h3>
          <div className="border border-ferrari bg-black p-4 rounded-md">
            <div className="grid grid-cols-2 gap-2">
              <p><span className="font-medium">Brand:</span> OEM</p>
              <p><span className="font-medium">Model:</span> Original Equipment</p>
              <p><span className="font-medium">Size:</span> 225/65R17</p>
              <p><span className="font-medium">Price (each):</span> $180.99</p>
              <p><span className="font-medium">Price (set of 4):</span> $723.96</p>
            </div>
          </div>
        </div>

        {/* Selected Services */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-ferrari mb-3">Selected Services</h3>
          <div className="border border-ferrari bg-black p-4 rounded-md">
            <div className="space-y-3">
              <div className="flex justify-between">
                <p><span className="font-medium">Tire Installation</span></p>
                <p className="text-ferrari">$20.00</p>
              </div>
              <div className="flex justify-between">
                <p><span className="font-medium">Valve Stem Replacement</span></p>
                <p className="text-ferrari">$5.00</p>
              </div>
              <hr className="my-2 border-ferrari/30" />
              <div className="flex justify-between font-semibold">
                <p>Services Total:</p>
                <p className="text-ferrari">$25.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Store & Appointment Time */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-ferrari mb-3">Store & Appointment Time</h3>
          <div className="border border-ferrari bg-black p-4 rounded-md">
            <div className="space-y-2">
              <p><span className="font-medium">Store:</span> Downtown TireShop</p>
              <p><span className="font-medium">Address:</span> 123 Main St, New York, NY 10001</p>
              <p><span className="font-medium">Date:</span> March 21, 2025</p>
              <p><span className="font-medium">Time:</span> 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Your Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-ferrari mb-3">Your Information</h3>
          <div className="border border-ferrari bg-black p-4 rounded-md">
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> John Doe</p>
              <p><span className="font-medium">Email:</span> john.doe@example.com</p>
              <p><span className="font-medium">Phone:</span> (555) 123-4567</p>
              <p><span className="font-medium">Address:</span> 123 Main St, New York, NY 10001, USA</p>
            </div>
          </div>
        </div>

        {/* Total Price */}
        <div className="border border-ferrari bg-black p-4 rounded-md mb-6">
          <div className="flex justify-between items-center mb-1">
            <p className="font-bold text-lg">Total Price:</p>
            <p className="font-bold text-lg text-ferrari">$748.96</p>
          </div>
          <p className="text-gray-400 text-sm">All prices include labor, taxes, and fees</p>
        </div>

        {/* Confirm Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            You'll receive a confirmation email once your appointment is confirmed
          </p>
          <button 
            onClick={handleConfirmAppointment} 
            className="bg-ferrari hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] hover:bg-ferrari/80 text-white font-medium px-6 py-3 rounded-lg w-full sm:w-auto transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isConfirming}
          >
            {isConfirming ? (
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <span>Confirming...</span>
              </div>
            ) : (
              "Confirm Appointment"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewAppointment;