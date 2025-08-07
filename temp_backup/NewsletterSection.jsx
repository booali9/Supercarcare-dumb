import React from "react";
import logo from "./assets/logo.png";

const Newsletter = () => {
  return (
    <section className="bg-black bg-gradient-to-b from-[#0a0606] to-black py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-ferrari mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-gray-300 mb-8">Get the latest updates, offers, and news straight to your inbox.</p>
      {/* Reduced Form Width */}
      <form className="mt-4 w-full text-white max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Enter Full Name"
          className="w-full p-3 py-4 mb-4 rounded-xl font-semibold placeholder-white bg-black border border-ferrari focus:outline-none focus:ring-2 focus:ring-ferrari"
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 py-4 mb-6 rounded-xl font-semibold placeholder-white bg-black border border-ferrari focus:outline-none focus:ring-2 focus:ring-ferrari"
        />
        <button
          type="submit"
          className="w-full bg-ferrari text-white py-4 rounded-xl hover:shadow-[0_0_20px_2px_rgba(255,40,0,0.5)] hover:bg-ferrari/80 transition text-lg font-semibold"
        >
          SUBSCRIBE!
        </button>
      </form>
    </section>
  );
};

export default Newsletter;