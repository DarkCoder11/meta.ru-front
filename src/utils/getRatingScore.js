const getRatingScore = (ratings, reviewedName) => {
  const rating = ratings.find(
    (ratingItem) => ratingItem.rating_source.name === reviewedName,
  );

  return rating ? rating.score.toFixed(1) : '-';
};

export default getRatingScore;
