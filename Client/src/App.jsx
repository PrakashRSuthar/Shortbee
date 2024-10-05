import './App.css';
import HomePage from './pages/homepage';
import LandingPage from './pages/LandingPage'; // Adjust the import path
import PaymentPage from './pages/payment';
import PostJobPage from './pages/postjob';

function App() {
  return (
    <div className="App">
      <PaymentPage />
    </div>
  );
}

export default App;
