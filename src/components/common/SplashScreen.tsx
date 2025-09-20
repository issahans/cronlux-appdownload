import React from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 500);
      }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          delay: 0.2
        }}
      >
        {/* Cronlux Logo */}
        <motion.div
          className="mb-4"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            delay: 0.5
          }}
        >
          <img 
            src="/Black logo.png" 
            alt="Cronlux Logo" 
            className="w-64 md:w-80 lg:w-96 h-auto mx-auto"
          />
        </motion.div>
        
        <motion.div
          className="w-24 h-0.5 bg-black mx-auto mt-2"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeInOut",
            delay: 1.2
          }}
        />
        
        <motion.p
          className="text-lg tracking-wide text-gray-600 mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 1.5
          }}
        >
          Reimagine Smart Living
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;