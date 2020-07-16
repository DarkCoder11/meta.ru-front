import React from 'react';
import PropTypes from 'prop-types';

import styles from './Tag.scss';
import BlankLink from '../BlankLink';

const Tag = ({ children, id }) => (
  <BlankLink
    isRouterLink
    as={`/articles-tag/${id}`}
    url="/articles-tag/[tagId]"
    className={styles.container}
  >
    {children}
  </BlankLink>
);

Tag.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Tag;
