import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const tires = [
  {
    name: "OEM Original Equipment",
    tag: "Original Equipment",
    size: "225/65R17 | All-Season",
    description: "Original equipment tires designed specifically for your vehicle.",
    price: "$180.99",
  },
  {
    name: "Michelin Defender T+H",
    size: "225/65R17 | All-Season",
    description: "Long-lasting, fuel-efficient tires with excellent wet traction.",
    price: "$210.99",
  },
  {
    name: "Bridgestone Dueler H/L Alenza Plus",
    size: "225/65R17 | All-Season",
    description: "Quiet, comfortable ride with enhanced wet performance.",
    price: "$195.99",
  },
  {
    name: "Continental CrossContact LX25",
    size: "225/65R17 | All-Season",
    description: "Excellent traction and handling in all weather conditions.",
    price: "$189.99",
  },
];

const TireSelection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle "Select This Tire" button click
  const handleSelectTire = () => {
    navigate("/services"); // Navigate to /services
  };

  // Function to handle "Back" button click
  const handleBack = () => {
    navigate("/vehicle-info"); // Navigate to /vehicle-info
  };

  return (
    <div className="font-sans cursor-default bg-white text-black min-h-screen flex justify-center items-center px-4 sm:px-6">
      <div className="max-w-4xl w-full border mb-10 mt-5 border-gray-300  rounded-lg p-4 sm:p-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="w-full">
            <h2 className="text-lg sm:text-2xl py-2 font-bold text-[#A1252E]">
              Select Your Tires
            </h2>
            <p className="text-gray-900 text-sm sm:text-base mb-4 sm:mb-6">
              Choose the best tires for your 2023 vehicle.
            </p>
          </div>
          <button
            onClick={handleBack} // Add onClick handler for "Back" button
            className="border border-gray-300 font-medium text-sm rounded-md py-2 px-4 hover:bg-gray-100 transition-colors"
          >
            Back
          </button>
        </div>

        {/* Tires List - Single Column on Small Screens */}
        <div className="flex flex-col gap-4 mt-1">
          {tires.map((tire, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-gray-300 hover:border-[#A1252E] transition"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex gap-2 items-center mb-2 sm:mb-0">
                  <h3 className="text-base sm:text-lg font-medium">{tire.name}</h3>
                  {tire.tag && (
                    <span className="cursor-pointer text-xs hover:bg-[#731B22] bg-[#A1252E] text-black px-3 py-1 rounded-lg">
                      {tire.tag}
                    </span>
                  )}
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-lg sm:text-xl font-bold">{tire.price}</p>
                  <p className="text-sm text-[#A1252E]">per tire</p>
                </div>
              </div>
              <p className="text-gray-900 text-sm">{tire.size}</p>
              <p className="text-gray-900 mt-2 text-sm">{tire.description}</p>
              <hr className="my-3 border-[#1e293b]" />
              <div className="flex justify-center sm:justify-end">
                <button
                  onClick={handleSelectTire} // Add onClick handler for "Select This Tire" button
                  className="bg-[#A1252E] text-sm sm:text-base hover:bg-[#731B22] text-black px-4 py-2 rounded-lg transition w-full sm:w-auto"
                >
                  Select This Tire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-gray-900 text-center mt-6">
          All tires include free mounting and balancing
        </p>
      </div>
    </div>
  );
};

export default TireSelection;