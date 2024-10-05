// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import HomePage from '/Pages/HomePage'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
