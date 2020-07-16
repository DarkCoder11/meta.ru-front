import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectMovieTrailers,
  selectMovieInfo,
} from 'store/selectors/movieSelector';
import { getDynamicImage } from 'utils/index';

import { BlankLink } from 'components/index';

import Play from '../../../../public/img/play-button.svg';
import styles from './FilmTrailersContainer.scss';

const FilmTrailersContainer = ({ refName, trailers, info }) => {
  const rendFilmTrailers = () =>
    trailers.map((trailer) => (
      <BlankLink
        url={trailer}
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${
            info.image ? getDynamicImage(info.image) : '/img/noposter.png'
          })`,
        }}
        key={shortid.generate()}
        className={styles.item}
      >
        <Play />
        <p>Смотреть трейлер</p>
      </BlankLink>
    ));

  return (
    <div ref={refName} className={styles.container}>
      <h2>Трейлер и кадры</h2>
      <div className={styles.items}>{rendFilmTrailers()}</div>
    </div>
  );
};

FilmTrailersContainer.propTypes = {
  refName: PropTypes.any.isRequired,
  info: PropTypes.shape({
    image: PropTypes.string,
  }).isRequired,
  trailers: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  trailers: selectMovieTrailers(),
  info: selectMovieInfo(),
});

export default connect(mapStateToProps)(FilmTrailersContainer);
