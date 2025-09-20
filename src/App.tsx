import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

import SplashScreen from './components/common/SplashScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ExplorePage from './pages/ExplorePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import AppDownloadPage from './pages/AppDownloadPage';
import SmartRedirectPage from './pages/SmartRedirectPage';
import CartPage from './pages/CartPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import UserManualPage from './pages/UserManualPage';

import { CartProvider } from './context/CartContext';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => setShowSplash(false);

  return (
    <HelmetProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <AnimatePresence mode="wait">
            {showSplash ? (
              <SplashScreen key="splash" onComplete={handleSplashComplete} />
            ) : (
              <Router key="main">
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow pt-16">
                    <Routes>
                      <Route path="/" element={<AppDownloadPage/>} />
                      <Route path="/explore" element={<ExplorePage />} />
                      <Route path="/product/:slug" element={<ProductPage />} />
                      <Route path="/cart" element={<CartPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/signup" element={<LoginPage />} />
                      <Route path="/app-download" element={<AppDownloadPage />} />
                      <Route path="/smart-redirect" element={<SmartRedirectPage />} />
                      <Route path="/blog" element={<BlogListPage />} />
                      <Route path="/blog/:slug" element={<BlogPostPage />} />
                      
                      {/* User Manual Routes - Multiple variations to catch different button links */}
                      <Route path="/usermanualpage" element={<UserManualPage />} />
                      <Route path="/user-manual" element={<UserManualPage />} />
                      <Route path="/manual" element={<UserManualPage />} />
                      <Route path="/userManual" element={<UserManualPage />} />
                      <Route path="/user_manual" element={<UserManualPage />} />
                      
                      {/* Catch all other routes */}
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </Router>
            )}
          </AnimatePresence>
        </div>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;