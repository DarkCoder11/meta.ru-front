import React from 'react';
import PropTypes from 'prop-types';

import { BlankLink, Image } from '..';
import styles from './AuthoritativeInfo.scss';

const AuthoritativeInfoItem = ({ rating, source }) => (
  <BlankLink url={source.url} className={styles.sliderItem}>
    <span className={styles.sliderCount}>{rating}</span>
    <Image src={source.image} alt="source" />
  </BlankLink>
);

AuthoritativeInfoItem.propTypes = {
  rating: PropTypes.number.isRequired,
  source: PropTypes.object.isRequired,
};

export default AuthoritativeInfoItem;
