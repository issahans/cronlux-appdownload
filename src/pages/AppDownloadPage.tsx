import React, { useEffect, useState } from 'react';

const AppDownloadPage: React.FC = () => {
  const [userAgent, setUserAgent] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  // App store URLs - replace with your actual app store links
  const APP_STORE_URL = 'https://apps.apple.com/us/app/smartlife-smart-living/id1115101477';
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.tuya.smartlife';
  
  // Smart redirect URL that detects device and redirects appropriately
  const SMART_REDIRECT_URL = `${window.location.origin}/smart-redirect`;

  useEffect(() => {
    setUserAgent(navigator.userAgent);
    
    // Generate QR code URL using a QR code API service
    const qrData = encodeURIComponent(SMART_REDIRECT_URL);
    setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`);
  }, []);

  const detectDevice = () => {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) {
      return 'ios';
    } else if (/android/i.test(ua)) {
      return 'android';
    }
    return 'unknown';
  };

  const handleAppStoreClick = () => {
    window.open(APP_STORE_URL, '_blank');
  };

  const handlePlayStoreClick = () => {
    window.open(PLAY_STORE_URL, '_blank');
  };

  const handleSmartRedirect = () => {
    const device = detectDevice();
    if (device === 'ios') {
      window.open(APP_STORE_URL, '_blank');
    } else if (device === 'android') {
      window.open(PLAY_STORE_URL, '_blank');
    } else {
      // For desktop/unknown devices, show both options or default to a landing page
      return;
    }
  };

  const handleUserManualClick = () => {
    window.location.href = '/usermanualpage';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 pt-20">
      {/* Background blur effect similar to reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 opacity-50"></div>
      
      {/* Main card - made smaller */}
      <div className="relative bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm text-center">
        {/* App logo and title */}
        <div className="mb-4">
          <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-2xl shadow-lg flex items-center justify-center p-2">
            <img 
              src="/browser.png" 
              alt="Cronlux Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-1">Cronlux</h1>
          <p className="text-gray-600 text-sm">Get the app</p>
        </div>

        {/* QR Code - made smaller */}
        <div className="mb-6">
          {qrCodeUrl ? (
            <img 
              src={qrCodeUrl} 
              alt="Download QR Code" 
              className="w-32 h-32 mx-auto border border-gray-200 rounded-lg"
            />
          ) : (
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs">Loading...</span>
            </div>
          )}
          <p className="text-gray-600 text-xs mt-3">Scan QR Code to download</p>
        </div>

        {/* Download buttons - made smaller */}
        <div className="space-y-2">
          {/* App Store Button */}
          <button
            onClick={handleAppStoreClick}
            className="w-full bg-black text-white rounded-lg px-4 py-2.5 flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="font-semibold text-sm">App Store</div>
            </div>
          </button>

          {/* Google Play Button */}
          <button
            onClick={handlePlayStoreClick}
            className="w-full bg-black text-white rounded-lg px-4 py-2.5 flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="font-semibold text-sm">Google Play</div>
            </div>
          </button>

          {/* Temporary User Manual Button */}
          <button
            onClick={handleUserManualClick}
            className="w-full bg-blue-600 text-white rounded-lg px-4 py-2.5 flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">View</div>
              <div className="font-semibold text-sm">User Manual</div>
            </div>
          </button>
        </div>

        {/* Footer text */}
        <p className="text-xs text-gray-500 mt-4">
          Available for iOS and Android devices
        </p>
      </div>
    </div>
  );
};

export default AppDownloadPage;