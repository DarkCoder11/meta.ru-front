import React from 'react';
import PropTypes from 'prop-types';

import Link from '../NextLink';
import styles from './Breadcrumbs.scss';

const BreadcrumbsItem = ({ url, title, active }) =>
  !active ? (
    <Link to={url} className={styles.link}>
      {title}
    </Link>
  ) : (
    <div className={`${styles.link} ${styles.active_link}`}>{title}</div>
  );

BreadcrumbsItem.defaultProps = {
  url: '',
  active: false,
};

BreadcrumbsItem.propTypes = {
  url: PropTypes.string,
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default BreadcrumbsItem;
