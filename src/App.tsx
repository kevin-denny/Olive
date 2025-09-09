import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import OliveAutomobile from './pages/OliveAutomobile';
import OliveMarketing from './pages/OliveMarketing';
import OliveHomes from './pages/OliveHomes';
import ProductsServices from './pages/ProductsServices';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/automobile" element={<OliveAutomobile />} />
            <Route path="/marketing" element={<OliveMarketing />} />
            <Route path="/homes" element={<OliveHomes />} />
            <Route path="/products-services" element={<ProductsServices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;