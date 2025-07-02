'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiSmartphone, FiMonitor, FiCpu, FiShield, FiTrendingUp } from 'react-icons/fi';

const TechnologyExpertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: FiMonitor,
      description: 'Modern, responsive, and interactive user interfaces',
      technologies: [
        { name: 'React', level: 95, color: 'bg-blue-500' },
        { name: 'Angular', level: 90, color: 'bg-red-500' },
        { name: 'Vue.js', level: 85, color: 'bg-green-500' },
        { name: 'Next.js', level: 92, color: 'bg-gray-800' },
        { name: 'TypeScript', level: 88, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: FiDatabase,
      description: 'Scalable server-side solutions and APIs',
      technologies: [
        { name: 'Node.js', level: 93, color: 'bg-green-600' },
        { name: 'Python', level: 90, color: 'bg-yellow-500' },
        { name: 'Java', level: 88, color: 'bg-orange-500' },
        { name: '.NET', level: 85, color: 'bg-purple-600' },
        { name: 'PHP', level: 82, color: 'bg-indigo-500' },
        { name: 'Go', level: 80, color: 'bg-blue-400' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      icon: FiSmartphone,
      description: 'Native and cross-platform mobile applications',
      technologies: [
        { name: 'React Native', level: 90, color: 'bg-blue-500' },
        { name: 'Flutter', level: 85, color: 'bg-blue-400' },
        { name: 'iOS (Swift)', level: 88, color: 'bg-gray-700' },
        { name: 'Android (Kotlin)', level: 87, color: 'bg-green-500' },
        { name: 'Xamarin', level: 80, color: 'bg-purple-500' },
        { name: 'Ionic', level: 78, color: 'bg-blue-600' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: FiCloud,
      description: 'Cloud infrastructure and deployment solutions',
      technologies: [
        { name: 'AWS', level: 92, color: 'bg-orange-400' },
        { name: 'Azure', level: 88, color: 'bg-blue-600' },
        { name: 'Google Cloud', level: 85, color: 'bg-red-500' },
        { name: 'Docker', level: 90, color: 'bg-blue-500' },
        { name: 'Kubernetes', level: 87, color: 'bg-blue-700' },
        { name: 'Terraform', level: 83, color: 'bg-purple-600' }
      ]
    },
    data: {
      title: 'Data & AI',
      icon: FiCpu,
      description: 'Data analytics and artificial intelligence solutions',
      technologies: [
        { name: 'Machine Learning', level: 88, color: 'bg-green-500' },
        { name: 'TensorFlow', level: 85, color: 'bg-orange-500' },
        { name: 'PyTorch', level: 82, color: 'bg-red-500' },
        { name: 'Big Data', level: 87, color: 'bg-blue-600' },
        { name: 'Apache Spark', level: 80, color: 'bg-orange-600' },
        { name: 'Data Science', level: 90, color: 'bg-purple-500' }
      ]
    },
    security: {
      title: 'Security & Compliance',
      icon: FiShield,
      description: 'Enterprise-grade security and compliance solutions',
      technologies: [
        { name: 'Cybersecurity', level: 90, color: 'bg-red-600' },
        { name: 'GDPR Compliance', level: 88, color: 'bg-blue-600' },
        { name: 'SOC 2', level: 85, color: 'bg-green-600' },
        { name: 'ISO 27001', level: 87, color: 'bg-purple-600' },
        { name: 'Penetration Testing', level: 83, color: 'bg-orange-600' },
        { name: 'Security Audits', level: 86, color: 'bg-gray-600' }
      ]
    }
  };

  const stats = [
    { number: '500+', label: 'Technologies Mastered', icon: FiCode },
    { number: '25+', label: 'Years of Experience', icon: FiTrendingUp },
    { number: '1000+', label: 'Certified Experts', icon: FiShield },
    { number: '50+', label: 'Technology Partners', icon: FiDatabase }
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
            TECHNOLOGY <span className="text-blue-600">EXPERTISE</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We leverage cutting-edge technologies and proven frameworks to deliver robust, 
            scalable solutions that drive business growth and innovation.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
                variants={itemVariants}
              >
                <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {Object.entries(techCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.title}
                </button>
              );
            })}
          </motion.div>

          {/* Active Category Content */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Category Info */}
              <div>
                <div className="flex items-center mb-6">
                  {React.createElement(techCategories[activeCategory as keyof typeof techCategories].icon, {
                    className: 'w-12 h-12 text-blue-600 mr-4'
                  })}
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">
                      {techCategories[activeCategory as keyof typeof techCategories].title}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {techCategories[activeCategory as keyof typeof techCategories].description}
                    </p>
                  </div>
                </div>
                
                <div className="prose prose-lg text-gray-700">
                  <p>
                    Our expert team has deep knowledge and hands-on experience with the latest technologies 
                    in this domain. We stay current with industry trends and best practices to deliver 
                    cutting-edge solutions.
                  </p>
                </div>
              </div>

              {/* Technology Skills */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Core Technologies</h4>
                <div className="space-y-4">
                  {techCategories[activeCategory as keyof typeof techCategories].technologies.map((tech) => (
                    <div key={tech.name} className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">{tech.name}</span>
                        <span className="text-sm text-gray-600">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${tech.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
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
              Ready to Leverage Our Technology Expertise?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s discuss how our technical expertise can help you build innovative solutions 
              that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
                View Our Portfolio
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyExpertise;