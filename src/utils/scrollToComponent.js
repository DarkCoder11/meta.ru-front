import calculateScrollOffset from './calculateScrollOffset';

const scrollToComponent = (ref, align = 'top', offset) => {
  if (ref && ref.current) {
    window.scrollTo(0, calculateScrollOffset(ref.current, offset, align));
  }
};

export default scrollToComponent;
