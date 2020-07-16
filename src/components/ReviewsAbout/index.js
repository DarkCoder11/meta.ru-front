import React from 'react';
import Image from '../NextImage';
import styles from './ReviewsAbout.scss';

const ReviewsAbout = () => (
  <div className={styles.about__comment}>
    <div className={styles.commentTitleRow}>
      <span className={styles.commentName}>Леон</span>
      <div className={styles.commentDate}>
        <span className={styles.commentDateHour}>14:00</span>
        <span>05.02.2019</span>
      </div>
    </div>
    <h2 className={styles.commentTitle}>
      <Image src="/img/green__arrow.svg" alt="up-arrow" /> Наблюдается всплеск
      положительных отзывов:
    </h2>
    <p className={styles.commentText}>
      Metaratings охарактеризовывает его как органический. Спамерских действий
      не наблюдается. Букмекер по мнению игроков начал предлагать большой выбор
      ставок, а также лайв трансляции.
    </p>
  </div>
);

export default ReviewsAbout;
