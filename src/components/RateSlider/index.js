import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

import { useWindowSize } from '../../utils';

const RateSlider = ({ rateChange }) => {
  const { isMobile } = useWindowSize();
  const [activeMarkIMG, setActiveMarkIMG] = useState('/img/neutral.svg');
  const sliderCircleSize = isMobile ? 34 : 40;
  const sliderNestedImgSize = isMobile ? 22 : 26;

  const rateChangeHandler = (val) => {
    const activeVal = val / 10;
    let activeIMG = '/img/neutral.svg';

    if (activeVal > 3 && activeVal < 7) {
      activeIMG = '/img/neutral.svg';
    } else if (activeVal > 5) {
      activeIMG = '/img/plusSmile.svg';
    } else {
      activeIMG = '/img/minusSmile.svg';
    }

    setActiveMarkIMG(activeIMG);
    rateChange(activeVal);
  };

  return (
    <div className="rate_slider">
      <Slider
        min={0}
        defaultValue={50}
        marks={{
          0: 0,
          10: 1,
          20: 2,
          30: 3,
          40: 4,
          50: 5,
          60: 6,
          70: 7,
          80: 8,
          90: 9,
          100: 10,
        }}
        step={null}
        dots={false}
        included={false}
        railStyle={{
          height: 10,
          backgroundImage:
            'linear-gradient(to left, #39af61, #f5a623, #eb001b)',
        }}
        handleStyle={{
          top: '-10px',
          marginTop: 0,
          border: 'none',
          width: sliderCircleSize,
          height: sliderCircleSize,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${activeMarkIMG})`,
          boxShadow: '0 0 10px -5px rgba(0, 0, 0, 0.5)',
          backgroundSize: `${sliderNestedImgSize}px ${sliderNestedImgSize}px`,
        }}
        className="rate__slider"
        onChange={rateChangeHandler}
      />
    </div>
  );
};

RateSlider.propTypes = {
  rateChange: PropTypes.func.isRequired,
};

export default RateSlider;
