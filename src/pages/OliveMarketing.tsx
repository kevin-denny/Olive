import React from "react";
import { motion } from "framer-motion";
import {
  Cog,
  Wrench,
  ChefHat,
  Download,
  Award,
  Users,
  Target,
} from "lucide-react";
import logo from "/logo-marketing.png";

const OliveMarketing = () => {
  const categories = [
    {
      title: "Industrial Machinery",
      description:
        "High-performance machinery for manufacturing and industrial applications.",
      icon: Cog,
      image:
        "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: [
        "Manufacturing Equipment",
        "Assembly Lines",
        "Quality Control Systems",
        "Automation Solutions",
      ],
    },
    {
      title: "Precision Tools",
      description:
        "Professional-grade tools engineered for precision and durability.",
      icon: Wrench,
      image:
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: [
        "Hand Tools",
        "Power Tools",
        "Measuring Instruments",
        "Cutting Tools",
      ],
    },
    {
      title: "Industrial Cookware",
      description:
        "Commercial-grade cookware solutions for professional kitchens.",
      icon: ChefHat,
      image:
        "https://images.pexels.com/photos/4252143/pexels-photo-4252143.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: [
        "Commercial Cookware",
        "Kitchen Equipment",
        "Food Preparation Tools",
        "Storage Solutions",
      ],
    },
  ];

  const caseStudies = [
    {
      title: "Manufacturing Efficiency Boost",
      client: "TechCorp Industries",
      result: "40% increase in production efficiency",
      image:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Implemented automated assembly line solutions that transformed their manufacturing process.",
    },
    {
      title: "Restaurant Chain Expansion",
      client: "Global Eats Network",
      result: "Equipped 50+ new locations",
      image:
        "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Provided comprehensive kitchen equipment for rapid restaurant chain expansion.",
    },
    {
      title: "Precision Tool Integration",
      client: "Precision Manufacturing Ltd.",
      result: "25% reduction in production errors",
      image:
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Supplied high-precision tools that significantly improved manufacturing accuracy.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      {/* Hero Section */}
      {/* <section className="relative py-20 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-green-300">Olive</span> Marketing
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl leading-relaxed text-green-100"
            >
              Professional-grade industrial solutions including machinery, precision tools, and commercial cookware. Empowering businesses with quality equipment and expert service.
            </motion.p>
          </div>
        </div>
      </section> */}

      {/* Product Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Categories</h2> */}
            <img
              src={logo}
              alt="Olive logo"
              className="inline-block h-24 md:h-32 object-contain"
            />
            <p className="text-xl text-gray-600">
              Comprehensive solutions for industrial and commercial needs
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {category.products.map((product) => (
                        <div
                          key={product}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{product}</span>
                        </div>
                      ))}
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download Brochure
                    </button>
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results for real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-green-600 font-semibold mb-2">
                    {study.client}
                  </p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    {study.result}
                  </div>
                  <p className="text-gray-600 text-sm">{study.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-green-100">
              Delivering measurable results across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Industrial Clients" },
              { icon: Award, number: "95%", label: "Client Satisfaction" },
              { icon: Target, number: "1000+", label: "Projects Completed" },
              { icon: Cog, number: "50+", label: "Product Categories" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-green-200">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Connect with our industrial solutions experts to discuss your
            specific requirements and discover how we can help optimize your
            business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Request Quote
            </button>
            <button className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default OliveMarketing;
