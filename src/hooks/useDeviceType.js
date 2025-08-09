import { useState, useEffect } from 'react';

function useDeviceType() {
  const [device, setDevice] = useState({ isMobile: false, isTablet: false });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setDevice({
        isMobile: width <= 600,
        isTablet: width > 600 && width <= 1024,
      });
    }
    handleResize(); // Set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
}

export default useDeviceType;