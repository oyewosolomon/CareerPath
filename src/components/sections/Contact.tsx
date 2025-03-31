import React, { useState, FormEvent } from 'react';
import { Calendar, Clock, Mail, MessageSquare, Users, Award, Shield } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Ready to Transform Your Career?
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our career specialists to unlock your professional potential
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Connect With Us
              </h3>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 bg-orange-100 rounded-lg p-3 text-[#ff8e5a]">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Expert Guidance</h4>
                    <p className="mt-1 text-gray-600">
                      Get personalized advice from career coaches with 10+ years of industry experience
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 bg-orange-100 rounded-lg p-3 text-[#ff8e5a]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Proven Results</h4>
                    <p className="mt-1 text-gray-600">
                      95% of users report career advancement within 6 months of using our platform
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 bg-orange-100 rounded-lg p-3 text-[#ff8e5a]">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Trusted Platform</h4>
                    <p className="mt-1 text-gray-600">
                      Join 1M+ professionals who trust us with their career development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-100 rounded-2xl p-8 text-gray-600">
              <h3 className="text-2xl font-bold mb-6">Get Instant Help</h3>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" />
                <div>
                  <p className="font-medium">Email our support team</p>
                  <p className="text-gray-600">support@careerpathai.com</p>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Typical response time: <span className="font-semibold">under 2 hours</span>
              </p>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-6 text-gray-600">
              <h3 className="text-2xl font-bold">Schedule Your Consultation</h3>
              <p className="mt-2 text-gray-600">Complete the form and we'll get back to you within 24 hours</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 block w-full p-2 rounded-lg border-gray-300 shadow-sm focus:border-[#ff8e5a] focus:ring-[#ff8e5a]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full p-2 rounded-lg border-gray-300 shadow-sm focus:border-[#ff8e5a] focus:ring-[#ff8e5a]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Phone (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="mt-1 block w-full p-2 rounded-lg border-gray-300 shadow-sm focus:border-[#ff8e5a] focus:ring-[#ff8e5a]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Career Goals
                </label>
                <div className="mt-1 relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-[#ff8e5a] focus:ring-[#ff8e5a]"
                    placeholder="Tell us about your career aspirations and challenges..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ff8e5a] to-[#ff6e3a] text-white px-6 py-4 rounded-lg hover:from-[#ff6e3a] hover:to-[#ff8e5a] transition-all duration-300 font-semibold"
              >
                Schedule Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;