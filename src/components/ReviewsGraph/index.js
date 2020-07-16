import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Image from '../NextImage';
import styles from './ReviewsGraph.scss';

const ReviewsGraph = ({ count }) => (
  <div>
    <h4 className={styles.title}>Всего</h4>
    <div className={styles.titleRow}>
      <h3 className={styles.count}>
        {count} {'   '}
        <span>Отзывов</span>
      </h3>
      <div className={styles.dateRow}>
        <span className={styles.date}>23—30 сен.</span>
        <span className={styles.date}>2019 г.</span>
        <Button className={styles.reviewsCalendarMobile}>
          <Image src="/img/calendar.svg" alt="calendar" />
        </Button>
      </div>
    </div>
    <div className={styles.reviewsGraph}>
      <div className="positive" />
      <div className="negative" />
      <div className="neutral" />
      <div className="spam" />
    </div>
    <div className={styles.feedback}>
      <div className={` ${styles.feedbackItem} positive`}>
        <span />
        Положительные
      </div>
      <div className={`${styles.feedbackItem} negative`}>
        <span />
        Отрицательные
      </div>
      <div className={`${styles.feedbackItem} neutral`}>
        <span />
        Нейтральные
      </div>
      <div className={`${styles.feedbackItem} spam`}>
        <span />
        Спам
      </div>
    </div>
  </div>
);

ReviewsGraph.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ReviewsGraph;
