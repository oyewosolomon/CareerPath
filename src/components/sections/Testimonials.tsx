import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      content: "CareerPath AI transformed my career trajectory. The personalized learning path helped me transition from marketing to data science in just 8 months.",
      author: "Sarah Chen",
      role: "Data Scientist at Google",
      rating: 5
    },
    {
      content: "The skill assessments were eye-opening. They helped me identify gaps in my knowledge and provided targeted resources to improve.",
      author: "Michael Rodriguez",
      role: "Software Engineer at Microsoft",
      rating: 5
    },
    {
      content: "As a hiring manager, CareerPath AI has been invaluable in finding candidates with the exact skills we need. The AI matching is incredibly accurate.",
      author: "Emily Thompson",
      role: "Technical Recruiter at Amazon",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Partner Logos */}
        <div className="text-center mb-16">
          <h2 className="text-lg font-semibold text-gray-600 mb-8">
            Trusted by leading companies worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">LOGO {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative mt-20 px-4">
          <div className="relative mx-auto max-w-3xl">
            <div className="relative">
              <div className="relative h-80 overflow-hidden">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className={`absolute w-full transition-opacity duration-500 ${
                      idx === currentTestimonial ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 mb-6">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
                <button
                  onClick={() => setCurrentTestimonial(prev => 
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )}
                  className="rounded-full p-2 bg-white shadow-lg hover:bg-gray-50 transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => setCurrentTestimonial(prev => 
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )}
                  className="rounded-full p-2 bg-white shadow-lg hover:bg-gray-50 transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;