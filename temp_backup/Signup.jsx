import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signupp = () => {
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setdata((preve) => ({ ...preve, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <div className="flex pt-24 flex-col justify-center font-[sans-serif] sm:h-screen p-4 bg-white">
      <div className="max-w-2xl w-full mx-auto border border-gray-300 rounded-2xl p-8 shadow-md">
        <div className="text-center mb-10 text-4xl font-bold text-[#A1252E]">Register</div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Username */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block font-semibold">Username</label>
              <input
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#A1252E]"
                type="text"
                name="username"
                placeholder="Enter Username"
                value={data.username}
                required
                onChange={handleOnChange}
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block font-semibold">Email</label>
              <input
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#A1252E]"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={data.email}
                required
                onChange={handleOnChange}
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block font-semibold">Password</label>
              <input
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#A1252E]"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={data.password}
                required
                onChange={handleOnChange}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block font-semibold">Confirm Password</label>
              <input
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#A1252E]"
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                value={data.confirmpassword}
                required
                onChange={handleOnChange}
              />
            </div>
          </div>
          {/* Address */}
<div className="col-span-1 md:col-span-2">
  <label className="text-gray-800 text-sm mb-2 block font-semibold">Street</label>
  <input
    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#A1252E] mb-4"
    type="text"
    name="street"
    placeholder="Enter Street"
    value={data.street || ""}
    onChange={handleOnChange}
  />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="text-gray-800 text-sm mb-2 block font-semibold">City</label>
      <input
        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#A1252E]"
        type="text"
        name="city"
        placeholder="Enter City"
        value={data.city || ""}
        onChange={handleOnChange}
      />
    </div>

    <div>
      <label className="text-gray-800 text-sm mb-2 block font-semibold">State</label>
      <input
        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#A1252E]"
        type="text"
        name="state"
        placeholder="Enter State"
        value={data.state || ""}
        onChange={handleOnChange}
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div>
      <label className="text-gray-800 text-sm mb-2 block font-semibold">Country</label>
      <input
        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#A1252E]"
        type="text"
        name="country"
        placeholder="Enter Country"
        value={data.country || ""}
        onChange={handleOnChange}
      />
    </div>

    <div>
      <label className="text-gray-800 text-sm mb-2 block font-semibold">Postal Code</label>
      <input
        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#A1252E]"
        type="text"
        name="postalCode"
        placeholder="Enter Postal Code"
        value={data.postalCode || ""}
        onChange={handleOnChange}
      />
    </div>
  </div>
</div>


          {/* Submit Button */}
          <div className="mt-10">
            <button className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-[#A1252E] hover:bg-[#861c27] transition duration-200">
              Create an account
            </button>
          </div>

          {/* Login Link */}
          <p className="text-gray-800 text-sm mt-6 text-center">
            Already have an account?
            <Link
              to={"/login"}
              className="text-[#A1252E] font-semibold hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signupp;
