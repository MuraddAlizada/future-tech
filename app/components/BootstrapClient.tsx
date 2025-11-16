'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if Bootstrap is already loaded
      if ((window as any).bootstrap) {
        return;
      }

      // Load Bootstrap JS dynamically
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js';
      script.crossOrigin = 'anonymous';
      script.async = false; // Load synchronously to ensure it's available
      
      script.onload = () => {
        // Bootstrap is now available
        console.log('Bootstrap loaded');
      };

      document.body.appendChild(script);

      return () => {
        // Cleanup
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return null;
}

