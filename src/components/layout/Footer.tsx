'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiGithub } from 'react-icons/fi';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Application services', href: '/services/application-services' },
        { name: 'Technology advisory', href: '/services/technology-advisory' },
        { name: 'Digital enterprise', href: '/services/digital-enterprise' },
        { name: 'Data analytics', href: '/services/data-analytics' },
        { name: 'Intelligent automation', href: '/services/intelligent-automation' },
        { name: 'Managed IT services', href: '/services/managed-it-services' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Banking and finance', href: '/industries/banking-finance' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Logistics and transportation', href: '/industries/logistics-transportation' },
        { name: 'Telecommunications', href: '/industries/telecommunications' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About us', href: '/about' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Careers', href: '/careers' },
        { name: 'News', href: '/news' },
        { name: 'Awards', href: '/awards' },
        { name: 'Contact us', href: '/contacts' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case studies', href: '/case-studies' },
        { name: 'Insights', href: '/insights' },
        { name: 'White papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Events', href: '/events' },
        { name: 'Blog', href: '/blog' }
      ]
    }
  ];

  const offices = [
    {
      city: 'Denver',
      address: '1515 Wynkoop Street, Suite 300',
      phone: '+1 (720) 408-7760',
      email: 'info@itransition.com'
    },
    {
      city: 'London',
      address: '1 Ropemaker Street, EC2Y 9HT',
      phone: '+44 20 3808 9555',
      email: 'info@itransition.com'
    },
    {
      city: 'Minsk',
      address: 'Nezavisimosti Avenue 58A',
      phone: '+375 17 336 1600',
      email: 'info@itransition.com'
    }
  ];

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://linkedin.com/company/itransition', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/itransition', label: 'Twitter' },
    { icon: FiFacebook, href: 'https://facebook.com/itransition', label: 'Facebook' },
    { icon: FiGithub, href: 'https://github.com/itransition', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="text-2xl font-bold text-white">
                Itransition
              </Link>
              <p className="mt-4 text-gray-300 leading-relaxed">
                A global software engineering company making success stories for over 25 years. 
                We deliver innovative solutions that drive business transformation.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info@itransition.com" className="text-gray-300 hover:text-white transition-colors">
                  info@itransition.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-blue-400" />
                <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">Our Global Offices</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div key={office.city} className="text-center space-y-3">
                <h4 className="text-lg font-semibold text-white">{office.city}</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <FiMapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <FiPhone className="w-4 h-4 text-blue-400" />
                    <a href={`tel:${office.phone}`} className="text-sm hover:text-white transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <FiMail className="w-4 h-4 text-blue-400" />
                    <a href={`mailto:${office.email}`} className="text-sm hover:text-white transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Itransition. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;