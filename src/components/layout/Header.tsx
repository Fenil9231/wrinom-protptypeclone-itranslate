'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiGlobe } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'IT consulting', href: '/services/it-consulting' },
        { name: 'Software engineering', href: '/software-development' },
        { name: 'Application services', href: '/services/application' },
        { name: 'Managed IT services', href: '/services/managed-it' },
        { name: 'DevOps', href: '/services/devops' },
        { name: 'Quality assurance & testing', href: '/services/qa-testing' },
        { name: 'Maintenance & Support', href: '/services/maintenance-support' },
        { name: 'Smart teams', href: '/developers' },
      ]
    },
    {
      name: 'Industries',
      href: '/industries',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Healthcare', href: '/healthcare' },
        { name: 'Retail', href: '/retail' },
        { name: 'Finance', href: '/finance' },
        { name: 'Insurance', href: '/insurance' },
        { name: 'Software & hi-tech', href: '/hi-tech' },
        { name: 'Automotive', href: '/automotive' },
        { name: 'Telecommunications', href: '/telecom' },
      ]
    },
    { name: 'Case studies', href: '/portfolio' },
    { name: 'Insights', href: '/blog' },
    {
      name: 'Company',
      href: '/company/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Overview', href: '/company/about' },
        { name: 'Approach', href: '/company/approach' },
        { name: 'Awards', href: '/company/awards' },
        { name: 'Partnership', href: '/company/partnership' },
        { name: 'Careers', href: '/careers' },
        { name: 'News', href: '/company/news' },
      ]
    },
    { name: 'Contact us', href: '/contacts' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                <FiGlobe className="w-4 h-4" />
                <span>EN</span>
                <FiChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              Itransition
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <FiChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  >
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contacts"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contacts"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;