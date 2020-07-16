import { useEffect } from 'react';
import scrollToComponent from './scrollToComponent';

const useScrollToComponent = (
  offset = 0,
  random,
  activeRef,
  overviewRef,
  appRef,
  infoRef,
  reviewsRef,
  align = 'top',
) => {
  useEffect(() => {
    if (activeRef) {
      switch (activeRef) {
        case 'overviewRef':
          scrollToComponent(overviewRef, 'top', offset);
          break;
        case 'appRef':
          scrollToComponent(
            { current: document.querySelectorAll('.info__table__parent')[1] },
            'bottom',
            offset,
          );
          break;
        case 'infoRef':
          scrollToComponent(infoRef, align, offset);
          break;
        // case 'newsRef':
        //   scrollToComponent(newsRef, align, offset);
        //   break;
        case 'reviewsRef':
          scrollToComponent(reviewsRef, align, offset);
          break;

        default:
          scrollToComponent(overviewRef, align, offset);
          break;
      }
    }
  }, [activeRef, random]);
};

export default useScrollToComponent;
