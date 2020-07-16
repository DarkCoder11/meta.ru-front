import React from 'react';
import PropTypes from 'prop-types';

import styles from './Chips.scss';
import NextImage from '../NextImage';

const ChipsItem = ({ image, name }) => (
  <div className={styles.btn}>
    {/**
      ***<<< Commented for future, waiting for question mark logic >>>***

      <span className={styles.question__mark}>?</span> */}
    <NextImage className={styles.icon} src={image} alt="chip" />
    <span className={styles.btnTitle}>{name}</span>
  </div>
);

ChipsItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ChipsItem;
