import { useState } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const useWindowSize = () => {
  const getSize = () => ({
    width: undefined,
    height: undefined,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useIsomorphicLayoutEffect(() => {
    const handleResize = () => {
      if (window && window.innerWidth && window.innerHeight) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize, { passive: true });

    return () =>
      window.removeEventListener('resize', handleResize, { passive: true });
  }, []);
  const isMobile = windowSize.width < 577;
  const isTablet = windowSize.width >= 577 && windowSize.width < 768;
  const isLargeTablet = windowSize.width >= 768 && windowSize.width <= 1024;
  const isDesktop = windowSize.width > 1024;

  return { isMobile, isTablet, isLargeTablet, isDesktop };
};

export default useWindowSize;
