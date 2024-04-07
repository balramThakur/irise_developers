// LoadingBar.js
import React, { useState, useEffect } from 'react';
import '../CSS/LoadingBar.css'; // Import the CSS file for styling

const LoadingBar = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setIsLoading(true);
    const endLoading = () => setIsLoading(false);

    // Listen for route changes
    window.addEventListener('beforeunload', startLoading);
    window.addEventListener('unload', endLoading);

    return () => {
      window.removeEventListener('beforeunload', startLoading);
      window.removeEventListener('unload', endLoading);
    };
  }, []);

  return isLoading ? <div className="loading-bar"></div> : null;
};

export default LoadingBar;
