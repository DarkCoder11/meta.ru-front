import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompoundSlider.scss';

const Track = ({ source, target, getTrackProps }) => (
  <div
    className={styles.track}
    style={{
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
    }}
    {
      ...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */
    }
  />
);

Track.propTypes = {
  source: PropTypes.object.isRequired,
  target: PropTypes.object.isRequired,
  getTrackProps: PropTypes.func.isRequired,
};

export default Track;
