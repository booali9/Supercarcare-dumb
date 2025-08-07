import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ReviewAppointment = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/scheduler")
  };

  return (
    <div className="bg-black bg-gradient-to-b from-[#0a0606] to-black min-h-screen flex justify-center py-10 px-4">
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
          <button className="bg-ferrari hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] hover:bg-ferrari/80 text-white font-medium px-6 py-3 rounded-lg w-full sm:w-auto transition-colors">
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewAppointment;