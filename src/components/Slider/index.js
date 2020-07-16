import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';

import styles from './Slider.scss';
import ButtonGroup from './ButtonsGroup';
import { constants, useWindowSize } from '../../utils';

const Slider = ({
  children,
  itemClassName,
  desktopCount,
  isButtonGroup,
  carouselClasses,
  infiniteMode,
  customResponsive,
  partialVisibilityGutter,
  ...props
}) => {
  const size = useWindowSize();
  const isMobile = size.width < 576;

  const responsive = customResponsive || {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 769,
      },
      items: children.length <= 3 ? children.length : desktopCount,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: {
        max: 768,
        min: 451,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 450,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: partialVisibilityGutter || 93,
    },
  };

  return (
    <div className={styles.slider}>
      <Carousel
        swipeable
        arrows={false}
        showDots={false}
        infinite={isMobile}
        slidesToSlide={1}
        draggable={isMobile}
        centerMode={false}
        focusOnSelect={false}
        keyBoardControl={false}
        minimumTouchDrag={10}
        additionalTransfrom={0}
        renderButtonGroupOutside
        responsive={responsive}
        partialVisible={isMobile}
        itemClass={itemClassName}
        className={carouselClasses}
        ssr={constants.isServer}
        customButtonGroup={
          isButtonGroup && children.length > 3 ? (
            <ButtonGroup slides={children} {...props} />
          ) : null
        }
      >
        {children}
      </Carousel>
    </div>
  );
};

Slider.defaultProps = {
  itemClassName: '',
  desktopCount: 3,
  isButtonGroup: true,
  customResponsive: null,
  infiniteMode: true,
  carouselClasses: '',
  partialVisibilityGutter: 0,
};

Slider.propTypes = {
  isButtonGroup: PropTypes.bool,
  desktopCount: PropTypes.number,
  itemClassName: PropTypes.string,
  customResponsive: PropTypes.any,
  infiniteMode: PropTypes.bool,
  carouselClasses: PropTypes.string,
  children: PropTypes.any.isRequired,
  partialVisibilityGutter: PropTypes.number,
};

export default Slider;
