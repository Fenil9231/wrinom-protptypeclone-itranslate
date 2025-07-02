'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiUsers, FiAward, FiTrendingUp, FiMapPin, FiCalendar, FiStar, FiTarget } from 'react-icons/fi';

const CompanyOverview: React.FC = () => {
  const stats = [
    {
      number: '3000+',
      label: 'Engineers',
      icon: FiUsers,
      description: 'Skilled software engineers and IT professionals'
    },
    {
      number: '25+',
      label: 'Years of Excellence',
      icon: FiCalendar,
      description: 'Proven track record since 1999'
    },
    {
      number: '800+',
      label: 'Clients',
      icon: FiTarget,
      description: 'Successful partnerships worldwide'
    },
    {
      number: '40+',
      label: 'Countries',
      icon: FiGlobe,
      description: 'Global reach and local expertise'
    }
  ];

  const offices = [
    {
      city: 'Minsk',
      country: 'Belarus',
      type: 'Headquarters',
      employees: '1500+',
      established: '1999'
    },
    {
      city: 'Denver',
      country: 'USA',
      type: 'Regional Office',
      employees: '200+',
      established: '2008'
    },
    {
      city: 'London',
      country: 'UK',
      type: 'European Hub',
      employees: '150+',
      established: '2012'
    }
  ];

  const achievements = [
    {
      title: 'ISO 27001 Certified',
      description: 'Information security management system certification',
      icon: FiAward,
      year: '2020'
    },
    {
      title: 'Microsoft Gold Partner',
      description: 'Highest level of Microsoft partnership',
      icon: FiStar,
      year: '2019'
    },
    {
      title: 'AWS Advanced Partner',
      description: 'Advanced tier Amazon Web Services partner',
      icon: FiTrendingUp,
      year: '2021'
    },
    {
      title: 'GDPR Compliant',
      description: 'Full compliance with European data protection regulations',
      icon: FiAward,
      year: '2018'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.',
      icon: '🚀'
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in every project, ensuring robust, scalable, and maintainable solutions.',
      icon: '⭐'
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, becoming their trusted technology partner.',
      icon: '🤝'
    },
    {
      title: 'Expertise',
      description: 'Our team consists of highly skilled professionals with deep domain knowledge and technical expertise.',
      icon: '🎯'
    }
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
            ABOUT <span className="text-blue-600">ITRANSITION</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Since 1999, Itransition has been a trusted software development partner for businesses worldwide. 
            We are a global software engineering company delivering innovative solutions that drive business transformation 
            and create lasting value for our clients across industries.
          </motion.p>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
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
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-bold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global Presence */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              GLOBAL <span className="text-blue-600">PRESENCE</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With offices across multiple continents, we provide 24/7 support and local expertise to our global clientele.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <motion.div
                key={`${office.city}-${office.country}`}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <FiMapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{office.city}</h4>
                    <p className="text-gray-600">{office.country}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold text-gray-900">{office.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Team Size:</span>
                    <span className="font-semibold text-gray-900">{office.employees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Established:</span>
                    <span className="font-semibold text-gray-900">{office.established}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              OUR <span className="text-blue-600">VALUES</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The core principles that guide our work and define our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements & Certifications */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              ACHIEVEMENTS & <span className="text-blue-600">CERTIFICATIONS</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition of our commitment to excellence, security, and industry best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border border-blue-100"
                  variants={itemVariants}
                >
                  <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {achievement.year}
                  </span>
                </motion.div>
              );
            })}
          </div>
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
              Ready to Start Your Digital Transformation?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of companies that trust Itransition to deliver innovative software solutions 
              that drive business growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyOverview;