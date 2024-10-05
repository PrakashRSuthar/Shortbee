import React, { useState } from 'react';

const PostJobPage = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/50" alt="Logo" className="h-10" />
            <h1 className="text-lg font-bold">Short Bees 🐝</h1>
          </div>
          {/* Profile Icon */}
          <div className="flex items-center">
            <button className="w-10 h-10 rounded-full bg-purple-500 text-white">MG</button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="container mx-auto py-12 px-4">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Post a Job</h1>
          <p className="text-center text-gray-600 mb-12">Fill in the details to post your job.</p>

          {step === 1 && (
            <div>
              {/* Step 1: Job Details */}
              <h2 className="text-xl font-semibold mb-6">Step 1: Job Details</h2>
              <div className="grid grid-cols-2 gap-8 mb-6">
                {/* Job Title */}
                <div>
                  <label className="block text-sm font-medium mb-2">Job Title</label>
                  <input
                    type="text"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    placeholder="Enter a descriptive job title."
                  />
                  <p className="text-sm text-gray-400">Max 40 characters</p>
                </div>

                {/* Job Category */}
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <div className="space-x-2">
                    <button className="border px-4 py-2 rounded-md">Surveys</button>
                    <button className="border px-4 py-2 rounded-md">Testing</button>
                    <button className="border px-4 py-2 rounded-md">Reels</button>
                    <button className="border px-4 py-2 rounded-md">Other</button>
                  </div>
                </div>
              </div>

              {/* Job Description and File Upload */}
              <div className="grid grid-cols-2 gap-8 mb-6">
                {/* Job Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">Job Description</label>
                  <textarea
                    className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    placeholder="Detailed instructions (50-500 characters)."
                  ></textarea>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2">File Upload</label>
                  <input
                    type="file"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full"
                  />
                  <p className="text-sm text-gray-400">Support for documents, images, videos</p>
                </div>
              </div>

              {/* Next and Back Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="border px-4 py-2 rounded-md bg-white text-gray-600"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="border px-4 py-2 rounded-md bg-black text-white"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              {/* Step 2: Payment & Time */}
              <h2 className="text-xl font-semibold mb-6">Step 2: Payment & Time</h2>
              <div className="grid grid-cols-2 gap-8 mb-6">
                {/* Payment */}
                <div>
                  <label className="block text-sm font-medium mb-2">Payment</label>
                  <input
                    type="number"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    placeholder="Min ₹100"
                  />
                </div>

                {/* Estimated Time */}
                <div>
                  <label className="block text-sm font-medium mb-2">Estimated Time</label>
                  <div className="space-x-2">
                    <button className="border px-4 py-2 rounded-md">15 minutes</button>
                    <button className="border px-4 py-2 rounded-md">30 minutes</button>
                    <button className="border px-4 py-2 rounded-md">1 hour</button>
                    <button className="border px-4 py-2 rounded-md">Custom</button>
                  </div>
                </div>
              </div>

              {/* Mode of Job */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Mode Of Job</label>
                <input
                  type="text"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                  placeholder="Remote or in-person. Address if required."
                />
              </div>

              {/* Post Job and Back Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="border px-4 py-2 rounded-md bg-white text-gray-600"
                >
                  Back
                </button>
                <button
                  onClick={() => alert('Job Posted')}
                  className="border px-4 py-2 rounded-md bg-black text-white"
                >
                  Post Job
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Additional Features Section */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">Additional Features</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-bold">Help Tooltips</h3>
              <p className="text-gray-600">Guidance tooltips next to key fields.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-bold">Review Job Summary</h3>
              <p className="text-gray-600">Review job details before posting. (Optional)</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-bold">Fully Responsive Design</h3>
              <p className="text-gray-600">Mobile-friendly single-column layout.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-10">
        <div className="container mx-auto text-sm text-gray-600">
          <a href="#" className="mr-4 hover:underline">Contact Us</a>
          <a href="#" className="mr-4 hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default PostJobPage;
