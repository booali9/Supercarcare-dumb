import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const ServiceSelectionForm = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const [error, setError] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [name, setName] = useState("");

  const services = [
    { id: 1, name: "Tire Installation", description: "Professional installation of new tires.", price: 20.0, time: 30 },
    { id: 2, name: "Wheel Alignment", description: "Adjustment of wheel angles for optimal performance.", price: 89.99, time: 60 },
    { id: 3, name: "Tire Pressure Monitoring System (TPMS) Service", description: "Inspection and maintenance of TPMS sensors.", price: 25.0, time: 15 },
    { id: 4, name: "Valve Stem Replacement", description: "Replacement of damaged or worn valve stems.", price: 5.0, time: 10 },
    { id: 5, name: "Road Hazard Warranty", description: "Protection against road hazards like punctures.", price: 15.0 },
  ];

  const tirePrice = 100.0;
  const selectedServiceDetails = services.filter((service) => selectedServices.includes(service.id));
  const totalServiceCost = selectedServiceDetails.reduce((sum, service) => sum + service.price, 0);
  const totalTime = selectedServiceDetails.reduce((sum, service) => sum + service.time, 0);
  const totalCost = totalServiceCost + tirePrice * 4;

  const handleServiceChange = (id) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((serviceId) => serviceId !== id)
        : [...prevSelected, id]
    );
    setError("");
  };

  const handleContinue = () => {
    if (selectedServices.length === 0) {
      setError("Please select at least one service to continue.");
    } else {
      navigate("/scheduler");
    }
  };

  const handleBack = () => {
    navigate("/location");
  };

  const summaryDetails = [
    { label: "Selected Tire", value: "OFM Original Equipment" },
    { label: "Tire Price (each)", value: `${tirePrice.toFixed(2)}` },
    { label: "Tire Price (set of 4)", value: `${(tirePrice * 4).toFixed(2)}` },
    { label: "Selected Services", value: `${totalServiceCost.toFixed(2)}` },
    { label: "Estimated Service Time", value: `${totalTime} minutes` },
    { label: "Total", value: `${totalCost.toFixed(2)}`, isTotal: true },
  ];

  return (
    <div className="min-h-screen py-10 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6 flex-col sm:flex-row gap-4">
            <h2 className="text-3xl font-bold text-ferrari">Select Services</h2>
            <button
              onClick={handleBack}
              className="border border-ferrari font-medium text-sm rounded-md py-2 px-4 hover:bg-ferrari/10 transition-colors text-white w-full sm:w-auto"
            >
              Back
            </button>
          </div>

          {error && <p className="text-ferrari text-sm mb-4">{error}</p>}

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <input type="text" className="w-full border border-ferrari rounded-lg px-4 py-3 text-base placeholder:text-base focus:outline-none focus:ring-2 focus:ring-ferrari text-white placeholder-gray-400 bg-black" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
            <span className="text-gray-400 text-sm mx-2">or</span>
            <button type="button" className="text-ferrari font-semibold underline hover:text-ferrari/80 text-sm whitespace-nowrap" onClick={() => setShowSignup(true)}>Sign Up</button>
          </div>
          <SignupModal open={showSignup} onClose={() => setShowSignup(false)} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-6 border rounded-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl ${
                  selectedServices.includes(service.id)
                    ? "border-ferrari bg-ferrari/10 shadow-lg"
                    : "border-gray-700 hover:border-ferrari bg-gray-900"
                }`}
                onClick={() => handleServiceChange(service.id)}
              >
                <div className="flex items-start space-x-4">
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service.id)}
                    readOnly
                    className={`w-5 h-5 rounded mt-1 border-2 ${selectedServices.includes(service.id) ? 'border-ferrari bg-ferrari' : 'border-gray-600'} text-ferrari focus:ring-ferrari`}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-lg text-white">{service.name}</h3>
                      <p className="font-bold text-xl text-ferrari">${service.price.toFixed(2)}</p>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{service.description}</p>
                    {service.time && (
                      <p className="text-ferrari text-xs mt-3 font-semibold">
                        Estimated time: {service.time} minutes
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 lg:sticky top-28 h-fit">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-ferrari mb-6">Order Summary</h3>
            {summaryDetails.map((item, index) => (
              <React.Fragment key={index}>
                <div className={`flex justify-between py-3 ${
                  item.isTotal ? "text-xl font-bold" : "text-base"
                }`}>
                  <span className={`${item.isTotal ? "text-white" : "text-gray-300"}`}>
                    {item.label}:
                  </span>
                  <span className={`${item.isTotal ? "text-ferrari" : "text-white"}`}>
                    {item.value}
                  </span>
                </div>
                {(index < summaryDetails.length - 2) && <hr className="border-gray-700" />}
                {item.isTotal && <hr className="my-3 border-gray-700" />}
              </React.Fragment>
            ))}
            <p className="text-xs text-gray-500 mb-6">All prices include labor and taxes.</p>
            <button
              onClick={handleContinue}
              className="w-full bg-ferrari hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] hover:bg-ferrari/90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-lg"
            >
              Continue to Schedule
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 sticky bottom-0 bg-black z-10 p-4 sm:static sm:p-0">
        <button
          onClick={handleContinue}
          className="bg-ferrari text-white px-4 py-3 rounded w-full max-w-xs font-semibold text-lg shadow-lg hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] hover:bg-ferrari/80 transition-colors duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ServiceSelectionForm;