import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Globe, TrendingUp, Star } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "1000+", label: "Satisfied Clients", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "25%", label: "YoY Growth", icon: TrendingUp },
  ];

  const leadership = [
    {
      name: "John Anderson",
      position: "Chief Executive Officer",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Visionary leader with over 20 years of experience in building successful conglomerates.",
    },
    {
      name: "Sarah Mitchell",
      position: "Chief Operating Officer",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Operations expert ensuring seamless integration across all business divisions.",
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      image:
        "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Innovation driver bringing cutting-edge technology solutions to traditional industries.",
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
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              About <span className="text-[#e45d38]">Olive</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl leading-relaxed text-gray-300"
            >
              Building bridges between excellence and innovation across diverse
              industries, creating lasting impact through quality, integrity,
              and customer-centric solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, Olive began as a vision to create a
                  conglomerate that would redefine excellence across multiple
                  industries. What started as a small automotive dealership has
                  grown into a diversified business empire spanning automotive,
                  industrial marketing, and luxury home solutions.
                </p>
                <p>
                  Our journey has been marked by strategic expansion, innovative
                  thinking, and an unwavering commitment to customer
                  satisfaction. Each division of our company represents a pillar
                  of expertise, built on years of industry knowledge and
                  customer trust.
                </p>
                <p>
                  Today, we stand as a testament to what's possible when vision
                  meets execution, serving thousands of customers worldwide with
                  the same dedication and quality that defined our humble
                  beginnings.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#e45d38] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-left">
                We are committed to delivering exceptional value to our
                customers by:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4 text-left">
                <li>
                  Providing stylish and functional homeware that enriches modern
                  living.
                </li>
                <li>
                  Sourcing and importing high-quality products with efficiency
                  and integrity.
                </li>
                <li>
                  Offering dependable automotive solutions that move people and
                  businesses forward.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-left">
                Through innovation, service excellence, and strategic
                partnerships, we aim to grow sustainably while upholding the
                highest standards of quality and responsibility across all our
                ventures.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a dynamic and trusted group that enhances everyday living
                through quality products, innovative sourcing, and reliable
                mobility solutions across diverse markets.
              </p>
            </motion.div>

            {/* <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#e45d38]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-[#e45d38] rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrity, innovation, excellence, and customer satisfaction
                drive everything we do. We believe in transparent business
                practices, continuous improvement, and creating value that
                extends beyond profit to meaningful impact.
              </p>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              The visionaries driving our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-[#e45d38] font-semibold mb-4">
                    {leader.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;
