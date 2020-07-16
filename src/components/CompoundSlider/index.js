import React from 'react';
import PropTypes from 'prop-types';
import { Handles, Rail, Slider, Ticks, Tracks } from 'react-compound-slider';

import Tick from './Tick';
import Track from './Track';
import Handle from './Handle';
import { noop } from '../../utils';
import styles from './CompoundSlider.scss';

const CompoundSlider = ({ sliderStyle, onChange, ...rest }) => (
  <Slider
    mode={2}
    step={1}
    onChange={onChange}
    domain={[1911, 2020]}
    rootStyle={sliderStyle}
    {...rest}
  >
    <Rail>
      {({ getRailProps }) => (
        <div className={styles.rail} {...getRailProps()} />
      )}
    </Rail>
    <Handles>
      {({ handles, getHandleProps }) => (
        <div className="slider-handles">
          {handles.map((handle) => (
            <Handle
              key={handle.id}
              handle={handle}
              getHandleProps={getHandleProps}
            />
          ))}
        </div>
      )}
    </Handles>
    <Tracks left={false} right={false}>
      {({ tracks, getTrackProps }) => (
        <div className="slider-tracks">
          {tracks.map(({ id, source, target }) => (
            <Track
              key={id}
              source={source}
              target={target}
              getTrackProps={getTrackProps}
            />
          ))}
        </div>
      )}
    </Tracks>
    <Ticks values={[2020, 2000, 1980, 1960, 1940, 1920, 1911]}>
      {({ ticks }) => (
        <div className="slider-ticks">
          {ticks.map((tick) => (
            <Tick key={tick.id} tick={tick} count={ticks.length} />
          ))}
        </div>
      )}
    </Ticks>
  </Slider>
);

CompoundSlider.defaultProps = {
  sliderStyle: {},
  onChange: noop,
};

CompoundSlider.propTypes = {
  sliderStyle: PropTypes.object,
  onChange: PropTypes.func,
};

export default CompoundSlider;
