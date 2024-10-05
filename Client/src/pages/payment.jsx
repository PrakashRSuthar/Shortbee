import React, { useState } from 'react';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('UPI Card');

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/50" alt="Logo" className="h-10" />
            <h1 className="text-lg font-bold">Payment Page</h1>
          </div>
          {/* Profile Links */}
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-sm text-gray-700">Home</a>
            <a href="#" className="text-sm text-gray-700">Profile</a>
            <a href="#" className="text-sm text-gray-700">Settings</a>
            <input type="text" placeholder="Search in site" className="border border-gray-300 px-3 py-1 rounded-md" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Redeem Your Money</h1>
          <p className="text-center text-gray-600 mb-12">
            Choose a payment method to redeem your balance.
          </p>

          {/* Payment Methods */}
          <div className="flex justify-center space-x-10 mb-12">
            {/* UPI Card */}
            <div
              onClick={() => handleSelectMethod('UPI Card')}
              className={`cursor-pointer flex flex-col items-center p-4 border-2 rounded-lg ${
                selectedMethod === 'UPI Card' ? 'border-black' : 'border-gray-300'
              }`}
            >
              <img
                src="https://via.placeholder.com/100"
                alt="UPI Card"
                className="mb-4"
              />
              <h3 className="text-lg font-bold">UPI Card</h3>
              <p className="text-sm text-gray-600">Redeem directly to your UPI card</p>
            </div>

            {/* Bank Transfer */}
            <div
              onClick={() => handleSelectMethod('Bank Transfer')}
              className={`cursor-pointer flex flex-col items-center p-4 border-2 rounded-lg ${
                selectedMethod === 'Bank Transfer' ? 'border-black' : 'border-gray-300'
              }`}
            >
              <img
                src="https://via.placeholder.com/100"
                alt="Bank Transfer"
                className="mb-4"
              />
              <h3 className="text-lg font-bold">Bank Transfer</h3>
              <p className="text-sm text-gray-600">Transfer to your bank account</p>
            </div>

            {/* Gift Voucher */}
            <div
              onClick={() => handleSelectMethod('Gift Voucher')}
              className={`cursor-pointer flex flex-col items-center p-4 border-2 rounded-lg ${
                selectedMethod === 'Gift Voucher' ? 'border-black' : 'border-gray-300'
              }`}
            >
              <img
                src="https://via.placeholder.com/100"
                alt="Gift Voucher"
                className="mb-4"
              />
              <h3 className="text-lg font-bold">Gift Voucher</h3>
              <p className="text-sm text-gray-600">Redeem as a gift voucher</p>
            </div>
          </div>

          {/* Add Card Details */}
          <h2 className="text-xl font-semibold mb-4">Add Card Details</h2>
          <p className="text-sm text-gray-600 mb-6">Enter your card details below</p>
          <div className="grid grid-cols-1 gap-6 mb-6">
            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium mb-2">Card Number</label>
              <input
                type="text"
                placeholder="Enter UPI Card number"
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              />
            </div>

            {/* Name on Card */}
            <div>
              <label className="block text-sm font-medium mb-2">Name on Card</label>
              <input
                type="text"
                placeholder="Enter the name on the UPI Card"
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              />
            </div>

            {/* IFSC Code */}
            <div>
              <label className="block text-sm font-medium mb-2">IFSC Code</label>
              <input
                type="text"
                placeholder="Enter IFSC Code of your bank"
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              />
            </div>
          </div>

          {/* Redeem Button */}
          <button className="bg-black text-white px-6 py-2 rounded-md w-full">
            Redeem Now
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-10">
        <p className="text-sm text-gray-600">
          © 2022 Payment Page Inc. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default PaymentPage;
