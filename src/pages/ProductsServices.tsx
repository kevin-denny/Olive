import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Car, Cog, Home } from 'lucide-react';

const ProductsServices = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const divisions = [
    { id: 'all', name: 'All Divisions', icon: Filter, color: 'text-gray-600' },
    { id: 'automobile', name: 'Automobile', icon: Car, color: 'text-blue-600' },
    { id: 'marketing', name: 'Marketing', icon: Cog, color: 'text-green-600' },
    { id: 'homes', name: 'Homes', icon: Home, color: 'text-amber-600' }
  ];

  const products = [
    // Automobile
    {
      id: 1,
      name: 'Premium Sedan Collection',
      division: 'automobile',
      category: 'Vehicle Sales',
      description: 'Luxury sedans with advanced features and superior comfort.',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting from $35,000'
    },
    {
      id: 2,
      name: 'Genuine Spare Parts',
      division: 'automobile',
      category: 'Parts & Accessories',
      description: 'OEM parts and accessories for all major automobile brands.',
      image: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Various pricing'
    },
    {
      id: 3,
      name: 'Professional Service Center',
      division: 'automobile',
      category: 'Services',
      description: 'Complete automotive service and maintenance solutions.',
      image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Service rates apply'
    },
    
    // Marketing
    {
      id: 4,
      name: 'Industrial Machinery Systems',
      division: 'marketing',
      category: 'Manufacturing Equipment',
      description: 'High-performance machinery for industrial applications.',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Quote on request'
    },
    {
      id: 5,
      name: 'Precision Tool Collection',
      division: 'marketing',
      category: 'Professional Tools',
      description: 'Professional-grade tools for precision work and manufacturing.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Various pricing'
    },
    {
      id: 6,
      name: 'Commercial Cookware Line',
      division: 'marketing',
      category: 'Kitchen Equipment',
      description: 'Professional cookware for commercial kitchen operations.',
      image: 'https://images.pexels.com/photos/4252143/pexels-photo-4252143.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Bulk pricing available'
    },

    // Homes
    {
      id: 7,
      name: 'Living Room Furniture Set',
      division: 'homes',
      category: 'Furniture',
      description: 'Complete living room furniture collections with modern design.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting from $2,500'
    },
    {
      id: 8,
      name: 'Kitchen Essentials Collection',
      division: 'homes',
      category: 'Homeware',
      description: 'Premium kitchenware and dining accessories for modern homes.',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting from $150'
    },
    {
      id: 9,
      name: 'Home Decor & Accessories',
      division: 'homes',
      category: 'Decor',
      description: 'Curated decorative pieces and accessories for stylish homes.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting from $25'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.division === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
              Products & Services
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto"
            >
              Discover our comprehensive range of products and services across all business divisions. Quality, innovation, and excellence in every offering.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Division Filters */}
            <div className="flex flex-wrap gap-2">
              {divisions.map((division) => {
                const IconComponent = division.icon;
                return (
                  <button
                    key={division.id}
                    onClick={() => setActiveFilter(division.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeFilter === division.id
                        ? 'bg-[#e45d38] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{division.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products and services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full lg:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e45d38] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
              {searchTerm && ` for "${searchTerm}"`}
              {activeFilter !== 'all' && ` in ${divisions.find(d => d.id === activeFilter)?.name}`}
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No products found</h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
                className="bg-[#e45d38] hover:bg-[#c54a2c] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => {
                const divisionData = divisions.find(d => d.id === product.division);
                const IconComponent = divisionData?.icon || Filter;
                
                return (
                  <motion.div
                    key={product.id}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <IconComponent className={`w-5 h-5 ${divisionData?.color}`} />
                          <span className="text-sm font-medium text-gray-600">
                            {product.category}
                          </span>
                        </div>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                          {divisionData?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-[#e45d38]">
                          {product.price}
                        </span>
                        <button className="bg-[#e45d38] hover:bg-[#c54a2c] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e45d38] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Our expert teams across all divisions are ready to create tailored solutions that meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[#e45d38] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Request Custom Quote
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#e45d38] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Speak with Expert
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductsServices;