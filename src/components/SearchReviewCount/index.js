import React from 'react';
import PropTypes from 'prop-types';

import BlankLink from '../BlankLink';
import styles from './SearchReviewCount.scss';

const SearchReviewCount = ({ url, children, ...rest }) => (
  <BlankLink
    isRouterLink
    url={url}
    className={`${styles.container} reviews__wrap`}
    {...rest}
  >
    <div>{children}</div>
  </BlankLink>
);

SearchReviewCount.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default SearchReviewCount;
