import React from 'react';

import Button from '../Button';
import Image from '../NextImage';
import styles from './ReviewsDates.scss';

const ReviewsDates = () => (
  <div className={styles.dates}>
    <div className={styles.datesBtnBlock}>
      <Button className={styles.datesBtn}>День</Button>
      <Button className="dates__btn dates__btn__active">Неделя</Button>
      <Button className={styles.datesBtn}>Месяц</Button>
      <Button className={styles.datesBtn}>Год</Button>
    </div>
    <Button className={styles.calendar__btn}>
      <Image src="/img/calendar.svg" alt="calendar" />
    </Button>
  </div>
);

export default ReviewsDates;
