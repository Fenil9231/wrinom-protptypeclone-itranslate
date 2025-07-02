'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { name: 'Services', hasDropdown: true },
    { name: 'Industries', hasDropdown: true },
    { name: 'Case studies', hasDropdown: false },
    { name: 'Insights', hasDropdown: true },
    { name: 'Company', hasDropdown: true }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (itemName: string) => {
    if (navigationItems.find(item => item.name === itemName)?.hasDropdown) {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">i</span>
              </div>
              <span className="text-xl font-bold text-gray-900">itransition</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.hasDropdown ? (
                  <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    {item.name}
                    <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link 
                    href={`/${item.name.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {item.name === 'Services' && (
                      <>
                        <Link href="/services/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Web Development
                        </Link>
                        <Link href="/services/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Mobile Development
                        </Link>
                        <Link href="/services/cloud-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Cloud Services
                        </Link>
                        <Link href="/services/ai-ml" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          AI & Machine Learning
                        </Link>
                      </>
                    )}
                    {item.name === 'Industries' && (
                      <>
                        <Link href="/industries/healthcare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Healthcare
                        </Link>
                        <Link href="/industries/fintech" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          FinTech
                        </Link>
                        <Link href="/industries/ecommerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          E-commerce
                        </Link>
                        <Link href="/industries/education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Education
                        </Link>
                      </>
                    )}
                    {item.name === 'Insights' && (
                      <>
                        <Link href="/insights/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Blog
                        </Link>
                        <Link href="/insights/whitepapers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Whitepapers
                        </Link>
                        <Link href="/insights/research" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Research
                        </Link>
                      </>
                    )}
                    {item.name === 'Company' && (
                      <>
                        <Link href="/company/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          About Us
                        </Link>
                        <Link href="/company/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Careers
                        </Link>
                        <Link href="/company/locations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          Locations
                        </Link>
                      </>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="pl-4 space-y-1"
                        >
                          {item.name === 'Services' && (
                            <>
                              <Link href="/services/web-development" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                Web Development
                              </Link>
                              <Link href="/services/mobile-development" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                Mobile Development
                              </Link>
                              <Link href="/services/cloud-services" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                Cloud Services
                              </Link>
                              <Link href="/services/ai-ml" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                AI & Machine Learning
                              </Link>
                            </>
                          )}
                          {item.name === 'Industries' && (
                            <>
                              <Link href="/industries/healthcare" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                Healthcare
                              </Link>
                              <Link href="/industries/fintech" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                FinTech
                              </Link>
                              <Link href="/industries/ecommerce" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                E-commerce
                              </Link>
                              <Link href="/industries/education" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                Education
                              </Link>
                            </>
                          )}
                          {item.name === 'Insights' && (
                            <>
                              <Link href="/insights/blog" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                Blog
                              </Link>
                              <Link href="/insights/whitepapers" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                Whitepapers
                              </Link>
                              <Link href="/insights/research" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                Research
                              </Link>
                            </>
                          )}
                          {item.name === 'Company' && (
                            <>
                              <Link href="/company/about" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                About Us
                              </Link>
                              <Link href="/company/careers" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                Careers
                              </Link>
                              <Link href="/company/locations" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                Locations
                              </Link>
                            </>
                          )}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={`/${item.name.toLowerCase().replace(' ', '-')}`} 
                      className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;