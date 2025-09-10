import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDivisions, setShowDivisions] = useState(false);
  const location = useLocation();

  const divisions = [
    { name: 'Olive Automobile', path: '/automobile', color: 'text-blue-600' },
    { name: 'Olive Marketing', path: '/marketing', color: 'text-green-600' },
    { name: 'Olive Homes', path: '/homes', color: 'text-amber-600' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} style={{ height: "60px" }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-[#e45d38] ${
                location.pathname === '/' ? 'text-[#e45d38]' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-[#e45d38] ${
                location.pathname === '/about' ? 'text-[#e45d38]' : 'text-gray-700'
              }`}
            >
              About Us
            </Link>
            
            {/* Divisions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDivisions(true)}
              onMouseLeave={() => setShowDivisions(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-[#e45d38] transition-colors">
                <span>Business Divisions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showDivisions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                >
                  {divisions.map((division) => (
                    <Link
                      key={division.path}
                      to={division.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#e45d38] transition-colors"
                    >
                      {division.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link
              to="/products-services"
              className={`text-sm font-medium transition-colors hover:text-[#e45d38] ${
                location.pathname === '/products-services' ? 'text-[#e45d38]' : 'text-gray-700'
              }`}
            >
              Products & Services
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-[#e45d38] ${
                location.pathname === '/contact' ? 'text-[#e45d38]' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#e45d38] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#e45d38] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              {divisions.map((division) => (
                <Link
                  key={division.path}
                  to={division.path}
                  className="text-gray-700 hover:text-[#e45d38] transition-colors pl-4"
                  onClick={() => setIsOpen(false)}
                >
                  {division.name}
                </Link>
              ))}
              <Link
                to="/products-services"
                className="text-gray-700 hover:text-[#e45d38] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products & Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#e45d38] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;