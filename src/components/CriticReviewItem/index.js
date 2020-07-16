import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';
import styles from './CriticReviewItem.scss';

const CriticReviewItem = ({ bio, date, name, desc, number }) => {
  const primaryText = desc.slice(0, 191);
  const [readMore, setReadMore] = useState(false);

  return (
    <div className={styles.movie__reviews_icon}>
      <div className={styles.title}>
        <div>
          <Button>{number}</Button>
          <div className={styles.nameTitle}>
            <p>{name}</p>
            <p>{bio}</p>
          </div>
        </div>
        <p className={styles.dataTitle}>{date}</p>
      </div>
      <p
        className={classNames(styles.content, {
          [styles.contentScroll]: readMore,
        })}
      >
        {`${primaryText} ${readMore ? desc.slice(191, desc.length) : ''}`}
        {!readMore && <span className={styles.fade} />}
        <Button
          onClick={() => setReadMore(!readMore)}
          className={classNames(styles.more, {
            [styles.moreActive]: readMore,
          })}
        >
          {readMore ? 'скрывать' : 'eще'}
        </Button>
      </p>
    </div>
  );
};

CriticReviewItem.propTypes = {
  bio: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default CriticReviewItem;
