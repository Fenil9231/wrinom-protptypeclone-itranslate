'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiDollarSign, FiTruck, FiCpu, FiRadio } from 'react-icons/fi';
import Link from 'next/link';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: FiHeart,
      title: 'Healthcare',
      description: 'Comprehensive healthcare software solutions including EHR systems, telemedicine platforms, and medical device integration.',
      solutions: ['Electronic Health Records', 'Telemedicine Platforms', 'Medical Device Integration', 'Healthcare Analytics'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FiTruck,
      title: 'Automotive',
      description: 'Connected car solutions, automotive software development, and smart manufacturing systems for the automotive industry.',
      solutions: ['Connected Car Platforms', 'Automotive IoT', 'Manufacturing Systems', 'Fleet Management'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiDollarSign,
      title: 'Finance',
      description: 'Secure fintech solutions, digital banking platforms, payment systems, and regulatory compliance software.',
      solutions: ['Digital Banking', 'Payment Processing', 'Risk Management', 'Regulatory Compliance'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiShoppingCart,
      title: 'Retail',
      description: 'E-commerce platforms, omnichannel retail solutions, inventory management, and customer experience optimization.',
      solutions: ['E-commerce Platforms', 'Omnichannel Solutions', 'Inventory Management', 'Customer Analytics'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: FiRadio,
      title: 'Telecom',
      description: 'Telecommunications software, network management systems, billing platforms, and customer service solutions.',
      solutions: ['Network Management', 'Billing Systems', 'Customer Portals', 'Service Optimization'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FiCpu,
      title: 'Hi-Tech',
      description: 'Cutting-edge technology solutions, software product development, and innovation-driven applications.',
      solutions: ['Product Development', 'Innovation Labs', 'Tech Consulting', 'R&D Solutions'],
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const stats = [
    { number: '15+', label: 'Industries Served' },
    { number: '800+', label: 'Successful Projects' },
    { number: '25+', label: 'Years of Experience' },
    { number: '40+', label: 'Countries Worldwide' }
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
            INDUSTRIES WE <span className="text-blue-600">SERVE</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We deliver industry-specific solutions that address unique challenges 
            and drive digital transformation across various sectors.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={industry.title}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
                variants={itemVariants}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${industry.color} shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  {/* Solutions List */}
                  <ul className="space-y-2 mb-6">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${industry.color}`}></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <Link
                    href={`/industries/${industry.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Explore Solutions
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              TRUSTED BY BUSINESSES <span className="text-yellow-400">WORLDWIDE</span>
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our expertise spans across industries, delivering solutions that drive growth and innovation.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={itemVariants}
              >
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-black text-gray-900 mb-6"
            variants={itemVariants}
          >
            READY TO TRANSFORM YOUR <span className="text-blue-600">INDUSTRY?</span>
          </motion.h3>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Let&apos;s discuss how our industry expertise can help you achieve your business objectives.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Case Studies
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;