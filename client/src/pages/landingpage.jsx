import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

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
  const { loginWithRedirect } = useAuth0();
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between SignUp and SignIn

  const handleGoogleSignIn = () => {
    loginWithRedirect();
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Form Section */}
      <div className="flex-1 container mx-auto flex justify-between items-center py-16">
        {/* Form on the left */}
        <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {isSignUp ? 'Create Your Account' : 'Sign In to Your Account'}
          </h2>
          <form className="space-y-6">
            {isSignUp && (
              <div>
                <label className="block text-lg font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
            )}
            <div>
              <label className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            {isSignUp && (
              <div>
                <label className="block text-lg font-semibold">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Confirm your password"
                />
              </div>
            )}
            <div className="flex justify-between space-x-4 mt-4">
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className={`w-full p-3 rounded-lg border ${
                  isSignUp ? 'bg-blue-500 text-white' : 'bg-gray-100'
                }`}
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className={`w-full p-3 rounded-lg border ${
                  !isSignUp ? 'bg-blue-500 text-white' : 'bg-gray-100'
                }`}
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <LoginButton />
          </div>
        </div>

        {/* Image on the right */}
        <div className="w-1/2 pl-10">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Placeholder"
            className="w-full h-auto object-cover rounded-lg shadow"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-purple-500">₹ 10,00,000+</h3>
            <p className="mt-2 text-gray-700">Money Earned by People</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-purple-500">500+</h3>
            <p className="mt-2 text-gray-700">People Working</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-purple-500">100+</h3>
            <p className="mt-2 text-gray-700">Available Jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
