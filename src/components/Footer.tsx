import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Olive logo"
                className="inline-block h-14 md:h-15 object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A premier conglomerate delivering excellence across automobile,
              marketing, and home solutions with a commitment to quality and
              innovation.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#e45d38] cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-[#e45d38] cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#e45d38] cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-[#e45d38] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Business Divisions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Business Divisions</h3>
            <div className="space-y-2">
              <Link
                to="/automobile"
                className="block text-gray-300 hover:text-[#e45d38] transition-colors text-sm"
              >
                Olive Automobile
              </Link>
              <Link
                to="/marketing"
                className="block text-gray-300 hover:text-[#e45d38] transition-colors text-sm"
              >
                Olive Marketing
              </Link>
              <Link
                to="/homes"
                className="block text-gray-300 hover:text-[#e45d38] transition-colors text-sm"
              >
                Olive Homes
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-gray-300 hover:text-[#e45d38] transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/products-services"
                className="block text-gray-300 hover:text-[#e45d38] transition-colors text-sm"
              >
                Products & Services
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-[#e45d38] transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#e45d38]" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#e45d38]" />
                <span className="text-gray-300 text-sm">info@olive.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#e45d38]" />
                <span className="text-gray-300 text-sm">
                  123 Business District, City
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Olive. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-[#e45d38] text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#e45d38] text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
