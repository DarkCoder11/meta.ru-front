import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from '../NextLink';
import styles from './BlankLink.scss';

const BlankLink = ({ url, isRouterLink, className, children, ...rest }) =>
  isRouterLink ? (
    <Link
      to={url}
      className={classNames(styles.container, {
        [className]: className,
      })}
      {...rest}
    >
      {children}
    </Link>
  ) : (
    <a
      href={url}
      {...rest}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(styles.container, {
        [className]: className,
      })}
    >
      {children}
    </a>
  );

BlankLink.defaultProps = {
  url: '',
  children: [],
  isRouterLink: false,
  className: undefined,
};

BlankLink.propTypes = {
  url: PropTypes.string,
  isRouterLink: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default BlankLink;
