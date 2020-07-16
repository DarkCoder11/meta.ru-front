import React, { useState } from 'react';
import { take } from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getFilmCinemas, getFilmBestCinemas } from 'utils/index';
import { selectAllCinemas } from 'store/selectors/movieSelector';

import { FilmRatingsContent, Button, BestShowTypes } from 'components/index';

import styles from './FilmBestCinemasContainer.scss';

const FilmBestCinemasContainer = ({ cinemas }) => {
  const [isMore, setIsMore] = useState(false);

  const getAllCinemasHandler = () => {
    setIsMore(!isMore);
  };

  const neededCinemas = isMore ? cinemas : take(cinemas, 3);
  const filmCinemas = getFilmCinemas(neededCinemas);
  const filmBestCinemas = getFilmBestCinemas(neededCinemas);

  return (
    <div
      className={classNames(styles.container, {
        [styles.noBackground]: !filmBestCinemas.length && !filmCinemas.length,
      })}
    >
      {!!filmBestCinemas.length || !!filmCinemas.length ? (
        <>
          <div className={styles.response}>
            <p className={styles.responseTitle}>Смотреть онлайн</p>
            <BestShowTypes
              itemClasses={styles.responseItem}
              activeClasses={styles.responseActive}
            />
            <div className={styles.responseTitleDividers} />
          </div>
          <FilmRatingsContent
            filmCinemas={filmCinemas}
            filmBestCinemas={filmBestCinemas}
          />
          {cinemas.length > 3 && (
            <div className={styles.offers}>
              <Button
                onClick={getAllCinemasHandler}
                className={classNames(styles.offersBtn, {
                  [styles.offersBtnMore]: isMore,
                })}
              >
                {isMore ? 'Свернуть' : 'Больше предложений'}
              </Button>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

FilmBestCinemasContainer.propTypes = {
  cinemas: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cinemas: selectAllCinemas(),
});

export default connect(mapStateToProps)(FilmBestCinemasContainer);
