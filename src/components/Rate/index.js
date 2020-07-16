import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Rate.scss';

const Rate = ({ rate, className }) => (
  <div className={classNames(styles.container, { [className]: className })}>
    {rate}
  </div>
);

Rate.defaultProps = {
  className: undefined,
};

Rate.propTypes = {
  className: PropTypes.string,
  rate: PropTypes.any.isRequired,
};

export default Rate;
