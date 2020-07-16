import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';
import styles from './ReviewsCount.scss';

const ReviewsCount = (props) => {
  const {
    countClasses,
    setShownReviewsStatus,
    page,
    pageSize,
    neutral_amount: neutralAmount,
    negative_amount: negativeAmount,
    positive_amount: positiveAmount,
  } = props;

  const statusChangeHandler = (status) => {
    setShownReviewsStatus(status, page, pageSize);
  };

  return (
    <div
      className={classNames(styles.block, {
        [countClasses]: countClasses,
      })}
    >
      <Button
        onClick={() =>
          statusChangeHandler({ isPositive: 1, isNeutral: 0, isNegative: 0 })
        }
        className={`${styles.btn} ${styles.positive}`}
      >
        Положительные (<span>{positiveAmount}</span>)
      </Button>
      <Button
        onClick={() =>
          statusChangeHandler({ isPositive: 0, isNeutral: 1, isNegative: 0 })
        }
        className={`${styles.btn} ${styles.neutral}`}
      >
        Нейтральные (<span>{neutralAmount}</span>)
      </Button>
      <Button
        onClick={() =>
          statusChangeHandler({ isPositive: 0, isNeutral: 0, isNegative: 1 })
        }
        className={`${styles.btn} ${styles.negative}`}
      >
        Негативные (<span>{negativeAmount}</span>)
      </Button>
    </div>
  );
};

ReviewsCount.defaultProps = {
  page: 1,
  pageSize: 3,
  countClasses: '',
  neutral_amount: 0,
  negative_amount: 0,
  positive_amount: 0,
};

ReviewsCount.propTypes = {
  page: PropTypes.number,
  pageSize: PropTypes.number,
  countClasses: PropTypes.string,
  neutral_amount: PropTypes.number,
  negative_amount: PropTypes.number,
  positive_amount: PropTypes.number,
  setShownReviewsStatus: PropTypes.func.isRequired,
};

export default ReviewsCount;
