import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { Image } from '..';
import styles from './ReviewsContent.scss';
import { getNameInitials } from '../../utils';

const ReviewsContentItem = ({
  author,
  content,
  positive,
  negative,
  source,
  publication_datetime: date,
}) => {
  const dateHM = moment(date).format('HH:MM');
  const dateDMY = moment(date).format('DD.MM.YYYY');

  return (
    <div className={styles.item}>
      <div className={styles.titleBlock}>
        <div className={styles.titleItem}>
          <div className={styles.avatar}>{getNameInitials(author)}</div>
          <div className={styles.author}>
            <span className={styles.authorName}>{author}</span>
            <span className={styles.authorPosition}>{source.name}</span>
          </div>
        </div>
        <div className={styles.titleItem}>
          <div className={styles.date}>
            <span className={styles.dateHour}>{dateHM}</span>
            <span>{dateDMY}</span>
          </div>
        </div>
      </div>
      {!positive && !negative ? (
        <div className={styles.sign}>
          <p className={styles.text}>{content}</p>
        </div>
      ) : (
        <>
          {positive && (
            <div className={styles.sign}>
              <span className={styles.signIcon}>
                <Image src="/img/plus.svg" alt="positive" />
              </span>
              <p className={styles.text}>{positive}</p>
            </div>
          )}
          {negative && (
            <div className={styles.sign}>
              <span className={styles.signIcon}>
                <Image src="/img/minus.svg" alt="negative" />
              </span>
              <p className={styles.text}>{negative}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

ReviewsContentItem.defaultProps = {
  author: '',
  content: '',
  positive: '',
  negative: '',
  source: {},
};

ReviewsContentItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  positive: PropTypes.string,
  negative: PropTypes.string,
  source: PropTypes.object,
  publication_datetime: PropTypes.string.isRequired,
};

export default ReviewsContentItem;
