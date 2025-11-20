import React, { useEffect, useState } from 'react';

const ThemeInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    // Ensure theme is applied immediately
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || 'dark';
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Set theme ready after a brief delay to ensure DOM is updated
    const timer = setTimeout(() => {
      setIsThemeReady(true);
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  // Show a minimal loading state or nothing while theme initializes
  if (!isThemeReady) {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="fixed inset-0 bg-gray-900"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ThemeInitializer;
