import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { getDynamicImage } from '../../utils';

import Rate from '../Rate';
import BlankLink from '../BlankLink';
import styles from './MovieCard.scss';

const MovieCard = ({
  rate,
  name,
  year,
  slug,
  image,
  isBest,
  isCatalog,
  rateClasses,
  bestClasses,
  catalogClasses,
  bestYearClasses,
  containerClasses,
  bestTitleClasses,
}) => (
  <BlankLink
    isRouterLink
    as={`/catalog/${slug}`}
    url="/catalog/[movieSlug]"
    className={classNames(styles.container, {
      [containerClasses]: containerClasses,
      [bestClasses]: isBest,
      [catalogClasses]: isCatalog,
    })}
  >
    {isBest && (
      <div className={styles.label}>
        <span>вам должно понравится</span>
      </div>
    )}
    <div
      style={{
        backgroundImage: `url(${
          image ? getDynamicImage(image) : '/img/noposter.png'
        })`,
      }}
      className={classNames(styles.main, {
        [styles.best]: isBest,
      })}
    >
      {!isBest && !isCatalog && (
        <Rate
          className={classNames(styles.rate, {
            [rateClasses]: rateClasses,
          })}
          rate={rate || '-'}
        />
      )}
      <div className={styles.content}>
        <p
          className={classNames(styles.contentFilmName, {
            [bestTitleClasses]: isBest,
          })}
        >
          {name}
        </p>
        <p
          className={classNames(styles.contentFilmData, {
            [bestYearClasses]: isBest,
          })}
        >
          {year}
        </p>
      </div>
    </div>
  </BlankLink>
);

MovieCard.defaultProps = {
  image: '',
  rate: null,
  isBest: false,
  isCatalog: false,
  bestClasses: '',
  rateClasses: '',
  catalogClasses: '',
  slug: '',
  containerClasses: '',
  bestTitleClasses: '',
  bestYearClasses: '',
};

MovieCard.propTypes = {
  rate: PropTypes.any,
  image: PropTypes.string,
  slug: PropTypes.string,
  isBest: PropTypes.bool,
  isCatalog: PropTypes.bool,
  bestClasses: PropTypes.string,
  rateClasses: PropTypes.string,
  id: PropTypes.number.isRequired,
  catalogClasses: PropTypes.string,
  bestYearClasses: PropTypes.string,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  bestTitleClasses: PropTypes.string,
  containerClasses: PropTypes.string,
};

export default MovieCard;
