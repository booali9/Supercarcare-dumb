import React, { useState } from 'react';

const NameSignupBar = ({ name, setName, showSignup, setShowSignup }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 max-w-3xl mx-auto mb-6 mt-6">
    <input
      type="text"
      className="w-full sm:w-1/2 border border-ferrari rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ferrari text-white placeholder-gray-400 bg-black text-base"
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
);

// In the main Stepper or Layout, render <NameSignupBar /> above the step content, and ensure the SignupModal is available globally. 