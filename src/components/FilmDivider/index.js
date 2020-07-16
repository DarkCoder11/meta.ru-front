import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FilmDivider.scss';

const FilmDivider = ({ className }) => (
  <div
    className={classNames(styles.divider, {
      [className]: className,
    })}
  />
);

FilmDivider.defaultProps = {
  className: '',
};

FilmDivider.propTypes = {
  className: PropTypes.string,
};

export default FilmDivider;
