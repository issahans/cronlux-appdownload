import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Shield, Smartphone, Zap, Eye, Lock } from 'lucide-react';

const TechHighlights: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Seamless Connectivity',
      description: 'Advanced WiFi 6 and Bluetooth 5.0 for reliable, lightning-fast connections.'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'End-to-end encryption and military-grade security protocols protect your privacy.'
    },
    {
      icon: Smartphone,
      title: 'Universal App Control',
      description: 'Control all your CRONLUX devices from one intuitive mobile application.'
    },
    {
      icon: Zap,
      title: 'Energy Intelligent',
      description: 'Smart power management reduces energy consumption by up to 40%.'
    },
    {
      icon: Eye,
      title: 'AI-Powered Vision',
      description: 'Advanced computer vision recognizes patterns and adapts to your lifestyle.'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Local processing ensures your data stays private and secure in your home.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Technology That
            <br />
            <span className="text-gray-600">Just Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every CRONLUX device is engineered with cutting-edge technology 
            and thoughtful design to integrate seamlessly into your daily life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 group-hover:bg-white/70">
                  <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black/10 transition-colors">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-black mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechHighlights;