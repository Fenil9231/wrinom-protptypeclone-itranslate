'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Contact us
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Sales and general inquires
                </h3>
                <a 
                  href="mailto:info@itransition.com" 
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  info@itransition.com
                </a>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Want to join Itransition?
                </h3>
                <a 
                  href="/careers" 
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Explore careers
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Row - Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Second Row - Phone and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical"
                  required
                ></textarea>
              </div>

              {/* Privacy Notice */}
              <div className="text-sm text-gray-600">
                <p>
                  Please be informed that when you click the Send button Itransition Group will process your personal data in accordance with our{' '}
                  <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
                    Privacy notice
                  </a>{' '}
                  for the purpose of providing you with appropriate information.
                </p>
              </div>

              {/* File Attachment and Send Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span className="text-gray-700">Attach file</span>
                  </button>
                  <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-500">?</span>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-16 border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Logo and Rating */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
                <span className="text-xl font-bold text-gray-900">itransition</span>
              </div>
              
              {/* Rating */}
              <div className="mb-4">
                <div className="flex items-center space-x-1 mb-1">
                  <span className="text-red-500">★</span>
                  <span className="font-semibold text-gray-900">4.9/5</span>
                </div>
                <p className="text-xs text-gray-500">70 reviews</p>
                <div className="mt-2">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Powered by Clutch</span>
                </div>
              </div>
            </div>

            {/* About */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">About</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><a href="/services" className="hover:text-blue-600 transition-colors">Services</a></li>
                <li><a href="/industries" className="hover:text-blue-600 transition-colors">Industries</a></li>
                <li><a href="/case-studies" className="hover:text-blue-600 transition-colors">Case studies</a></li>
                <li><a href="/insights" className="hover:text-blue-600 transition-colors">Insights</a></li>
              </ul>
            </div>

            {/* United States */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">United States</h4>
              <div className="text-gray-600 text-sm space-y-3">
                <div>
                  <p className="font-medium">160 Clairemont Ave Suite 200,</p>
                  <p>Decatur, GA 30030</p>
                </div>
                <div>
                  <p className="text-blue-600">+1 720 207 2820</p>
                  <p className="text-gray-500">Sales inquiries</p>
                </div>
              </div>
            </div>

            {/* United Kingdom */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">United Kingdom</h4>
              <div className="text-gray-600 text-sm space-y-3">
                <div>
                  <p className="font-medium">3rd floor, 5-8 Dysart St.,</p>
                  <p>London EC2A 2BX</p>
                </div>
                <div>
                  <p className="text-blue-600">+44 203 687 2382</p>
                  <p className="text-gray-500">Sales inquiries</p>
                </div>
              </div>
              <div className="mt-4">
                <a href="/locations" className="text-blue-600 hover:text-blue-700 text-sm transition-colors">
                  View all locations →
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              <p>© 2025 Itransition</p>
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="/privacy-notice" className="text-gray-500 hover:text-blue-600 transition-colors">Privacy notice</a>
              <a href="/modern-slavery" className="text-gray-500 hover:text-blue-600 transition-colors">Modern slavery statement</a>
              <a href="/quality-management" className="text-gray-500 hover:text-blue-600 transition-colors">Quality management policy</a>
              <a href="/information-security" className="text-gray-500 hover:text-blue-600 transition-colors">Information security policy</a>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-3 ml-6">
                <a href="#" className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                  <span className="text-white text-xs">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                  <span className="text-white text-xs">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                  <span className="text-white text-xs">X</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;