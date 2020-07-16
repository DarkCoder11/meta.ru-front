import React from 'react';
import PropTypes from 'prop-types';

import styles from './Plans.scss';
import { helpers } from '../../utils';

const PlansItem = ({ payment_option: option, price }) => (
  <div className={styles.btn}>
    {`${option}:`}
    <span className={styles.price}>
      <span>{helpers.isNumber(price) ? price : `${price[0]}-${price[1]}`}</span>
      <span className={styles.currency}>₽</span>
    </span>
  </div>
);

PlansItem.propTypes = {
  price: PropTypes.any.isRequired,
  payment_option: PropTypes.string.isRequired,
};

export default PlansItem;
