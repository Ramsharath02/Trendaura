import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Trendaura
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Stay ahead with the latest trends!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}>
              Subscribe Now
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Fashion', 'Technology', 'Business', 'Lifestyle'].map((category, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">{category}</h3>
                <p className="text-gray-500 text-sm">Latest {category.toLowerCase()} updates</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;