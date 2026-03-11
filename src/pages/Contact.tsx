import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Car,
  Cog,
  Home,
  Linkedin,
} from "lucide-react";
import {
  SiInstagram,
  SiFacebook,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    division: "",
    subject: "",
    message: "",
  });

  const divisions = [
    { value: "general", label: "General Inquiry", icon: Mail },
    { value: "automobile", label: "Olive Automobile", icon: Car },
    { value: "marketing", label: "Olive Marketing", icon: Cog },
    { value: "homes", label: "Olive Homes", icon: Home },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+94 77 772 2830", "+94 74 141 7434"],
      description: "Available Mon-Sat, 9AM-6PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["olivemarketingint@gmail.com", "olivelandin@gmail.com"],
      description: "We typically respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["1 100, Colombo, Mahawewa", "No.76/A Puttalam - Colombo Rd, Negombo 61130"],
      description: "Visit our offices",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
      description: "Closed on Sundays and holidays",
    },
  ];

  const divisionContacts = [
    {
      division: "Olive Automobile",
      phone: "+94 77 772 2830 / +94 77 722 3143",
      email: "olivelandin@gmail.com",
      address: "1 100, Colombo, Mahawewa",
      color: "from-blue-600 to-blue-700",
    },
    {
      division: "Olive Marketing",
      phone: "+94 74 141 7434",
      email: "olivemarketingint@gmail.com",
      address: "1 100, Colombo, Mahawewa",
      color: "from-green-600 to-green-700",
    },
    {
      division: "Olive Homes",
      phone: "+94 32 713 7197",
      email: "olivehomes@gmail.com",
      address: "No.76/A Puttalam - Colombo Rd, Negombo 61130",
      color: "from-amber-600 to-amber-700",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
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
              Get in touch with our expert teams across all divisions. We're
              here to help you find the perfect solutions for your needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to connect with our team
            </p>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-800 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations & Division Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Find us or reach out to the right team directly</p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-100 rounded-2xl overflow-hidden h-80 mb-12"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2403480797334!2d79.84481737448462!3d7.213400514762984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ef002fdb4dbd%3A0xe4fda403e0760f0!2sOlive%20Marketing%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1759202824626!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Division Contacts – 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {divisionContacts.map((contact, index) => (
              <motion.div
                key={contact.division}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`bg-gradient-to-r ${contact.color} p-6 rounded-xl text-white`}
              >
                <h4 className="text-lg font-bold mb-3">{contact.division}</h4>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 shrink-0" />
                    {contact.phone}
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 shrink-0" />
                    {contact.email}
                  </p>
                  <p className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                    {contact.address}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Follow Us</h2>
          <p className="text-xl text-gray-600 mb-12">
            Stay connected with Olive for the latest updates, products, and
            industry insights
          </p>
          <div className="flex justify-center space-x-6">
            <div className="flex space-x-4">
              <button
                onClick={() =>
                  window.open(
                    // "https://www.instagram.com/shem_silva_tech?igsh=MTF3Mnp3YnNkdThxMQ==",
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
                  window.open(
                    // "https://www.facebook.com/share/1Az3JPFTjP/",
                    "_blank"
                  )
                }
                className="w-12 h-12 bg-[#F7A72E]/60  rounded-full flex items-center justify-center hover:bg-[#F7A72E] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <SiFacebook className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() =>
                  window.open(
                    // "https://www.linkedin.com/company/shem-silva-technologies?trk=public_profile_topcard-current-company",
                    "_blank"
                  )
                }
                className="w-12 h-12 bg-[#F7A72E]/60  rounded-full flex items-center justify-center hover:bg-[#F7A72E] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() =>
                  window.open(
                    // "https://www.youtube.com/@ShemSilvaTechnologies",
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
