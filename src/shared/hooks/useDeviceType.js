import { useState, useEffect } from 'react';

// 모바일 기준
const MOBILE_BREAKPOINT = 820;
// 태블릿 기준
const TABLET_BREAKPOINT = 1200;

const useDeviceType = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT
  );
  const [isTablet, setIsTablet] = useState(
    window.innerWidth < TABLET_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < MOBILE_BREAKPOINT);
      setIsTablet(width < TABLET_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { windowWidth, isMobile, isTablet };
};

export default useDeviceType;
