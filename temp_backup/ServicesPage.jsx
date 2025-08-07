import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceSelectionForm = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const [error, setError] = useState("");

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
    { label: "Tire Price (each)", value: `$${tirePrice.toFixed(2)}` },
    { label: "Tire Price (set of 4)", value: `$${(tirePrice * 4).toFixed(2)}` },
    { label: "Selected Services", value: `$${totalServiceCost.toFixed(2)}` },
    { label: "Estimated Service Time", value: `${totalTime} minutes` },
    { label: "Total", value: `$${totalCost.toFixed(2)}`, isTotal: true },
  ];

  return (
    <div className="bg-black bg-gradient-to-b from-[#0a0606] to-black min-h-screen py-10 px-4">
      <div className="border border-ferrari mb-10 mt-5 p-6 rounded-lg shadow-md max-w-3xl mx-auto bg-black text-white">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-ferrari">Select Services</h2>
            <p className="text-gray-300">Choose the services you need for your tire installation</p>
          </div>
          <button
            onClick={handleBack}
            className="border border-ferrari font-medium text-sm rounded-md py-2 px-4 hover:bg-ferrari/10 transition-colors text-white"
          >
            Back
          </button>
        </div>

        {error && <p className="text-ferrari text-sm mb-4">{error}</p>}

        <div className="space-y-4 mb-6">
          {services.map((service) => (
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
                    className={`w-4 h-4 rounded border-ferrari text-ferrari focus:ring-ferrari bg-black`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <p className="font-medium text-white">{service.name}</p>
                    <p className="font-medium text-ferrari">${service.price.toFixed(2)}</p>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">{service.description}</p>
                  {service.time && (
                    <p className="text-ferrari text-xs mt-2">
                      Estimated time: {service.time} minutes
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black border border-ferrari/30 rounded-lg p-4 mb-6">
          {summaryDetails.map((item, index) => (
            <React.Fragment key={index}>
              <div className={`flex justify-between py-2 ${
                item.isTotal ? "border-t border-ferrari/30 mt-2" : ""
              }`}>
                <span className={`font-medium ${
                  item.isTotal ? "text-lg" : "text-gray-300"
                }`}>
                  {item.label}:
                </span>
                <span className={`${
                  item.isTotal ? "text-lg font-bold text-ferrari" : "text-white"
                }`}>
                  {item.value}
                </span>
              </div>
              {(item.label === "Estimated Service Time" || item.label === "Tire Price (set of 4)") && (
                <hr className="my-2 border-ferrari/30" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400">All prices include labor and taxes</p>
          <button
            onClick={handleContinue}
            className="bg-ferrari hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] hover:bg-ferrari/80 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Continue to Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelectionForm;