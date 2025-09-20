import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronRight,
  Smartphone, 
  Wifi, 
  Home as HomeIcon, 
  HelpCircle,
  Download,
  QrCode,
  AlertCircle,
  CheckCircle2,
  Play,
  RotateCcw,
  Moon,
  Sun
} from 'lucide-react';
import './UserManualPage.css';

const UserManualPage: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const [openSection, setOpenSection] = useState<string | null>('getting-started');
  const [darkMode, setDarkMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const product = {
    name: 'Smart Plug',
    model: 'CRONLUX-SP01',
    image: '/plug 1.webp'
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      subtitle: 'Everything you need to begin',
      icon: Play,
      totalSteps: 3,
      content: (
        <div className="manual-content">
          {/* What's in the Box */}
          <div className="content-card highlight-card">
            <div className="card-header">
              <CheckCircle2 className="icon-accent" />
              <h4>What's in the Box</h4>
            </div>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-dot"></span>
                <span>1× CRONLUX Smart Plug</span>
              </div>
              <div className="feature-item">
                <span className="feature-dot"></span>
                <span>Quick Start Guide</span>
              </div>
              <div className="feature-item">
                <span className="feature-dot"></span>
                <span>Warranty Information</span>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="content-card info-card">
            <div className="card-header">
              <AlertCircle className="icon-info" />
              <h4>System Requirements</h4>
            </div>
            <div className="requirements-grid">
              <div className="requirement-item">
                <Wifi className="req-icon" />
                <div>
                  <strong>Wi-Fi Network</strong>
                  <p>2.4 GHz only</p>
                </div>
              </div>
              <div className="requirement-item">
                <Smartphone className="req-icon" />
                <div>
                  <strong>Mobile Device</strong>
                  <p>iOS 12+ or Android 8+</p>
                </div>
              </div>
              <div className="requirement-item">
                <HomeIcon className="req-icon" />
                <div>
                  <strong>Smart Home</strong>
                  <p>Alexa, Google Home compatible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'app-setup',
      title: 'App Setup',
      subtitle: 'Download and configure Smart Life',
      icon: Smartphone,
      totalSteps: 4,
      content: (
        <div className="manual-content">
          {/* QR Code Download Section */}
          <div className="download-hero">
            <div className="download-content">
              <h3>Download Smart Life App</h3>
              <p className="download-subtitle">
                Scan the QR code or tap the buttons below to get started
              </p>
              
              <div className="qr-container">
                <div className="qr-code-wrapper">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store/apps/details?id=com.tuya.smartlife" 
                    alt="Download QR Code" 
                    className="qr-code"
                  />
                </div>
              </div>

              <div className="download-buttons">
                <a
                  href="https://apps.apple.com/us/app/smartlife-smart-living/id1115101477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn app-store"
                >
                  <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <span className="store-text">Download on the</span>
                    <span className="store-name">App Store</span>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.tuya.smartlife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn google-play"
                >
                  <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div>
                    <span className="store-text">Get it on</span>
                    <span className="store-name">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Setup Steps */}
          <div className="setup-steps">
            {[
              {
                step: 1,
                title: "Download the App",
                description: "Use the QR code above or visit your device's app store"
              },
              {
                step: 2,
                title: "Create Your Account",
                description: "Sign up with your email address and verify your account"
              },
              {
                step: 3,
                title: "Set Up Profile", 
                description: "Complete your profile and set your location preferences"
              },
              {
                step: 4,
                title: "You're Ready",
                description: "Your Smart Life app is configured and ready to add devices"
              }
            ].map((item) => (
              <div key={item.step} className="step-card">
                <div className="step-indicator">
                  <span className="step-number">{item.step}</span>
                </div>
                <div className="step-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'wifi-setup',
      title: 'Wi-Fi Connection',
      subtitle: 'Connect your device to the network',
      icon: Wifi,
      totalSteps: 5,
      content: (
        <div className="manual-content">
          {/* Connection Modes */}
          <div className="modes-section">
            <h3>Choose Your Connection Method</h3>
            <div className="connection-modes">
              <div className="mode-card recommended">
                <div className="mode-header">
                  <h4>Quick Mode</h4>
                  <span className="badge recommended-badge">Recommended</span>
                </div>
                <p>Fastest setup for most users. Works with standard home routers.</p>
              </div>
              <div className="mode-card">
                <div className="mode-header">
                  <h4>AP Mode</h4>
                  <span className="badge alternative-badge">Alternative</span>
                </div>
                <p>Use when Quick Mode doesn't work with your specific router setup.</p>
              </div>
            </div>
          </div>

          {/* Setup Process */}
          <div className="setup-process">
            <h3>Quick Mode Setup Process</h3>
            <div className="process-steps">
              {[
                {
                  step: 1,
                  title: "Prepare Your Device",
                  description: "Ensure the indicator light blinks slowly. If blinking rapidly, press and hold the power button for 5 seconds.",
                  indicator: "Slow blinking"
                },
                {
                  step: 2,
                  title: "Open Smart Life App",
                  description: "Tap the '+' icon in the top-right corner and select 'Add Device' from the menu.",
                  indicator: "App ready"
                },
                {
                  step: 3,
                  title: "Select Device Type",
                  description: "Choose 'Smart Plug' from the device categories and follow the setup wizard.",
                  indicator: "Device selected"
                },
                {
                  step: 4,
                  title: "Connect to Wi-Fi",
                  description: "Enter your Wi-Fi password and wait for the connection to establish.",
                  indicator: "Connecting..."
                },
                {
                  step: 5,
                  title: "Setup Complete",
                  description: "The indicator light turns solid and your device appears in the app.",
                  indicator: "Connected"
                }
              ].map((item) => (
                <div key={item.step} className="process-step">
                  <div className="step-indicator">
                    <span className="step-number">{item.step}</span>
                  </div>
                  <div className="step-details">
                    <div className="step-header">
                      <h4>{item.title}</h4>
                      <span className="step-status">{item.indicator}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'smart-home',
      title: 'Smart Home Integration',
      subtitle: 'Connect with Alexa and Google Home',
      icon: HomeIcon,
      totalSteps: 6,
      content: (
        <div className="manual-content">
          <div className="integration-grid">
            {/* Alexa Integration */}
            <div className="integration-card">
              <div className="integration-header">
                <div className="integration-icon alexa">
                  <Smartphone />
                </div>
                <h3>Amazon Alexa</h3>
              </div>
              <div className="integration-steps">
                <div className="mini-step">
                  <span className="mini-number">1</span>
                  <p>Ensure your Smart Plug appears in Smart Life app device list</p>
                </div>
                <div className="mini-step">
                  <span className="mini-number">2</span>
                  <p>Rename device for easy voice recognition (e.g., "Living Room Light")</p>
                </div>
                <div className="mini-step">
                  <span className="mini-number">3</span>
                  <p>Open Alexa app and navigate to Skills & Games</p>
                </div>
                <div className="mini-step">
                  <span className="mini-number">4</span>
                  <p>Search for "Smart Life" and enable the skill</p>
                </div>
                <div className="mini-step">
                  <span className="mini-number">5</span>
                  <p>Link your Smart Life account when prompted</p>
                </div>
                <div className="mini-step">
                  <span className="mini-number">6</span>
                  <p>Discover devices and start using voice commands</p>
                </div>
              </div>
            </div>

            {/* Google Home Integration */}
            <div className="integration-card">
              <div className="integration-header">
                <div className="integration-icon google">
                  <HomeIcon />
                </div>
                <h3>Google Home</h3>
              </div>
              <div className="integration-steps">
                <div className="mini-step">
                  <span className="mini-number">1</span>
                  <p>Verify Google Home speaker is properly linked</p>
                </div>
                <div className="mini-step">
                  <span className="mini-number">2</span>
                  <p>Create a Home in the Google Home app if needed</p>
                </div>
                <div className="mini-step">
                  <span className="mini-number">3</span>
                  <p>Tap '+' → Set up device → Works with Google</p>
                </div>
                <div className="mini-step">
                  <span className="mini-number">4</span>
                  <p>Find and select "Smart Life" from the list</p>
                </div>
                <div className="mini-step">
                  <span className="mini-number">5</span>
                  <p>Sign in to link your Smart Life account</p>
                </div>
                <div className="mini-step">
                  <span className="mini-number">6</span>
                  <p>Say "Hey Google, turn on [device name]" to test</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'troubleshooting',
      title: 'Help & Support',
      subtitle: 'Common questions and solutions',
      icon: HelpCircle,
      totalSteps: 5,
      content: (
        <div className="manual-content">
          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>What devices work with the Smart Plug?</h4>
                <p>Control lights, fans, portable heaters, and small appliances within the plug's power specifications.</p>
              </div>
              
              <div className="faq-item">
                <h4>Why can't I turn my Smart Plug on or off?</h4>
                <div className="faq-list">
                  <p>• Verify both devices are on the same Wi-Fi network</p>
                  <p>• Check that connected appliances are powered on</p>
                  <p>• Ensure stable internet connection</p>
                </div>
              </div>

              <div className="faq-item">
                <h4>Setup failed. What should I try?</h4>
                <div className="faq-list">
                  <p>• Confirm Smart Plug is plugged in and powered</p>
                  <p>• Connect to 2.4GHz Wi-Fi network only</p>
                  <p>• Move closer to your router during setup</p>
                  <p>• Restart your router if needed</p>
                </div>
              </div>

              <div className="faq-item">
                <h4>Can I control it away from home?</h4>
                <p>Yes! After initial setup on your home Wi-Fi, you can control your Smart Plug remotely using cellular data.</p>
              </div>

              <div className="faq-item">
                <h4>How do I share with family members?</h4>
                <p>In Smart Life app: Profile → Device Sharing → Add Sharing. Enter family member's email to grant access.</p>
              </div>
            </div>
          </div>

          {/* Reset Instructions */}
          <div className="reset-section">
            <div className="reset-card">
              <div className="reset-header">
                <RotateCcw className="reset-icon" />
                <h3>Factory Reset</h3>
              </div>
              <div className="reset-content">
                <p className="reset-instruction">
                  Press and hold the power button for <strong>6 seconds</strong> until the indicator light blinks rapidly.
                </p>
                
                <div className="indicator-guide">
                  <h4>Light Pattern Guide</h4>
                  <div className="indicator-list">
                    <div className="indicator-item">
                      <span className="indicator-light rapid"></span>
                      <div>
                        <strong>Rapid blinking</strong>
                        <p>Quick mode setup ready</p>
                      </div>
                    </div>
                    <div className="indicator-item">
                      <span className="indicator-light slow"></span>
                      <div>
                        <strong>Slow blinking</strong>
                        <p>AP mode setup ready</p>
                      </div>
                    </div>
                    <div className="indicator-item">
                      <span className="indicator-light solid"></span>
                      <div>
                        <strong>Solid light</strong>
                        <p>Connected to Wi-Fi</p>
                      </div>
                    </div>
                    <div className="indicator-item">
                      <span className="indicator-light off"></span>
                      <div>
                        <strong>Off</strong>
                        <p>No power or network</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`smart-plug-manual ${darkMode ? 'dark' : ''}`}>
      <div className="manual-container">
        {/* Header */}
        <motion.div
          className="manual-header"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="product-showcase">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h1>{product.name}</h1>
              <p className="product-subtitle">User Manual</p>
              <span className="model-badge">{product.model}</span>
            </div>
          </div>
          
          <p className="manual-description">
            Complete setup guide and troubleshooting for your CRONLUX Smart Plug. 
            Follow these step-by-step instructions to get connected quickly.
          </p>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="quick-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button 
            className="quick-action-btn"
            onClick={() => toggleSection('app-setup')}
          >
            <Download size={18} />
            <span>Get App</span>
          </button>
          <button 
            className="quick-action-btn"
            onClick={() => toggleSection('wifi-setup')}
          >
            <Wifi size={18} />
            <span>Connect Wi-Fi</span>
          </button>
          <button 
            className="quick-action-btn"
            onClick={() => toggleSection('troubleshooting')}
          >
            <HelpCircle size={18} />
            <span>Get Help</span>
          </button>
        </motion.div>

        {/* Manual Sections */}
        <motion.div
          className="manual-sections"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {sections.map((section) => {
            const IconComponent = section.icon;
            const isOpen = openSection === section.id;
            
            return (
              <div key={section.id} className="section-container">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="section-header"
                >
                  <div className="section-info">
                    <div className="section-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="section-details">
                      <h3>{section.title}</h3>
                      <p>{section.subtitle}</p>
                    </div>
                  </div>
                  <div className="section-controls">
                    <span className="step-counter">
                      {section.totalSteps} steps
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight size={20} />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="section-content"
                    >
                      {section.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default UserManualPage;