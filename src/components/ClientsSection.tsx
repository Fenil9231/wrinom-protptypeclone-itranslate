'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection = () => {
  const clientLogos = [
    { name: 'HAI Group', logo: 'HAI Group' },
    { name: 'Anybill', logo: 'Anybill' },
    { name: 'BundleTech', logo: 'BundleTech' },
    { name: 'eBay', logo: 'eBay' },
    { name: 'TERUMO', logo: 'TERUMO' },
    { name: 'AV3', logo: 'AV3' },
    { name: 'TATA', logo: 'TATA' },
    { name: 'SSI', logo: 'SSI' },
    { name: 'sitronics', logo: 'sitronics' },
    { name: 'adidas', logo: 'adidas' },
    { name: 'TRADESTOPS', logo: 'TRADESTOPS' },
    { name: 'THEMIS', logo: 'THEMIS' },
    { name: 'PHILIPS', logo: 'PHILIPS' },
    { name: 'LARGECO', logo: 'LARGECO' },
    { name: 'Klarna', logo: 'Klarna' },
    { name: 'revoz', logo: 'revoz' },
    { name: 'PEPSICO', logo: 'PEPSICO' },
    { name: 'Expedia', logo: 'Expedia' },
    { name: 'PayPal', logo: 'PayPal' },
    { name: 'TURKCELL', logo: 'TURKCELL' },
    { name: 'WARGAMING.NET', logo: 'WARGAMING.NET' },
    { name: 'InterCall', logo: 'InterCall' },
    { name: 'insightsoftware', logo: 'insightsoftware' },
    { name: 'TRADESMITH', logo: 'TRADESMITH' },
    { name: 'DESOTO', logo: 'DESOTO' },
    { name: 'AstraZeneca', logo: 'AstraZeneca' },
    { name: 'ArabRooms', logo: 'ArabRooms' },
    { name: 'EA', logo: 'EA' },
    { name: 'JP Morgan', logo: 'JP Morgan' },
    { name: 'UiPath', logo: 'UiPath' }
  ];

  const caseStudies = [
    {
      title: '$20bn',
      subtitle: 'worth investment portfolios managed',
      description: 'A web-based investment portfolio management platform. Tradestops serves 30,000+ retail American investors and features advanced analytics, portfolio analysis, intelligent alerts, and risk analytics.',
      link: '/case-studies/investment-portfolio'
    },
    {
      title: '10x',
      subtitle: 'faster pharmaceutical market analytics',
      description: '12+ years of cooperation on a cloud-based data management, visualization and analytics suite for a US pharmaceutical multinational with 500 million patients worldwide.',
      link: '/case-studies/pharmaceutical-analytics'
    },
    {
      title: '20M+',
      subtitle: 'customers enjoying AI-powered shopping',
      description: 'AI solutions for a global fashion retailer, including a predictive AI platform and real-time recommendation system, using ML higher conversions and cut infrastructure costs down by 50%.',
      link: '/case-studies/ai-shopping'
    },
    {
      title: '$50K',
      subtitle: 'saved annually with DevOps for The Economist',
      description: 'Itransition\'s DevOps team fixed performance of The Economist\'s microsite and went on to oversee their infrastructure management, including CI/CD optimization, saving the publisher $50K annually on infrastructure management costs.',
      link: '/case-studies/devops-economist'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            800+ clients served
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side - Client Logos */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center"
            >
              {clientLogos.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center justify-center h-16 px-2"
                >
                  <div className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium text-center">
                    {client.logo}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Case Studies */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {study.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-300 mb-4">
                        {study.subtitle}
                      </h4>
                    </div>
                    
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                      {study.description}
                    </p>
                    
                    <div className="flex items-center justify-end">
                      <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center group-hover:bg-pink-400 transition-colors">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;