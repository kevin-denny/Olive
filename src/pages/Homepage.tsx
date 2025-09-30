import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Car,
  Briefcase,
  Home,
  Target,
  Eye,
  Heart,
} from "lucide-react";
import logo from "/logo.png";

const Homepage = () => {
  const divisions = [
    {
      name: "Olive Automobile",
      description:
        "Premium automotive sales, parts, and comprehensive service solutions for discerning customers.",
      image:
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      path: "/automobile",
      icon: Car,
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Olive Marketing",
      description:
        "Industrial machinery, precision tools, and commercial cookware for professional excellence.",
      image:
        "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800",
      path: "/marketing",
      icon: Briefcase,
      color: "from-green-600 to-green-700",
    },
    {
      name: "Olive Homes",
      description:
        "Curated homeware, luxury furniture, and lifestyle solutions for sophisticated living.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      path: "/homes",
      icon: Home,
      color: "from-amber-600 to-amber-700",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To deliver exceptional products and services across our diverse business divisions, creating lasting value for our customers and communities.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be the leading conglomerate that sets industry standards through innovation, quality, and customer-centric excellence.",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "Integrity, innovation, excellence, and customer satisfaction drive everything we do across all our business verticals.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20 z-10"></div> */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/assets/treebg.png)",
          }}
        ></div> */}
        <div
          className="absolute inset-0 bg-contain bg-top bg-no-repeat"
          style={{
            backgroundImage: "url(/assets/bg.jpg)",
          }}
        >
          
        </div>

        <div className="relative z-20 bg-white/90 text-center text-black max-w-4xl rounded-xl mx-auto px-4 py-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-2"
          >
            Welcome to the House of{" "}
            <img
              src={logo}
              alt="Olive logo"
              className="inline-block h-14 md:h-20 object-contain"
            />
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 leading-relaxed text-black-200"
          >
            A premier conglomerate delivering excellence across automotive,
            marketing, and home solutions with unwavering commitment to quality
            and innovation.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/about"
              className="bg-[#e45d38] hover:bg-[#c54a2c] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border-2 bg-white  border-black hover:bg-[#d9d9d9]  hover:text-gray-900 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Business Divisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three distinct divisions, one shared commitment to excellence.
              Explore our specialized business sectors designed to meet diverse
              market needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {divisions.map((division, index) => {
              const IconComponent = division.icon;
              return (
                <motion.div
                  key={division.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <Link to={division.path} className="block">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={division.image}
                          alt={division.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${division.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                        ></div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div
                            className={`w-12 h-12 rounded-full bg-gradient-to-r ${division.color} flex items-center justify-center mr-4`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {division.name}
                          </h3>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {division.description}
                        </p>

                        <div className="flex items-center text-[#e45d38] font-semibold group-hover:translate-x-2 transition-transform">
                          <span>Explore Division</span>
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our journey towards excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#e45d38] rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e45d38]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Connect with us to discover how our diverse business divisions can
            serve your unique needs with unmatched quality and service.
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#e45d38] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center group"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Homepage;
