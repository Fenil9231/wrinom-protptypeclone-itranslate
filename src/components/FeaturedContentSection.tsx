'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FeaturedContentSection = () => {
  const contentItems = [
    {
      type: 'Service',
      title: 'Data migration services',
      description: 'Itransition offers turnkey data migration services to help companies safely and securely transfer their data between different environments or storage systems.',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'Service',
      link: '/services/data-migration'
    },
    {
      type: 'Case study',
      title: 'Dedicated team for investment portfolio management ecosystem',
      description: 'Learn how we developed a suite of investment portfolio management tools and custom algorithms now used by thousands of investors.',
      image: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M20,80 L80,20 L80,80 Z\' fill=\'%23ffffff15\'/%3E%3Cpath d=\'M20,60 L60,20 L60,60 Z\' fill=\'%23ffffff10\'/%3E%3C/svg%3E")',
      category: 'Case study',
      link: '/case-studies/investment-portfolio'
    },
    {
      type: 'Case study',
      title: 'A shoppable video platform for AiBUY',
      description: 'Find out how Itransition\'s dedicated team helped AiBUY release their innovative machine learning-driven shoppable video platform.',
      image: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      category: 'Case study',
      link: '/case-studies/aibuy-platform'
    },
    {
      type: 'Case study',
      title: 'A furniture manufacturing software suite',
      description: 'Read the story behind Itransition\'s 5-year collaboration with a leading UK furniture manufacturer on web, mobile and VR solutions.',
      image: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Crect x=\'20\' y=\'30\' width=\'60\' height=\'40\' fill=\'%23333333\'/%3E%3Ccircle cx=\'30\' cy=\'50\' r=\'5\' fill=\'%23666666\'/%3E%3C/svg%3E")',
      category: 'Case study',
      link: '/case-studies/furniture-manufacturing'
    },
    {
      type: 'Insights',
      title: 'Data storytelling: an end-to-end concept overview with examples',
      description: 'Explore comprehensive guide to data storytelling techniques and best practices for effective data visualization and communication.',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M20,80 L40,60 L60,70 L80,50\' stroke=\'%23ffffff40\' stroke-width=\'2\' fill=\'none\'/%3E%3Ccircle cx=\'40\' cy=\'60\' r=\'3\' fill=\'%23ffffff60\'/%3E%3C/svg%3E")',
      category: 'Insights',
      link: '/insights/data-storytelling'
    },
    {
      type: 'Service',
      title: 'Software development',
      description: 'Custom software development services tailored to your business needs with cutting-edge technologies and best practices.',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'Service',
      link: '/services/software-development'
    }
  ];

  const getGridClass = (index: number) => {
    // Create a masonry-like layout
    switch (index) {
      case 0: return 'col-span-1 row-span-1';
      case 1: return 'col-span-2 row-span-1';
      case 2: return 'col-span-1 row-span-1';
      case 3: return 'col-span-1 row-span-1';
      case 4: return 'col-span-2 row-span-1';
      case 5: return 'col-span-1 row-span-1';
      default: return 'col-span-1 row-span-1';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Service': return 'bg-blue-600';
      case 'Case study': return 'bg-gray-800';
      case 'Insights': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {contentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${getGridClass(index)} group cursor-pointer`}
            >
              <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Background Image/Gradient */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: item.image,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* Category Badge */}
                  <div className="flex justify-start mb-4">
                    <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Content Body */}
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-6 flex items-center text-blue-300 hover:text-blue-200 transition-colors">
                    <span className="text-sm font-medium mr-2">Read more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContentSection;