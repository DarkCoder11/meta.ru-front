import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  GetCustomRating,
  useWindowSize,
  getRatingScore,
  getDynamicImage,
} from 'utils/index';
import { selectMovieInfo } from 'store/selectors/movieSelector';

import { RatingCard, Rate, Stars } from 'components/index';
import Runet from '../../Runet';

import styles from './FilmLeftContainer.scss';

const FilmLeftContainer = ({ info }) => {
  const { isMobile } = useWindowSize();
  const { ratings, image, slug } = info;
  const noPoster = !isMobile ? '/img/noposter.png' : '/img/nopostermobile.png';
  const rate = GetCustomRating(ratings);

  return (
    <>
      <div className={styles.photo}>
        <div
          style={{
            backgroundImage: `url(${
              image ? getDynamicImage(image) : noPoster
            })`,
          }}
          className={styles.photoRate}
        >
          <Rate className={styles.photoRateRank} rate={rate} />
        </div>
        <div className={styles.photoRating}>
          <RatingCard
            value={getRatingScore(info.ratings, 'metakritik')}
            image="/img/metakritik.svg"
            link="https://www.metacritic.com/"
          />
          <RatingCard
            value={getRatingScore(info.ratings, 'imdb')}
            image="/img/imdb.svg"
            link="https://www.imdb.com/"
          />
          <RatingCard
            value={getRatingScore(info.ratings, 'kinopoisk')}
            image="/img/kinopoisk.svg"
            link="https://www.kinopoisk.ru"
          />
        </div>
      </div>
      <div className={styles.marks}>
        <p className={styles.marksLabel}>Оцените фильм</p>
        <Stars
          totalStars={10}
          starsContainerClasses={styles.marksStar}
          slug={slug}
        />
      </div>
      <Runet stickyContainerClasses={styles.runetSticky} />
    </>
  );
};

FilmLeftContainer.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.string,
    ratings: PropTypes.array.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  info: selectMovieInfo(),
});

export default connect(mapStateToProps)(FilmLeftContainer);
