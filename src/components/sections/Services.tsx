'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FiCode, 
  FiSmartphone, 
  FiCpu, 
  FiCloud, 
  FiDatabase, 
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiArrowRight
} from 'react-icons/fi';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Application Services',
      description: 'End-to-end application development and modernization solutions',
      services: [
        {
          icon: FiCode,
          name: 'Web Application Development',
          description: 'Custom web applications built with modern frameworks and technologies',
          href: '/services/web-development'
        },
        {
          icon: FiSmartphone,
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications for iOS and Android',
          href: '/services/mobile-development'
        },
        {
          icon: FiSettings,
          name: 'Software Product Development',
          description: 'Full-cycle product development from concept to market launch',
          href: '/services/product-development'
        },
        {
          icon: FiCode,
          name: 'Application Modernization',
          description: 'Legacy system modernization and digital transformation',
          href: '/services/modernization'
        }
      ]
    },
    {
      title: 'Technology Services',
      description: 'Advanced technology solutions for digital transformation',
      services: [
        {
          icon: FiCpu,
          name: 'AI/ML Solutions',
          description: 'Artificial intelligence and machine learning implementations',
          href: '/services/ai-solutions'
        },
        {
          icon: FiDatabase,
          name: 'Data Management & Analytics',
          description: 'Big data processing, analytics, and business intelligence',
          href: '/services/data-management'
        },
        {
          icon: FiCloud,
          name: 'Cloud Services',
          description: 'Cloud migration, architecture, and infrastructure management',
          href: '/services/cloud-services'
        },
        {
          icon: FiSettings,
          name: 'DevOps & Infrastructure',
          description: 'CI/CD pipelines, automation, and infrastructure optimization',
          href: '/services/devops'
        }
      ]
    },
    {
      title: 'Industry Solutions',
      description: 'Specialized solutions tailored to specific industry needs',
      services: [
        {
          icon: FiShoppingCart,
          name: 'E-commerce Development',
          description: 'Scalable e-commerce platforms and marketplace solutions',
          href: '/services/ecommerce'
        },
        {
          icon: FiUsers,
          name: 'CRM Implementation',
          description: 'Customer relationship management system development',
          href: '/services/crm'
        },
        {
          icon: FiSettings,
          name: 'Microsoft Dynamics 365',
          description: 'Implementation and customization of Microsoft business solutions',
          href: '/services/dynamics'
        },
        {
          icon: FiCode,
          name: 'Enterprise Software',
          description: 'Large-scale enterprise application development',
          href: '/services/enterprise'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver comprehensive software engineering services across multiple domains, 
            helping businesses transform and scale with cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Link href={service.href}>
                        <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                            <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            {service.name}
                          </h4>
                          
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {service.description}
                          </p>
                          
                          <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-300">
                            <span>Learn more</span>
                            <FiArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
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
          className="mt-20 text-center bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to start your project?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our expertise can help transform your business with innovative software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get a quote
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              View all services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;