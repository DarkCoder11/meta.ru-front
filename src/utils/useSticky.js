import { useEffect, useRef, useState } from 'react';

const useSticky = (top) => {
  const stickyRef = useRef(null);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const eventsToBind = [
      [document, 'scroll'],
      [window, 'resize'],
      [window, 'orientationchange'],
    ];

    const observe = () => {
      const refPageOffset = stickyRef.current.getBoundingClientRect().top;
      const stickyOffset = top;
      const stickyActive = refPageOffset <= stickyOffset;

      if (stickyActive && !sticky) setSticky(true);
      else if (!stickyActive && sticky) setSticky(false);
    };
    observe();

    eventsToBind.forEach((eventPair) => {
      eventPair[0].addEventListener(eventPair[1], observe);
    });

    return () => {
      eventsToBind.forEach((eventPair) => {
        eventPair[0].removeEventListener(eventPair[1], observe);
      });
    };
  }, [stickyRef, sticky]);

  return [stickyRef, sticky];
};

export default useSticky;
