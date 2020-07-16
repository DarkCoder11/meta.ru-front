import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import RatingsContentItem from './RatingsContentItem';

const RatingsContent = ({
  children,
  isShowCount,
  logoClasses,
  isShowReviews,
  ratingsCards,
  isFirstRating,
  firstItemClasses,
  isFirstReviewCount,
}) => {
  const renderRatingCards = () =>
    ratingsCards.map((ratingsCardsItem) => (
      <RatingsContentItem
        {...ratingsCardsItem}
        isShowCount={isShowCount}
        logoClasses={logoClasses}
        key={shortid.generate()}
        isFirstRating={isFirstRating}
        isShowReviews={isShowReviews}
        firstItemClasses={firstItemClasses}
        isFirstReviewCount={isFirstReviewCount}
      />
    ));

  return (
    <>
      {renderRatingCards()}
      {children}
    </>
  );
};

RatingsContent.defaultProps = {
  children: [],
  logoClasses: '',
  firstItemClasses: '',
  isShowCount: true,
  isShowReviews: true,
  isFirstRating: false,
  isFirstReviewCount: false,
};

RatingsContent.propTypes = {
  children: PropTypes.any,
  logoClasses: PropTypes.string,
  firstItemClasses: PropTypes.string,
  isShowCount: PropTypes.bool,
  isFirstRating: PropTypes.bool,
  isShowReviews: PropTypes.bool,
  isFirstReviewCount: PropTypes.bool,
  ratingsCards: PropTypes.array.isRequired,
};

export default RatingsContent;
