import React from 'react';
import { Bell, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Bell className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Trendaura
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Stay ahead with the latest trends in fashion, tech, business, and lifestyle.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#newsletter" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Newsletter Categories</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Fashion Trends</li>
              <li className="text-gray-600 text-sm">Tech Updates</li>
              <li className="text-gray-600 text-sm">Business Insights</li>
              <li className="text-gray-600 text-sm">Lifestyle Guides</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Trendaura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;