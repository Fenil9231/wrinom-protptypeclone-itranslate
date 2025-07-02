'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiSettings, FiGlobe, FiCpu, FiMonitor, FiZap } from 'react-icons/fi';
import Link from 'next/link';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Application Services',
      description: 'Custom software development, web and mobile applications, and enterprise solutions.',
      features: ['Custom Software Development', 'Web Development', 'Mobile Development', 'Enterprise Applications']
    },
    {
      icon: FiSettings,
      title: 'Technology Advisory',
      description: 'Strategic technology consulting and architecture design for digital transformation.',
      features: ['Technology Strategy', 'Architecture Design', 'Digital Consulting', 'Technology Assessment']
    },
    {
      icon: FiGlobe,
      title: 'Digital Enterprise',
      description: 'End-to-end digital transformation solutions for modern enterprises.',
      features: ['Digital Strategy', 'Process Automation', 'Enterprise Integration', 'Digital Platforms']
    },
    {
      icon: FiDatabase,
      title: 'Data Analytics',
      description: 'Advanced data analytics, business intelligence, and machine learning solutions.',
      features: ['Business Intelligence', 'Data Warehousing', 'Machine Learning', 'Data Visualization']
    },
    {
      icon: FiCpu,
      title: 'Intelligent Automation',
      description: 'AI-powered automation solutions to streamline business processes.',
      features: ['RPA Solutions', 'AI Integration', 'Process Optimization', 'Workflow Automation']
    },
    {
      icon: FiMonitor,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management and support services for your business.',
      features: ['IT Support', 'Infrastructure Management', 'Cloud Management', '24/7 Monitoring']
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Redis', category: 'Cache' }
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
            OUR <span className="text-blue-600">SERVICES</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We provide comprehensive software engineering services to help businesses 
            transform digitally and achieve their technology goals.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                variants={itemVariants}
              >
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                     <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          className="bg-white rounded-3xl p-12 shadow-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              TECHNOLOGIES WE <span className="text-blue-600">MASTER</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team is proficient in the latest technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
            variants={containerVariants}
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300 transform hover:scale-105"
                variants={itemVariants}
              >
                <div className="text-lg font-bold text-gray-900 mb-1">{tech.name}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">{tech.category}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Link
              href="/technologies"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View All Technologies
              <FiZap className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-black text-gray-900 mb-6"
            variants={itemVariants}
          >
            READY TO START YOUR <span className="text-blue-600">PROJECT?</span>
          </motion.h3>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Let&apos;s discuss how we can help you achieve your business goals with our expertise.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;