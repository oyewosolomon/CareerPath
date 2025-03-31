import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/favicon.svg" className='h-8 w-8' alt="CareerPath" />
            <span className="text-2xl font-bold text-[#ff8e5a]">CareerPath AI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  Solutions
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute -left-4 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-lg py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">Skill Assessment</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">Learning Paths</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">Job Matching</a>
                </div>
              </div>
              <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Enterprise</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Sign in</button>
              <button className="bg-[#ff8e5a] text-white px-4 py-2 rounded-md hover:bg-[#e67f4f] transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md">Solutions</a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md">Pricing</a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md">Resources</a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md">Enterprise</a>
          <div className="pt-4 space-y-2">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md">Sign in</a>
            <a href="#" className="block px-3 py-2 text-white bg-[#ff8e5a] hover:bg-[#e67f4f] rounded-md">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;