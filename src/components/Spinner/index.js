import React from 'react';

import styles from './Spinner.scss';
import SpinnerSVG from '../../../public/img/spinner.svg';

const Spinner = () => (
  <div className={styles.container}>
    <SpinnerSVG />
  </div>
);

export default Spinner;
