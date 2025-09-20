import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold tracking-wider mb-4">CRONLUX</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Reimagining smart living through innovative, premium home automation solutions.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/press" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/warranty" className="hover:text-white transition-colors">Warranty</a></li>
              <li><a href="/returns" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="/shipping" className="hover:text-white transition-colors">Shipping</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 text-gray-400 text-sm">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Mail className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400 text-sm">support@cronlux.com</span>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2025 CRONLUX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;