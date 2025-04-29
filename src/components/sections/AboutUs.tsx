import React from 'react';
import { Bell, Zap, TrendingUp, BookOpen } from 'lucide-react';

const AboutUs: React.FC = () => {
  const features = [
    {
      icon: <Bell className="h-6 w-6 text-blue-500" />,
      title: 'Weekly Updates',
      description: 'Get the latest trends delivered to your inbox every week.',
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: 'Curated Content',
      description: 'Our experts curate only the most relevant and impactful trends.',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      title: 'Stay Ahead',
      description: 'Be the first to know about emerging trends before they go mainstream.',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      title: 'In-depth Analysis',
      description: 'Understand not just what is trending, but why it matters.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Trendaura</h2>
          <p className="text-xl text-gray-600">
            Trendaura delivers the latest fashion, tech, business, and lifestyle trends straight to your inbox every week.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              At Trendaura, we believe that staying informed about current trends is essential in today's fast-paced world. 
              Our mission is to curate and deliver the most relevant trends across various industries, helping our 
              subscribers stay ahead of the curve.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us</h3>
            <p className="text-gray-600">
              Our team of experts scours the globe for emerging trends, filtering out the noise to bring you only what truly 
              matters. We don't just report trends—we analyze them, providing context and insights that you won't find 
              elsewhere.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border border-gray-100 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;