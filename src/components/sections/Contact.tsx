'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiGlobe, FiClock } from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      details: 'info@itransition.com',
      description: 'Send us an email anytime'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      details: '+1 (720) 408-7760',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      details: 'Denver, CO, USA',
      description: 'Come say hello at our office'
    },
    {
      icon: FiClock,
      title: '24/7 Support',
      details: 'Round the Clock',
      description: 'We provide continuous support'
    }
  ];

  const offices = [
    {
      city: 'Denver',
      country: 'USA',
      address: '1515 Wynkoop St, Suite 300, Denver, CO 80202',
      phone: '+1 (720) 408-7760',
      email: 'usa@itransition.com'
    },
    {
      city: 'London',
      country: 'UK',
      address: '1 Ropemaker St, London EC2Y 9HT, United Kingdom',
      phone: '+44 20 3808 9555',
      email: 'uk@itransition.com'
    },
    {
      city: 'Minsk',
      country: 'Belarus',
      address: 'Nezavisimosti Ave 58, Minsk 220012, Belarus',
      phone: '+375 17 336 1600',
      email: 'info@itransition.com'
    }
  ];

  const services = [
    'Custom Software Development',
    'Web Application Development',
    'Mobile App Development',
    'Cloud Solutions',
    'Data Analytics & BI',
    'DevOps & Infrastructure',
    'Quality Assurance',
    'UI/UX Design',
    'Digital Transformation',
    'IT Consulting'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  } as const;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
            variants={itemVariants}
          >
            GET IN <span className="text-blue-600">TOUCH</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to start your next project? Contact us today to discuss your requirements 
            and discover how we can help you achieve your business goals.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactInfo.map((info) => {
            const IconComponent = info.icon;
            return (
              <motion.div
                key={info.title}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center border border-blue-100 hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-blue-600 font-semibold mb-1">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Contact Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              Send Us a <span className="text-blue-600">Message</span>
            </h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <FiSend className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </motion.div>
          
          {/* Office Locations */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              Our <span className="text-blue-600">Offices</span>
            </h3>
            <p className="text-gray-600 mb-8">
              Visit us at one of our global locations or reach out to your nearest office.
            </p>
            
            <div className="space-y-6">
              {offices.map((office) => (
                <div key={`${office.city}-${office.country}`} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <FiGlobe className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {office.city}, {office.country}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FiMapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <FiPhone className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <FiMail className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-600">{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-black mb-6">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you&apos;re a startup looking to build your first product or an enterprise 
              seeking digital transformation, we&apos;re here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
                Schedule a Call
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;