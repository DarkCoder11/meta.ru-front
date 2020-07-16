import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';
import Image from '../NextImage';
import { noop } from '../../utils';
import styles from './Slider.scss';

const ButtonGroup = ({
  next,
  slides,
  previous,
  leftArrowClassName,
  rightArrowClassName,
  carouselState: { currentSlide },
}) => {
  const isShowNext = slides.length - 3 === currentSlide;

  return (
    <>
      {currentSlide !== 0 && (
        <Button
          onClick={previous}
          className={classNames(styles.arrow, styles.arrowLeft, {
            [leftArrowClassName]: leftArrowClassName,
          })}
        >
          <Image src="/img/leftArrow.svg" alt="previous" />
        </Button>
      )}
      {!isShowNext && (
        <Button
          onClick={next}
          className={classNames(styles.arrow, styles.arrowRight, {
            [rightArrowClassName]: rightArrowClassName,
          })}
        >
          <Image src="/img/rightArrow.svg" alt="next" />
        </Button>
      )}
    </>
  );
};

ButtonGroup.defaultProps = {
  next: noop,
  previous: noop,
  carouselState: {},
  rightArrowClassName: '',
  leftArrowClassName: '',
};

ButtonGroup.propTypes = {
  next: PropTypes.func,
  previous: PropTypes.func,
  carouselState: PropTypes.object,
  slides: PropTypes.array.isRequired,
  rightArrowClassName: PropTypes.string,
  leftArrowClassName: PropTypes.string,
};

export default ButtonGroup;
