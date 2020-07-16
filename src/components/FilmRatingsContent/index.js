import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import NestededItem from './NestededItem';
import styles from './FilmRatingsContent.scss';

const FilmRatingsContent = ({
  filmCinemas,
  filmBestCinemas,
  itemProps,
  brClasses,
  titleClasses,
  contentClasses,
  containerClasses,
}) => {
  const rendCinemas = (cinemas, isBest) =>
    cinemas.map(({ cinema, url }, index, array) => {
      const {
        image: logoSrc,
        metascore: rate,
        reviews_count: reviewsCount,
        ...rest
      } = cinema;

      return (
        <Fragment key={cinema.id}>
          <NestededItem
            {...rest}
            url={url}
            rate={rate}
            {...itemProps}
            isBest={isBest}
            logoSrc={logoSrc}
            isRadiused={isBest}
            reviewsCount={reviewsCount}
          />
          {!isBest && index !== array.length - 1 && (
            <div
              className={classNames(styles.br, {
                [brClasses]: brClasses,
              })}
            />
          )}
        </Fragment>
      );
    });

  return !!filmBestCinemas.length || !!filmCinemas.length ? (
    <div className={classNames({ [containerClasses]: containerClasses })}>
      <div
        className={classNames(styles.title, {
          [titleClasses]: titleClasses,
        })}
      >
        <p>Метаоценка</p>
        <p>Кинотеатр</p>
        <p className={styles.reviewsTitle}>Отзывы</p>
      </div>
      {rendCinemas(filmBestCinemas, true)}
      {!!filmCinemas.length && (
        <div
          className={classNames(styles.block, {
            [contentClasses]: contentClasses,
          })}
        >
          {rendCinemas(filmCinemas)}
        </div>
      )}
    </div>
  ) : (
    <div className={styles.hidden} />
  );
};

FilmRatingsContent.defaultProps = {
  itemProps: {},
  filmCinemas: [],
  brClasses: '',
  titleClasses: '',
  contentClasses: '',
  containerClasses: '',
  filmBestCinemas: [],
};

FilmRatingsContent.propTypes = {
  itemProps: PropTypes.object,
  brClasses: PropTypes.string,
  filmCinemas: PropTypes.array,
  titleClasses: PropTypes.string,
  contentClasses: PropTypes.string,
  filmBestCinemas: PropTypes.array,
  containerClasses: PropTypes.string,
};

export default FilmRatingsContent;
