'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar, FiMessageSquare, FiTrendingUp, FiDollarSign, FiClock } from 'react-icons/fi';

const ClientSuccess: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      project: 'Electronic Health Records System',
      quote: 'Itransition helped us modernize our healthcare infrastructure with a comprehensive EHR system that improved patient care and operational efficiency.',
      author: 'Dr. Michael Thompson',
      position: 'Chief Medical Officer',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      results: {
        efficiency: '50% reduction in patient wait times',
        cost: '30% decrease in administrative costs',
        time: 'Deployed across 15 facilities in 8 months'
      }
    },
    {
      id: 2,
      client: 'Financial Institution',
      industry: 'Banking & Finance',
      project: 'Digital Banking Platform',
      quote: 'The digital banking solution delivered by Itransition transformed our customer experience and significantly improved our competitive position in the market.',
      author: 'Jennifer Walsh',
      position: 'VP of Digital Innovation',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      results: {
        efficiency: '75% increase in digital adoption',
        cost: '40% reduction in operational costs',
        time: 'Launched in 12 months with zero downtime'
      }
    },
    {
      id: 3,
      client: 'Retail Chain',
      industry: 'Retail & E-commerce',
      project: 'Omnichannel Commerce Platform',
      quote: 'Itransition\'s omnichannel solution unified our online and offline operations, resulting in improved customer satisfaction and increased sales.',
      author: 'Robert Martinez',
      position: 'Chief Technology Officer',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      results: {
        efficiency: '60% improvement in inventory management',
        cost: '25% increase in conversion rates',
        time: 'ROI achieved within 6 months'
      }
    }
  ];

  const caseStudies = [
    {
      title: 'Automotive Manufacturing Optimization',
      client: 'Leading Automotive Manufacturer',
      industry: 'Automotive',
      challenge: 'Streamline production processes and reduce downtime',
      solution: 'IoT-enabled smart manufacturing platform',
      results: ['35% reduction in production downtime', '20% increase in efficiency', 'Real-time monitoring across 12 plants'],
      image: '/api/placeholder/400/300',
      tags: ['IoT', 'Manufacturing', 'Analytics']
    },
    {
      title: 'Telecom Network Management',
      client: 'Major Telecommunications Provider',
      industry: 'Telecommunications',
      challenge: 'Manage complex network infrastructure efficiently',
      solution: 'AI-powered network management system',
      results: ['40% faster issue resolution', '99.95% network uptime', '50% reduction in manual interventions'],
      image: '/api/placeholder/400/300',
      tags: ['Telecom', 'AI/ML', 'Network Management']
    },
    {
      title: 'Hi-Tech Product Development',
      client: 'Technology Innovation Company',
      industry: 'Hi-Tech',
      challenge: 'Accelerate product development lifecycle',
      solution: 'Agile development platform with CI/CD',
      results: ['50% faster time-to-market', '30% reduction in development costs', '99% deployment success rate'],
      image: '/api/placeholder/400/300',
      tags: ['Hi-Tech', 'DevOps', 'Agile']
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
    <section className="py-20 bg-gray-50">
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
            800+ <span className="text-blue-600">CLIENTS SERVED</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            For over 25 years, we&apos;ve been delivering innovative software solutions that drive business transformation 
            and create lasting value for our clients worldwide.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="bg-white rounded-3xl p-12 shadow-xl mb-20 relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Testimonial Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <FiMessageSquare className="w-12 h-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{testimonials[activeTestimonial].client}</h3>
                      <p className="text-gray-600">{testimonials[activeTestimonial].industry}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">
                        {testimonials[activeTestimonial].author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonials[activeTestimonial].author}</div>
                      <div className="text-gray-600">{testimonials[activeTestimonial].position}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Results */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Project Results</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FiTrendingUp className="w-6 h-6 text-green-600 mr-3" />
                      <span className="text-gray-700">{testimonials[activeTestimonial].results.efficiency}</span>
                    </div>
                    <div className="flex items-center">
                      <FiDollarSign className="w-6 h-6 text-blue-600 mr-3" />
                      <span className="text-gray-700">{testimonials[activeTestimonial].results.cost}</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="w-6 h-6 text-purple-600 mr-3" />
                      <span className="text-gray-700">{testimonials[activeTestimonial].results.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              FEATURED <span className="text-blue-600">CASE STUDIES</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore detailed case studies showcasing our expertise across different industries and technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-black mb-2">{study.client.split(' ')[0]}</div>
                    <div className="text-sm opacity-80">{study.industry}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{study.challenge}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Key Results:</div>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center">
                    Read Full Case Study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccess;