import React from 'react';

const ServicesPage = () => {
  const surveys = [
    { title: "Big Basket", image: "https://via.placeholder.com/150" },
    { title: "Zomato Survey", image: "https://via.placeholder.com/150" },
    { title: "Kai RUchi", image: "https://via.placeholder.com/150" },
    { title: "Zepto", image: "https://via.placeholder.com/150" },
    { title: "Flipkart Survey", image: "https://via.placeholder.com/150" },
  ];

  const shortVideos = [
    { title: "Captivating Travel Video", image: "https://via.placeholder.com/150", views: "10K" },
    { title: "Cooking Tutorial", image: "https://via.placeholder.com/150", views: "10K" },
    { title: "Funny Animal Compilation", image: "https://via.placeholder.com/150", views: "10K" },
  ];

  const tests = [
    { title: "Student Login Page", image: "https://via.placeholder.com/150" },
    { title: "Text to Speech App", image: "https://via.placeholder.com/150" },
    { title: "Find Bugs on our App", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar + Main content */}
      <div className="container mx-auto px-4 py-8 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-bold mb-4">Find short gigs</h3>
          <ul className="space-y-2">
            <li className="hover:bg-gray-100 rounded-md p-2">Surveys</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Short Videos</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Testing</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Caption Writing</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Documentation & Reporting</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Poster/Photo Editing</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Reel Making</li>
            <li className="hover:bg-gray-100 rounded-md p-2">Short Riding Services</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-grow ml-8">
          {/* Surveys Section */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-6">Surveys for you</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {surveys.map((survey, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <img src={survey.image} alt={survey.title} className="rounded-t-md mb-4" />
                  <h4 className="text-lg font-semibold">{survey.title}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Short Videos Section */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-6">Short videos</h3>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600">
              Record Now
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shortVideos.map((video, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                  <img src={video.image} alt={video.title} className="rounded-t-md mb-4" />
                  <h4 className="text-lg font-semibold">{video.title}</h4>
                  <p className="text-sm text-gray-600">Views: {video.views}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testing Section */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-6">Testing 🧪</h3>
            <button className="bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-600">
              Test Now
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tests.map((test, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <img src={test.image} alt={test.title} className="rounded-t-md mb-4" />
                  <h4 className="text-lg font-semibold">{test.title}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Caption Writing Section */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-6">Caption Writing</h3>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded mb-4 hover:bg-yellow-600">
              Caption Now
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shortVideos.map((video, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <img src={video.image} alt={video.title} className="rounded-t-md mb-4" />
                  <h4 className="text-lg font-semibold">{video.title}</h4>
                  <p className="text-sm text-gray-600">Views: {video.views}</p>
                </div>
              ))}
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

export default ServicesPage;
