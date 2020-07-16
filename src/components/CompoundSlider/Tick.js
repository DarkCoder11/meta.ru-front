import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompoundSlider.scss';

const Tick = ({ tick, count }) => (
  <div>
    <div
      className={styles.tick}
      style={{
        left: `${tick.percent}%`,
      }}
    />
    <div
      className={styles.tickText}
      style={{
        marginLeft: `${-(100 / count) / 2}%`,
        width: `${100 / count}%`,
        left: `${tick.percent}%`,
      }}
    >
      {tick.value}
    </div>
  </div>
);

Tick.propTypes = {
  tick: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

export default Tick;
