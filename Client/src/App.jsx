// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Ensure the path is correct and consistent
import HomePage from './pages/HomePage';
import PaymentPage from './pages/Payment';
import PostJobPage from './pages/PostJob';
import ServicesPage from './pages/Services';

function App() {
  return (
    <div className="App">
      <ServicesPage />
    </div>
  );
}

export default App;
