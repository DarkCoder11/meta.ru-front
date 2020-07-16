import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Rate, RatingCard, BlankLink } from 'components/index';
import {
  selectMovieInfo,
  selectMovieTrailers,
} from 'store/selectors/movieSelector';
import {
  getNames,
  getRatingScore,
  editTimeString,
  getDescriptionString,
  GetCustomRating,
} from 'utils/index';

import Play from '../../../../public/img/play-button.svg';
import styles from './FilmTitleInfoContainer.scss';

const FilmTitleInfoContainer = ({ info, trailers }) => {
  const {
    name,
    year,
    genres,
    ratings,
    duration,
    name_en,
    countries,
    age_restriction: restrictedAge,
  } = info;
  const displayGenre = getNames(genres, 'name', 1);
  const displayCountry = getNames(countries, 'name', 1);
  const rate = GetCustomRating(ratings);

  const descriptionDuration = duration ? editTimeString(duration) : null;

  const descriptionString = getDescriptionString(
    name_en,
    year,
    displayCountry,
    restrictedAge,
    descriptionDuration,
    displayGenre,
  );

  return (
    <div className={styles.content}>
      <div className={styles.name}>
        <h1>
          {name}
          <span> ({year})</span>
        </h1>
        {!!trailers.length && (
          <BlankLink className={styles.trailer} url={trailers[0]}>
            <Play />
            Смотреть трейлер
          </BlankLink>
        )}
      </div>
      <p className={styles.title}>{descriptionString}</p>
      <div className={styles.response}>
        <div className={styles.responseBlock}>
          <Rate rate={rate} className={styles.rating} />
          <div className={styles.ratings}>
            <RatingCard
              value={getRatingScore(ratings, 'metakritik')}
              image="/img/metakritik.svg"
              className={styles.ratingsIcon}
              link="https://www.metacritic.com/"
            />
            <RatingCard
              value={getRatingScore(ratings, 'imdb')}
              image="/img/imdb.svg"
              link="https://www.imdb.com/"
              className={styles.ratingsIcon}
            />
            <RatingCard
              value={getRatingScore(ratings, 'kinopoisk')}
              image="/img/kinopoisk.svg"
              className={styles.ratingsIcon}
              link="https://www.kinopoisk.ru"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FilmTitleInfoContainer.propTypes = {
  trailers: PropTypes.array.isRequired,
  info: PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.number,
    genres: PropTypes.array,
    ratings: PropTypes.array,
    name_en: PropTypes.string,
    duration: PropTypes.string,
    countries: PropTypes.array,
    age_restriction: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  info: selectMovieInfo(),
  trailers: selectMovieTrailers(),
});

export default connect(mapStateToProps)(FilmTitleInfoContainer);
