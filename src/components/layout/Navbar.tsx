import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  Lightbulb, 
  Shield, 
  Smartphone,
  ChevronDown,
  ShoppingCart,
  User,
  FileText,
  Phone,
  Download,
  HelpCircle,
  Building,
  Eye,
  Leaf,
  Users
} from 'lucide-react';
import { useCart } from '../../context/CartContext';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      name: 'Smart Home Essentials',
      description: 'Devices that help automate and secure basic home functions.',
      icon: Home,
      products: ['Smart Camera Pro', 'Smart Door Lock Elite', 'Smart Plug Pro', 'Smart Switch Pro']
    },
    {
      name: 'Energy & Lighting',
      description: 'For control and automation of power and light.',
      icon: Lightbulb,
      products: ['Smart Plug Pro', 'Smart Switch Pro']
    },
    {
      name: 'Home Security',
      description: 'Focused on surveillance and safe entry access.',
      icon: Shield,
      products: ['Smart Camera Pro', 'Smart Door Lock Elite']
    },
    {
      name: 'App-Controlled Devices',
      description: 'All devices that can be controlled remotely via CRONLUX App.',
      icon: Smartphone,
      products: ['Smart Plug Pro', 'Smart Switch Pro', 'Smart Door Lock Elite', 'Smart Camera Pro']
    }
  ];

  const supportItems = [
    { name: 'Setup Guide', href: '/support/setup', icon: FileText },
    { name: 'FAQs', href: '/support/faqs', icon: HelpCircle },
    { name: 'Downloads', href: '/support/downloads', icon: Download },
    { name: 'Contact Support', href: '/support/contact', icon: Phone },
  ];

  const aboutItems = [
    { name: 'Company', href: '/about/company', icon: Building },
    { name: 'Vision', href: '/about/vision', icon: Eye },
    { name: 'Sustainability', href: '/about/sustainability', icon: Leaf },
    { name: 'Careers', href: '/about/careers', icon: Users },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.img
                src="/Black logo.png"
                alt="Cronlux"
                className="h-8 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-black hover:text-gray-600 font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowProducts(true)}
                onMouseLeave={() => setShowProducts(false)}
              >
                <button className="flex items-center text-black hover:text-gray-600 font-medium transition-colors">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <AnimatePresence>
                  {showProducts && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/20 p-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                          <motion.div
                            key={category.name}
                            className="mb-4 last:mb-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50/50 transition-colors cursor-pointer">
                              <IconComponent className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-black text-sm">{category.name}</h4>
                                <p className="text-gray-600 text-xs mt-1">{category.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Support Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowSupport(true)}
                onMouseLeave={() => setShowSupport(false)}
              >
                <button className="flex items-center text-black hover:text-gray-600 font-medium transition-colors">
                  Support
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <AnimatePresence>
                  {showSupport && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/20 p-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {supportItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={item.href}
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
                            >
                              <IconComponent className="h-4 w-4 text-black" />
                              <span className="text-black font-medium text-sm">{item.name}</span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowAbout(true)}
                onMouseLeave={() => setShowAbout(false)}
              >
                <button className="flex items-center text-black hover:text-gray-600 font-medium transition-colors">
                  About Cronlux
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <AnimatePresence>
                  {showAbout && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/20 p-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {aboutItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={item.href}
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
                            >
                              <IconComponent className="h-4 w-4 text-black" />
                              <span className="text-black font-medium text-sm">{item.name}</span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/blog" 
                className="text-black hover:text-gray-600 font-medium transition-colors"
              >
                Blog
              </Link>
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <button
                onClick={() => navigate('/cart')}
                className="relative p-2 text-black hover:text-gray-600 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {state.itemCount}
                  </motion.span>
                )}
              </button>

              {/* Login */}
              <Link
                to="/login"
                className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-black hover:text-gray-600 transition-colors"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/20 p-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-4">
                <Link to="/" className="block text-black font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link to="/explore" className="block text-black font-medium" onClick={() => setIsOpen(false)}>
                  Products
                </Link>
                <Link to="/support" className="block text-black font-medium" onClick={() => setIsOpen(false)}>
                  Support
                </Link>
                <Link to="/about" className="block text-black font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link to="/blog" className="block text-black font-medium" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
                <Link to="/cart" className="block text-black font-medium" onClick={() => setIsOpen(false)}>
                  Cart ({state.itemCount})
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;