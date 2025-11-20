import React, { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AtomicBackground: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Add CSS animations to the document head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes atomicFloat {
        0% {
          transform: translateY(0px) translateX(0px);
        }
        25% {
          transform: translateY(-30px) translateX(15px);
        }
        50% {
          transform: translateY(-20px) translateX(-25px);
        }
        75% {
          transform: translateY(-40px) translateX(10px);
        }
        100% {
          transform: translateY(0px) translateX(0px);
        }
      }
      
      @keyframes atomicPulse {
        0%, 100% {
          opacity: 0.2;
        }
        50% {
          opacity: 0.6;
        }
      }
      
      @keyframes atomicGlow {
        0%, 100% {
          opacity: 0.3;
          transform: scale(1);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.2);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0">
        {/* Atomic particles */}
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              theme === 'dark' 
                ? 'bg-white' 
                : 'bg-black'
            }`}
            style={{
              width: Math.random() * 6 + 3 + 'px',
              height: Math.random() * 6 + 3 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `atomicGlow ${Math.random() * 2 + 1}s infinite ease-in-out`,
              animationDelay: Math.random() * 2 + 's',
              opacity: theme === 'dark' ? 0.4 : 0.2,
            }}
          />
        ))}
        
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`floating-${i}`}
            className={`absolute rounded-full ${
              theme === 'dark' 
                ? 'bg-white' 
                : 'bg-black'
            }`}
            style={{
              width: Math.random() * 8 + 4 + 'px',
              height: Math.random() * 8 + 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `atomicFloat ${Math.random() * 4 + 3}s infinite linear`,
              animationDelay: Math.random() * 2 + 's',
              opacity: theme === 'dark' ? 0.5 : 0.25,
            }}
          />
        ))}
        
        {/* Connecting lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`line-${i}`}
            className={`absolute ${
              theme === 'dark' 
                ? 'bg-white' 
                : 'bg-black'
            }`}
            style={{
              width: Math.random() * 300 + 100 + 'px',
              height: '2px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `atomicPulse ${Math.random() * 2 + 1}s infinite ease-in-out`,
              animationDelay: Math.random() * 2 + 's',
              opacity: theme === 'dark' ? 0.3 : 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AtomicBackground;
