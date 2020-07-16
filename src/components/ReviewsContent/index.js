import React from 'react';
import PropTypes from 'prop-types';
import ReviewsContentItem from './ReviewsContentItem';

const ReviewsContent = ({ reviews }) => {
  const renderReviews = () =>
    reviews.map((reviewsItem) => (
      <ReviewsContentItem key={reviewsItem.id} {...reviewsItem} />
    ));
  return <div>{renderReviews()}</div>;
};

ReviewsContent.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsContent;
