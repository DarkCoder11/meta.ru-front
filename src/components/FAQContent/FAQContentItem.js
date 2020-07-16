import React from 'react';
import PropTypes from 'prop-types';

import Link from '../NextLink';
import styles from './FAQContent.scss';

const FAQContentItem = ({ route, text }) => (
  <Link className={styles.link} to={route}>
    {text}
  </Link>
);

FAQContentItem.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default FAQContentItem;
