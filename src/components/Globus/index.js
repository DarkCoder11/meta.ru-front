import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Globus.scss';
import BlankLink from '../BlankLink';
import NextImage from '../NextImage';

const Globus = (props) => (
  <BlankLink
    {...props}
    className={classNames(styles.container, {
      [props.className]: props.className,
    })}
  >
    <NextImage src="/img/globus.svg" alt="url" />
  </BlankLink>
);

Globus.defaultProps = {
  className: '',
};

Globus.propTypes = {
  className: PropTypes.string,
};

export default Globus;
