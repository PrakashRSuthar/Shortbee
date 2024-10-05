import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/50" alt="Logo" className="h-10" />
            <h1 className="text-lg font-bold">Short Bees</h1>
          </div>
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search in site"
            className="border px-3 py-2 rounded-md"
          />
          {/* Profile Icon */}
          <div className="flex items-center">
            <button className="w-10 h-10 rounded-full bg-purple-500 text-white">MG</button>
          </div>
        </div>
      </nav>

      {/* Sidebar + Main content */}
      <div className="container mx-auto px-4 py-8 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-bold mb-4">Find short gigs</h3>
          <ul className="space-y-2">
            <li className="hover:bg-gray-100 rounded-md p-2">Home</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Surveys</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Short Videos</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Testing</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Caption Writing</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Documentation & Reporting</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Poster/Photo Editing</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Reel Making</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Short Riding Services</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Post A Job</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-grow ml-8">
          {/* Welcome Section */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Welcome to Short Bees</h2>
            <p className="mt-2 text-gray-600">Find and post short tasks and jobs easily.</p>
          </div>

          {/* Featured Jobs Section */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-6">Featured Jobs</h3>
            <div className="grid grid-cols-3 gap-6">
              {/* Job 1 */}
              <div className="bg-white p-4 rounded-lg shadow">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Short video"
                  className="rounded-t-md mb-4"
                />
                <h4 className="text-lg font-semibold">Short video</h4>
                <p className="text-gray-600">Edit and earn</p>
              </div>

              {/* Job 2 */}
              <div className="bg-white p-4 rounded-lg shadow">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Caption writing"
                  className="rounded-t-md mb-4"
                />
                <h4 className="text-lg font-semibold">Caption writing</h4>
                <p className="text-gray-600">Write a caption for their videos</p>
              </div>

              {/* Job 3 */}
              <div className="bg-white p-4 rounded-lg shadow">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Surveys"
                  className="rounded-t-md mb-4"
                />
                <h4 className="text-lg font-semibold">Surveys</h4>
                <p className="text-gray-600">Answer questions</p>
              </div>
            </div>
          </section>

          {/* Latest Jobs Section */}
          <section>
            <h3 className="text-2xl font-bold mb-6">Latest Jobs</h3>
            <div className="grid grid-cols-2 gap-6">
              {/* Job 1 */}
              <div className="bg-white p-4 rounded-lg shadow flex items-center">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Website Testing"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">Website Testing</h4>
                  <p className="text-gray-600">Find Bugs</p>
                </div>
              </div>

              {/* Job 2 */}
              <div className="bg-white p-4 rounded-lg shadow flex items-center">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Video Editing"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">Video Editing</h4>
                  <p className="text-gray-600">Edit videos for clients</p>
                </div>
              </div>

              {/* Job 3 */}
              <div className="bg-white p-4 rounded-lg shadow flex items-center">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Job Category"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">Job Category</h4>
                  <p className="text-gray-600">Job Description</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-10">
        <div className="container mx-auto text-sm text-gray-600">
          <a href="#" className="mr-4 hover:underline">Help</a>
          <a href="#" className="mr-4 hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
