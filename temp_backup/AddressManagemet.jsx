import React, { useState } from 'react';
import { Home, MapPin, Plus, X, CreditCard, Truck } from 'lucide-react';

const AddressManagement = () => {
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [shippingAddresses, setShippingAddresses] = useState([]);
  const [billingAddress, setBillingAddress] = useState(null);

  // Form states
  const [shippingForm, setShippingForm] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    phone: ''
  });

  const [billingForm, setBillingForm] = useState({
    cardHolder: '',
    phone: ''
  });

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setShippingAddresses([...shippingAddresses, shippingForm]);
    setShippingForm({
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      postalCode: '',
      phone: ''
    });
    setShowShippingForm(false);
  };

  const handleBillingSubmit = (e) => {
    e.preventDefault();
    setBillingAddress(billingForm);
    setBillingForm({
      cardHolder: '',
      phone: ''
    });
    setShowBillingForm(false);
  };

  return (
    <div className="flex-1 p-2 md:p-8 bg-white rounded-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Address Management</h1>

        {/* Billing Address Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-[#A1252E]" />
              Saved Billing Address
            </h2>
            {!billingAddress && (
              <button
                onClick={() => setShowBillingForm(true)}
                className="text-sm text-[#A1252E] hover:text-[#A1252E]/80 flex items-center"
              >
                <Plus className="mr-1 h-4 w-4" />
                Add Billing Address
              </button>
            )}
          </div>

          {billingAddress ? (
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{billingAddress.cardHolder}</h3>
                  <p className="text-sm text-gray-600">Phone: {billingAddress.phone}</p>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 bg-gray-50 rounded-lg">
              <MapPin className="mx-auto h-10 w-10 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">You have not yet added a billing address.</p>
            </div>
          )}

          {/* Billing Address Form */}
          {showBillingForm && (
            <div className="mt-4 p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Add Billing Address</h3>
                <button onClick={() => setShowBillingForm(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={handleBillingSubmit}>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Holder Name</label>
                    <input
                      type="text"
                      value={billingForm.cardHolder}
                      onChange={(e) => setBillingForm({...billingForm, cardHolder: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#A1252E] focus:border-[#A1252E]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={billingForm.phone}
                      onChange={(e) => setBillingForm({...billingForm, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#A1252E] focus:border-[#A1252E]"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowBillingForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#A1252E] text-white rounded-md hover:bg-[#A1252E]/90"
                  >
                    Save Address
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Shipping Address Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              <Truck className="mr-2 h-5 w-5 text-[#A1252E]" />
              Saved Shipping Addresses
            </h2>
            <button
              onClick={() => setShowShippingForm(true)}
              className="text-sm text-[#A1252E] hover:text-[#A1252E]/80 flex items-center"
            >
              <Plus className="mr-1 h-4 w-4" />
              Add New Address
            </button>
          </div>

          {shippingAddresses.length > 0 ? (
            <div className="space-y-3">
              {shippingAddresses.map((address, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{address.firstName} {address.lastName}</h3>
                      <p className="text-sm text-gray-600">{address.address1}</p>
                      {address.address2 && <p className="text-sm text-gray-600">{address.address2}</p>}
                      <p className="text-sm text-gray-600">
                        {address.city}, {address.state} {address.postalCode}
                      </p>
                      <p className="text-sm text-gray-600">Phone: {address.phone}</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 bg-gray-50 rounded-lg">
              <Home className="mx-auto h-10 w-10 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">You have not yet added a shipping address.</p>
            </div>
          )}

          {/* Shipping Address Form */}
          {showShippingForm && (
            <div className="mt-4 p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Add Shipping Address</h3>
                <button onClick={() => setShowShippingForm(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={handleShippingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Personal Information */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      value={shippingForm.firstName}
                      onChange={(e) => setShippingForm({...shippingForm, firstName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#A1252E] focus:border-[#A1252E]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      value={shippingForm.lastName}
                      onChange={(e) => setShippingForm({...shippingForm, lastName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#A1252E] focus:border-[#A1252E]"
                      required
                    />
                  </div>

                  {/* Address Information */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
                    <input
                      type="text"
                      value={shippingForm.address1}
                      onChange={(e) => setShippingForm({...shippingForm, address1: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#A1252E] focus:border-[#A1252E]"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Apartment, Suite, etc. (Optional)</label>
                    <input
                      type="text"
                      value={shippingForm.address2}
                      onChange={(e) => setShippingForm({...shippingForm, address2: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#A1252E] focus:border-[#A1252E]"
                    />
                  </div>

                  {/* Location Information */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <input
                      type="text"
                      value={shippingForm.city}
                      onChange={(e) => setShippingForm({...shippingForm, city: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#A1252E] focus:border-[#A1252E]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State/Province *</label>
                    <input
                      type="text"
                      value={shippingForm.state}
                      onChange={(e) => setShippingForm({...shippingForm, state: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#A1252E] focus:border-[#A1252E]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postal/Zip Code *</label>
                    <input
                      type="text"
                      value={shippingForm.postalCode}
                      onChange={(e) => setShippingForm({...shippingForm, postalCode: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#A1252E] focus:border-[#A1252E]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      value={shippingForm.phone}
                      onChange={(e) => setShippingForm({...shippingForm, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#A1252E] focus:border-[#A1252E]"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowShippingForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#A1252E] text-white rounded-md hover:bg-[#A1252E]/90"
                  >
                    Save Address
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressManagement;