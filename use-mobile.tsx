import { useState, useEffect } from 'react';

// Custom hook to detect mobile screens
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Function to check if screen width is below the breakpoint
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [breakpoint]);

  return isMobile;
}

// Custom hook to get current screen size category
export function useScreenSize(): 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' {
  const [screenSize, setScreenSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>('md');

  useEffect(() => {
    // Function to determine screen size category
    const checkScreenSize = () => {
      const width = window.innerWidth;
      
      if (width < 480) {
        setScreenSize('xs');
      } else if (width < 640) {
        setScreenSize('sm');
      } else if (width < 768) {
        setScreenSize('md');
      } else if (width < 1024) {
        setScreenSize('lg');
      } else if (width < 1280) {
        setScreenSize('xl');
      } else {
        setScreenSize('2xl');
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return screenSize;
}