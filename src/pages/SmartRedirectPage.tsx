import React, { useEffect } from 'react';

const SmartRedirectPage: React.FC = () => {
  useEffect(() => {
    const detectAndRedirect = () => {
      const ua = navigator.userAgent;
      const APP_STORE_URL = 'https://apps.apple.com/app/cronlux/id123456789';
      const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.cronlux.app';
      
      if (/iPad|iPhone|iPod/.test(ua)) {
        window.location.href = APP_STORE_URL;
      } else if (/android/i.test(ua)) {
        window.location.href = PLAY_STORE_URL;
      } else {
        // Redirect to main download page for desktop users
        window.location.href = '/app-download';
      }
    };

    // Small delay to ensure proper detection
    setTimeout(detectAndRedirect, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to the appropriate app store...</p>
      </div>
    </div>
  );
};

export default SmartRedirectPage;