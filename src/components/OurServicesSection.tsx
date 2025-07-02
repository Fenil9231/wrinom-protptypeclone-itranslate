'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const OurServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Application services');

  const serviceCategories = [
    'Application services',
    'Technology advisory',
    'Digital enterprise',
    'Data analytics',
    'Intelligent automation',
    'Managed IT services'
  ];

  const applicationServices = {
    title: 'Application services',
    description: 'Our software development company delivers corporate and consumer applications based on our profound understanding of technologies and the markets in which our professional mindset, we look beyond technology to offer viable solutions for your particular business context.',
    services: [
      {
        title: 'Application development',
        description: 'We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.',
        image: '/api/placeholder/300/200',
        link: '/services/application-development'
      },
      {
        title: 'Application security',
        description: 'We ensure enterprise-grade application security through audit, testing, secure development practices, and training.',
        image: '/api/placeholder/300/200',
        link: '/services/application-security'
      },
      {
        title: 'Software product engineering',
        description: 'From MVP development to post-release support, we help our customers bring their products to market faster and with no pitfalls on the way.',
        image: '/api/placeholder/300/200',
        link: '/services/software-product-engineering'
      },
      {
        title: 'Enterprise app integration',
        description: 'We integrate enterprise systems to create interconnected ecosystems for seamless enterprise management.',
        image: '/api/placeholder/300/200',
        link: '/services/enterprise-app-integration'
      },
      {
        title: 'QA & testing',
        description: 'We make application testing a part of the software delivery cycle as well as offering it as a standalone service.',
        image: '/api/placeholder/300/200',
        link: '/services/qa-testing'
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Sidebar */}
          <div className="lg:w-1/3">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-12 leading-tight">
              Our services
            </h2>
            
            {/* Service Categories */}
            <div className="space-y-1">
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left py-4 px-0 text-lg font-medium transition-colors duration-200 border-b-2 ${
                    activeCategory === category
                      ? 'text-blue-600 border-blue-600'
                      : 'text-gray-600 hover:text-gray-800 border-transparent hover:border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Section Header */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {applicationServices.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {applicationServices.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {applicationServices.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <Link href={service.link}>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        {/* Service Image */}
                        {index === 2 && (
                          <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center transform rotate-12">
                                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full"></div>
                              <div className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-500 rounded-full"></div>
                              <div className="absolute top-1/2 left-8 w-4 h-4 bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                        )}
                        
                        {/* Service Content */}
                        <div className="p-6">
                          <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {service.description}
                          </p>
                          <div className="flex items-center text-pink-500 group-hover:text-pink-600 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;