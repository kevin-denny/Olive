import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Car, Cog, Home, Linkedin } from 'lucide-react';
import {
  SiInstagram,
  SiFacebook,
  SiYoutube
} from "@icons-pack/react-simple-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: '',
    subject: '',
    message: ''
  });

  const divisions = [
    { value: 'general', label: 'General Inquiry', icon: Mail },
    { value: 'automobile', label: 'Olive Automobile', icon: Car },
    { value: 'marketing', label: 'Olive Marketing', icon: Cog },
    { value: 'homes', label: 'Olive Homes', icon: Home }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Available Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@olive.com', 'support@olive.com'],
      description: 'We typically respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Business District', 'Suite 456, City, State 12345'],
      description: 'Visit our main headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM'],
      description: 'Closed on Sundays and holidays'
    }
  ];

  const divisionContacts = [
    {
      division: 'Olive Automobile',
      phone: '+1 (555) 123-AUTO',
      email: 'auto@olive.com',
      address: '789 Auto Plaza, Showroom District',
      color: 'from-blue-600 to-blue-700'
    },
    {
      division: 'Olive Marketing',
      phone: '+1 (555) 123-TOOLS',
      email: 'marketing@olive.com',
      address: '321 Industrial Park, Manufacturing Zone',
      color: 'from-green-600 to-green-700'
    },
    {
      division: 'Olive Homes',
      phone: '+1 (555) 123-HOMES',
      email: 'homes@olive.com',
      address: '654 Design Center, Lifestyle Quarter',
      color: 'from-amber-600 to-amber-700'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Contact <span className="text-[#e45d38]">Us</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto"
            >
              Get in touch with our expert teams across all divisions. We're here to help you find the perfect solutions for your needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to connect with our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-[#e45d38] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-800 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e45d38] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e45d38] focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e45d38] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Division</label>
                    <select
                      name="division"
                      value={formData.division}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e45d38] focus:border-transparent"
                    >
                      <option value="">Select a division</option>
                      {divisions.map((division) => (
                        <option key={division.value} value={division.value}>
                          {division.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e45d38] focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e45d38] focus:border-transparent"
                    placeholder="Provide details about your inquiry, requirements, or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e45d38] hover:bg-[#c54a2c] text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center group"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Locations</h2>
                <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center mb-8">
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Division Contacts</h3>
                <div className="space-y-4">
                  {divisionContacts.map((contact, index) => (
                    <motion.div
                      key={contact.division}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className={`bg-gradient-to-r ${contact.color} p-6 rounded-xl text-white`}
                    >
                      <h4 className="text-lg font-bold mb-3">{contact.division}</h4>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          {contact.phone}
                        </p>
                        <p className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          {contact.email}
                        </p>
                        <p className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {contact.address}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Follow Us</h2>
          <p className="text-xl text-gray-600 mb-12">
            Stay connected with Olive for the latest updates, products, and industry insights
          </p>
          <div className="flex justify-center space-x-6">
            <div className="flex space-x-4">
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/shem_silva_tech?igsh=MTF3Mnp3YnNkdThxMQ==",
                        "_blank"
                      )
                    }
                    className="w-12 h-12 bg-[#F7A72E]/60 rounded-full flex items-center justify-center hover:bg-[#F7A72E] transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <SiInstagram className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={() =>
                      window.open("https://www.facebook.com/share/1Az3JPFTjP/", "_blank")
                    }
                    className="w-12 h-12 bg-[#F7A72E]/60  rounded-full flex items-center justify-center hover:bg-[#F7A72E] transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <SiFacebook className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={() =>
                      window.open("https://www.linkedin.com/company/shem-silva-technologies?trk=public_profile_topcard-current-company", "_blank")
                    }
                    className="w-12 h-12 bg-[#F7A72E]/60  rounded-full flex items-center justify-center hover:bg-[#F7A72E] transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@ShemSilvaTechnologies",
                        "_blank"
                      )
                    }
                    className="w-12 h-12 bg-[#F7A72E]/60  rounded-full flex items-center justify-center hover:bg-[#F7A72E] transition-colors"
                    aria-label="Follow us on YouTube"
                  >
                    <SiYoutube className="w-6 h-6 text-white" />
                  </button>
                </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;