'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      name: 'Retail',
      description: 'We develop online and offline retail solutions that help businesses stay competitive and meet evolving customer expectations.',
      link: '/industries/retail',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M20,80 L80,80 L80,40 L20,40 Z\' fill=\'%23ffffff20\'/%3E%3Cpath d=\'M30,40 L30,20 L70,20 L70,40\' fill=\'%23ffffff15\'/%3E%3C/svg%3E")'
    },
    {
      name: 'Telecom',
      description: 'Comprehensive telecom solutions for network optimization, customer management, and digital transformation.',
      link: '/industries/telecom',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'30\' r=\'15\' fill=\'%23ffffff25\'/%3E%3Cpath d=\'M35,45 L65,45 L50,70 Z\' fill=\'%23ffffff20\'/%3E%3C/svg%3E")'
    },
    {
      name: 'Hi-tech',
      description: 'Cutting-edge technology solutions for hardware and software companies in the high-tech sector.',
      link: '/industries/hi-tech',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Crect x=\'20\' y=\'30\' width=\'60\' height=\'40\' fill=\'%23ffffff20\'/%3E%3Ccircle cx=\'30\' cy=\'40\' r=\'3\' fill=\'%23ffffff40\'/%3E%3Ccircle cx=\'40\' cy=\'40\' r=\'3\' fill=\'%23ffffff40\'/%3E%3C/svg%3E")'
    },
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant healthcare software solutions for hospitals, clinics, and medical device companies.',
      link: '/industries/healthcare',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M50,20 L55,35 L50,50 L45,35 Z\' fill=\'%23ffffff30\'/%3E%3Cpath d=\'M35,45 L50,50 L65,45 L50,40 Z\' fill=\'%23ffffff30\'/%3E%3C/svg%3E")'
    },
    {
      name: 'Automotive',
      description: 'Advanced automotive software solutions for connected cars, fleet management, and manufacturing.',
      link: '/industries/automotive',
      image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M20,60 L80,60 L75,40 L25,40 Z\' fill=\'%23ffffff25\'/%3E%3Ccircle cx=\'30\' cy=\'65\' r=\'8\' fill=\'%23ffffff30\'/%3E%3Ccircle cx=\'70\' cy=\'65\' r=\'8\' fill=\'%23ffffff30\'/%3E%3C/svg%3E")'
    },
    {
      name: 'Finance',
      description: 'Secure financial software solutions for banking, insurance, and fintech companies.',
      link: '/industries/finance',
      image: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Crect x=\'30\' y=\'20\' width=\'40\' height=\'60\' fill=\'%23ffffff20\'/%3E%3Cpath d=\'M35,30 L65,30 L65,35 L35,35 Z\' fill=\'%23ffffff30\'/%3E%3Cpath d=\'M35,40 L65,40 L65,45 L35,45 Z\' fill=\'%23ffffff30\'/%3E%3C/svg%3E")'
    }
  ];

  const companyStats = {
    title: 'Itransition at a glance',
    stats: [
      {
        number: '1998',
        label: 'founded',
        color: 'text-blue-400'
      },
      {
        number: '3000+',
        label: 'engineers',
        color: 'text-blue-400'
      },
      {
        number: '800+',
        label: 'clients served',
        color: 'text-blue-400'
      },
      {
        number: '5',
        label: 'R&D labs',
        color: 'text-white'
      },
      {
        number: '50',
        label: 'clients of 5+ years',
        color: 'text-white'
      },
      {
        number: '40',
        label: 'countries on our global delivery map',
        color: 'text-white'
      }
    ]
  };

  return (
    <section className="relative overflow-hidden h-screen">
      {/* Dynamic Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0"
        key={activeIndustry}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div 
          className="w-full h-full relative"
          style={{
            background: industries[activeIndustry].image,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side - Industries Title and Description */}
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Industries
            </motion.h2>
            
            {/* Active Industry Description */}
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                {industries[activeIndustry].description}
              </p>
              <div className="flex items-center text-blue-300 hover:text-blue-200 transition-colors cursor-pointer">
                <span className="text-base font-medium mr-2">Learn more</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Company Stats */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                {companyStats.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {companyStats.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-3xl lg:text-4xl font-bold mb-2 ${stat.color}`}>
                      {stat.number}
                    </div>
                    <div className="text-white/70 text-sm leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Horizontal Industry Slider */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <div className="flex justify-center space-x-8 bg-black/30 backdrop-blur-sm rounded-full px-8 py-4">
            {industries.map((industry, index) => (
                <motion.button
                  key={index}
                onClick={() => setActiveIndustry(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndustry === index
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {industry.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;