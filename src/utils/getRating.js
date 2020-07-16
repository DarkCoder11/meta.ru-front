import { sum } from 'lodash';

export const GetCustomRating = (ratings = []) => {
  const existedRatings = ratings.filter((r) => !!r && r.score);
  return ratings.length
    ? Math.round(
        sum(existedRatings.map((rating) => rating.score * 10)) /
          existedRatings.length -
          2,
      )
    : '-';
};

export const GetRating = (array) => {
  if (array.length === 0) {
    return ['-', '-', '-', '-'];
  }
  const kinopoisk = array.filter(
    (item) => item.rating_source.name === 'kinopoisk',
  )[0].score;
  if (!kinopoisk) {
    return ['-', '-', '-', '-'];
  }
  const imdb = '-';
  const metakritika = '-';
  // getCustom rating function
  const customRating = GetCustomRating(array);

  // helper function
  const floor = (num) => {
    if (typeof num === 'number') {
      return Math.floor(num * 10) / 10;
    }
    return '-';
  };
  return [floor(metakritika), floor(imdb), floor(kinopoisk), customRating];
};
