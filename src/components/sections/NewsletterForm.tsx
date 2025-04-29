import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const NewsletterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '' });
    }, 3000);
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600">
              Get weekly updates on the latest trends in fashion, tech, business, and lifestyle 
              delivered straight to your inbox.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mb-4 text-green-500">
                  <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You for Subscribing!</h3>
                <p className="text-gray-600">
                  We've added you to our newsletter. Get ready to receive the latest trends in your inbox!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Your Name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="flex justify-center pt-2">
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                  We'll never share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;