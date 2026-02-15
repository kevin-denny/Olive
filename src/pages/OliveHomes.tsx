import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Palette,
  Sofa,
  Utensils,
  ArrowRight,
  Star,
  Send,
} from "lucide-react";
import logo from "/logo-homes.png";

const OliveHomes = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const colors = {
    primary: "#A48D78",
    secondary: "#CBB9A4",
    tertiary: "#E6DAC8",
    quaternary: "#F4F1EA",
    light: "#FAF9F6",
  };

  const categories = [
    {
      title: "Living Room Collection",
      description:
        "Elegant sofas, coffee tables, and entertainment units that define comfort and style.",
      icon: Sofa,
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: [
        "Sectional Sofas",
        "Coffee Tables",
        "Entertainment Centers",
        "Accent Chairs",
      ],
    },
    {
      title: "Kitchen Essentials",
      description:
        "Premium cookware, dinnerware, and kitchen accessories for the modern home.",
      icon: Utensils,
      image:
        "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: [
        "Cookware Sets",
        "Dinnerware",
        "Kitchen Accessories",
        "Storage Solutions",
      ],
    },
    {
      title: "Home Decor",
      description:
        "Curated decorative pieces, lighting, and accessories to personalize your space.",
      icon: Palette,
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: ["Wall Art", "Lighting", "Decorative Objects", "Textiles"],
    },
  ];

  const lifestyle = [
    {
      title: "Modern Minimalism",
      description: "Clean lines, neutral palettes, and functional beauty",
      image:
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Cozy Comfort",
      description: "Warm textures, soft lighting, and inviting spaces",
      image:
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Elegant Sophistication",
      description: "Refined materials, luxurious finishes, and timeless design",
      image:
        "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600",
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >

      {/* Product Categories */}
      <section className="py-12" style={{ backgroundColor: colors.light }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Collections</h2> */}
            <img
              src={logo}
              alt="Olive logo"
              className="inline-block h-24 md:h-32 object-contain"
            />
            <p className="text-xl text-gray-600">
              Thoughtfully curated products for every room in your home
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group h-full flex flex-col"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                        style={{ backgroundColor: colors.primary }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      {category.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {category.products.map((product) => (
                        <div
                          key={product}
                          className="flex items-center space-x-2"
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: colors.secondary }}
                          ></div>
                          <span className="text-gray-700 text-sm">
                            {product}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button
                      className="w-full text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center group"
                      style={{ backgroundColor: colors.primary }}
                      onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        colors.secondary)
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = colors.primary)
                      }
                    >
                      Explore Collection
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lifestyle Imagery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Lifestyle Inspirations
            </h2>
            <p className="text-xl text-gray-600">
              Discover your perfect aesthetic and create spaces that inspire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lifestyle.map((style, index) => (
              <motion.div
                key={style.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{style.title}</h3>
                  <p className="text-sm opacity-90">{style.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: colors.quaternary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "Olive Homes transformed our living space beyond our expectations. The quality and attention to detail is exceptional.",
                author: "Sarah Johnson",
                rating: 5,
              },
              {
                text: "The furniture quality is outstanding and the customer service team made the entire process seamless.",
                author: "Michael Chen",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold" style={{ color: colors.primary }}>
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Request Our Catalog
            </h2>
            <p className="text-xl text-gray-600">
              Get exclusive access to our complete homeware collection and
              latest lifestyle inspirations
            </p>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 border"
            style={{ borderColor: colors.tertiary }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-colors"
                    style={
                      {
                        "--tw-ring-color": colors.primary,
                        focusRingColor: colors.primary,
                      } as React.CSSProperties
                    }
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Area of Interest
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent"
                  >
                    <option value="">Select an area</option>
                    <option value="living-room">Living Room</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="bedroom">Bedroom</option>
                    <option value="home-decor">Home Decor</option>
                    <option value="complete-home">
                      Complete Home Solution
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent"
                  placeholder="Tell us about your project or any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center group"
                style={{ backgroundColor: colors.primary }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.secondary)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.primary)
                }
              >
                <Send className="w-5 h-5 mr-2" />
                Send Catalog Request
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default OliveHomes;
