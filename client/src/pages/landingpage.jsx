import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

// Separate LoginButton component for Google Sign-in
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      type="button"
      onClick={() => loginWithRedirect()}
      className="w-full bg-red-500 text-white p-2 rounded-lg mt-4"
    >
      Sign in with Google
    </button>
  );
};

const LandingPage = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between SignUp and SignIn

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-gray-300 py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="bg-gray-400 w-16 h-16 flex items-center justify-center text-white font-bold">
              LOGO
            </div>
            {/* Description */}
            <p className="text-gray-800">Join us and start earning with ShortBees now!</p>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <div className="flex-1 container mx-auto flex justify-between items-center py-16">
        {/* Form on the left */}
        <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            {isSignUp ? 'Create Your Account' : 'Sign In to Your Account'}
          </h2>
          <form className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-sm">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
            )}
            <div>
              <label className="block text-sm">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            {isSignUp && (
              <div>
                <label className="block text-sm">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Confirm your password"
                />
              </div>
            )}
            <div className="flex justify-between space-x-4">
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className={`w-1/2 p-2 rounded-lg border ${
                  isSignUp ? 'bg-blue-500 text-white' : 'bg-gray-100'
                }`}
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className={`w-1/2 p-2 rounded-lg border ${
                  !isSignUp ? 'bg-blue-500 text-white' : 'bg-gray-100'
                }`}
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <LoginButton /> {/* Google Sign-in Button */}
          </div>
        </div>

        {/* Image on the right */}
        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Placeholder"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-200 py-8">
        <div className="container mx-auto text-center grid grid-cols-3 gap-4">
          <div>
            <h3 className="text-3xl font-bold">₹ 10,00,000+</h3>
            <p className="text-gray-600">Money Earned by People</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-gray-600">People Working</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-gray-600">Available Jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
