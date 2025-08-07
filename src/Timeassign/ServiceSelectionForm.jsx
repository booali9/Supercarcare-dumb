import React, { useState } from "react";

const mockServices = [
  { id: 1, name: "Tire Installation", description: "Professional installation of new tires.", price: 20.0 },
  { id: 2, name: "Wheel Alignment", description: "Precision wheel alignment for optimal performance.", price: 89.99 },
  { id: 3, name: "TPMS Service", description: "Tire Pressure Monitoring System check and reset.", price: 25.0 },
  { id: 4, name: "Valve Stem Replacement", description: "Replace damaged or worn valve stems.", price: 5.0 },
  { id: 5, name: "Road Hazard Warranty", description: "Protection against road hazards like punctures.", price: 15.0 },
];

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

const ServiceSelectionForm = ({ onNext, onBack }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [error, setError] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [name, setName] = useState("");

  const handleServiceChange = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
    setError("");
  };

  const handleContinue = () => {
    if (selectedServices.length === 0) {
      setError("Please select at least one service to continue.");
      return;
    }
    if (onNext) onNext();
  };

  return (
    <div className="bg-black bg-gradient-to-b from-[#0a0606] to-black min-h-screen py-10 px-4">
      {/* Name input and OR Signup link above the form */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-2 max-w-3xl mx-auto mb-6">
        <input
          type="text"
          className="w-full sm:w-1/2 border border-ferrari rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ferrari text-white placeholder-gray-400 bg-black text-base text-center"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <span className="text-gray-400 text-sm mx-2">or</span>
        <button
          type="button"
          className="text-ferrari font-semibold underline hover:text-ferrari/80 text-sm"
          onClick={() => setShowSignup(true)}
        >
          Signup
        </button>
      </div>
      <SignupModal open={showSignup} onClose={() => setShowSignup(false)} />
      <div className="border border-ferrari mb-10 mt-5 p-6 rounded-lg shadow-md max-w-3xl mx-auto bg-black text-white">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-ferrari">Select Services</h2>
            <p className="text-gray-300">Choose the services you need for your appointment</p>
          </div>
          {onBack && (
            <button
              onClick={onBack}
              className="border border-ferrari font-medium text-sm rounded-md py-2 px-4 hover:bg-ferrari/10 transition-colors text-white"
            >
              Back
            </button>
          )}
        </div>
        {error && <p className="text-ferrari text-sm mb-4">{error}</p>}
        <div className="space-y-4 mb-6">
          {mockServices.map((service) => (
            <div
              key={service.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedServices.includes(service.id)
                  ? "border-ferrari bg-ferrari/10"
                  : "border-ferrari/30 hover:border-ferrari/60 bg-black"
              }`}
              onClick={() => handleServiceChange(service.id)}
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service.id)}
                    onChange={() => handleServiceChange(service.id)}
                    className="w-4 h-4 rounded border-ferrari text-ferrari focus:ring-ferrari bg-black"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <p className="font-medium text-white">{service.name}</p>
                    <p className="font-medium text-ferrari">${service.price.toFixed(2)}</p>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center">
          <button
            onClick={handleContinue}
            className="bg-ferrari hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] hover:bg-ferrari/80 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelectionForm; 