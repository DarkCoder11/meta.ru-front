import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CinemaLogo.scss';
import NextImage from '../NextImage';

const CinemaLogo = ({ children, className, logo, alt }) => (
  <div className={classNames(styles.container, { [className]: className })}>
    <NextImage src={logo} alt={alt} />
    {children}
  </div>
);

CinemaLogo.defaultProps = {
  alt: '',
  logo: '',
  children: [],
  className: undefined,
};

CinemaLogo.propTypes = {
  alt: PropTypes.string,
  logo: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default CinemaLogo;
