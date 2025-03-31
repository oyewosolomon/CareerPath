import React from 'react';
import { ClipboardCheck, BookOpen, Target, Briefcase } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "1. Skill Assessment",
      description: "Take our comprehensive AI-powered assessment to evaluate your current skills and expertise level.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Target,
      title: "2. Set Your Goals",
      description: "Define your career objectives and let our AI create a personalized development strategy.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BookOpen,
      title: "3. Learn & Develop",
      description: "Follow your customized learning path with curated content from industry experts.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Briefcase,
      title: "4. Get Matched",
      description: "Connect with employers looking for your exact skill set through our AI matching system.",
      color: "bg-[#ff8e5a] text-orange-50"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Journey to Success
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Follow our proven four-step process to accelerate your career growth
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200" />
                )}
                <div className="relative flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-center text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ff8e5a] hover:bg-[#e67f4f] transition-colors duration-200">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;