'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiTrendingUp, FiDollarSign, FiClock, FiTarget } from 'react-icons/fi';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      industry: 'Fashion Retail',
      client: 'Global Fashion Retailer',
      title: 'AI-Powered E-commerce Transformation',
      description: 'AI solutions for a global fashion retailer, including a predictive BI platform, a real-time recommendation engine, and a computer vision product recognition system, bring 8% higher conversions and cut infrastructure costs down by 50%.',
      image: '/api/placeholder/600/400',
      results: [
        { icon: FiTrendingUp, metric: '8%', label: 'Higher Conversions' },
        { icon: FiDollarSign, metric: '50%', label: 'Cost Reduction' },
        { icon: FiTarget, metric: '3x', label: 'Better Targeting' }
      ],
      technologies: ['AI/ML', 'Computer Vision', 'Predictive Analytics', 'Real-time Processing'],
      href: '/case-studies/fashion-retailer'
    },
    {
      id: 2,
      industry: 'Media & Publishing',
      client: 'The Economist',
      title: 'DevOps Infrastructure Optimization',
      description: "Itransition's DevOps team fixed performance of The Economist's microsites and went on to oversee their cloud environment setup, maintenance & optimization, saving the publisher $50K annually on infrastructure management only.",
      image: '/api/placeholder/600/400',
      results: [
        { icon: FiDollarSign, metric: '$50K', label: 'Annual Savings' },
        { icon: FiClock, metric: '40%', label: 'Faster Deployment' },
        { icon: FiTrendingUp, metric: '99.9%', label: 'Uptime Achieved' }
      ],
      technologies: ['DevOps', 'Cloud Infrastructure', 'Performance Optimization', 'Monitoring'],
      href: '/case-studies/the-economist'
    },
    {
      id: 3,
      industry: 'Healthcare',
      client: 'Healthcare Provider',
      title: 'Digital Health Platform',
      description: 'Comprehensive digital health platform enabling remote patient monitoring, telemedicine consultations, and AI-driven diagnostics, improving patient outcomes by 35% while reducing operational costs.',
      image: '/api/placeholder/600/400',
      results: [
        { icon: FiTrendingUp, metric: '35%', label: 'Better Outcomes' },
        { icon: FiDollarSign, metric: '25%', label: 'Cost Savings' },
        { icon: FiTarget, metric: '90%', label: 'Patient Satisfaction' }
      ],
      technologies: ['Telemedicine', 'AI Diagnostics', 'IoT Integration', 'HIPAA Compliance'],
      href: '/case-studies/healthcare-platform'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we&apos;ve helped leading companies transform their businesses 
            with innovative software solutions and measurable results.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.client}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900">{study.title}</h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={result.label} className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <IconComponent className="w-5 h-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{result.metric}</div>
                        <div className="text-sm text-gray-600">{result.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={study.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group"
                >
                  Read full case study
                  <FiArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-10 rounded-xl overflow-hidden bg-gray-200">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-xl">{study.id}</span>
                        </div>
                        <p className="text-gray-600 font-medium">{study.client}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-slate-400 rounded-full opacity-20"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-white rounded-2xl p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to create your success story?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their business with our expertise. 
            Let&apos;s discuss your project and create measurable results together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start your project
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              View all case studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;