import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage'
import PaymentPage from './pages/Payment'
import PostJobPage from './pages/postjob';
import ServicesPage from './pages/services';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/post' element={<PostJobPage />} />
            <Route path='/services' element={<ServicesPage />} />
        </Routes>
    );
};

export default AllRoutes;
