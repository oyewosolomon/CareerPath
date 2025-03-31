import React from 'react';
import { ArrowRight, Users, Building, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient - changed to orange-50 */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50" />
      
      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="block">Your Career Journey,</span>
            <span className="block text-[#ff8e5a]">Powered by AI</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Join over 1 million professionals who have transformed their careers through personalized learning paths, skill assessments, and AI-powered job matching.
          </p>
          
          <div className="mt-10 flex gap-4 justify-center">
            <button className="rounded-md bg-[#ff8e5a] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#e67f4f] focus:outline-none focus:ring-2 focus:ring-[#ff8e5a] focus:ring-offset-2 transition-all duration-200 flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="rounded-md bg-white px-6 py-3 text-base font-semibold text-[#ff8e5a] shadow-sm ring-1 ring-inset ring-orange-200 hover:bg-gray-50 transition-all duration-200">
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm ring-1 ring-gray-200">
              <Users className="w-8 h-8 text-[#ff8e5a] mb-2" />
              <span className="text-2xl font-bold text-gray-900">1M+</span>
              <span className="text-gray-600">Active Users</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm ring-1 ring-gray-200">
              <Building className="w-8 h-8 text-[#ff8e5a] mb-2" />
              <span className="text-2xl font-bold text-gray-900">500+</span>
              <span className="text-gray-600">Partner Companies</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm ring-1 ring-gray-200">
              <BookOpen className="w-8 h-8 text-[#ff8e5a] mb-2" />
              <span className="text-2xl font-bold text-gray-900">1000+</span>
              <span className="text-gray-600">Learning Paths</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;