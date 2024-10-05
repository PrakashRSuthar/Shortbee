// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Ensure the path is correct and consistent
import HomePage from './pages/HomePage';
import PaymentPage from './pages/Payment';
import PostJobPage from './pages/PostJob';
import ServicesPage from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/post-job" element={<PostJobPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
