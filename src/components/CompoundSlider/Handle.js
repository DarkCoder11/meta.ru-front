import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompoundSlider.scss';

const Handle = ({ handle: { id, value, percent }, getHandleProps }) => (
  <div
    className={styles.handle}
    style={{
      left: `${percent}%`,
    }}
    {...getHandleProps(id)}
  >
    <div className={styles.handleText}>{value}</div>
  </div>
);

Handle.propTypes = {
  handle: PropTypes.object.isRequired,
  getHandleProps: PropTypes.func.isRequired,
};

export default Handle;
