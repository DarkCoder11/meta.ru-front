import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getLocalSpacedNumber, getNames } from 'utils/index';
import { TitleLayout } from '../../../layouts';
import styles from './FilmAboutContainer.scss';
import { selectMovieInfo } from '../../../store/selectors/movieSelector';

const FilmAboutContainer = ({ refName, info, isHeader }) => {
  const {
    budget,
    genres,
    directors,
    scriptwriters,
    budget_currency: budgetCurrency,
  } = info;

  const displayGenres = getNames(genres, 'name', 3);
  const displayDirectors = getNames(directors, 'name', 3);
  const displayScriptwriters = getNames(scriptwriters, 'name', 3);

  return (
    <div ref={refName} className={styles.block}>
      <TitleLayout
        titleClasses={styles.title}
        isHeader={isHeader}
        title="О фильме"
      >
        {!!genres.length && (
          <div className={styles.content}>
            <p>жанр:</p>
            <p className={styles.genre}>{displayGenres}</p>
          </div>
        )}
        {!!directors.length && (
          <div className={styles.content}>
            <p>режиссер:</p>
            <p>{displayDirectors}</p>
          </div>
        )}
        {!!scriptwriters.length && (
          <div className={styles.content}>
            <p>cценарист:</p>
            <p>{displayScriptwriters}</p>
          </div>
        )}
        {budget && (
          <div className={styles.content}>
            <p>бюджет:</p>
            <p>{`${getLocalSpacedNumber(budget)} ${budgetCurrency}`}</p>
          </div>
        )}
        {/* <div className={styles.content}>
          <p>сборы в мире:</p>
          <p>213 928 762 $ </p>
        </div> */}
      </TitleLayout>
    </div>
  );
};

FilmAboutContainer.defaultProps = {
  isHeader: false,
};

FilmAboutContainer.propTypes = {
  refName: PropTypes.any.isRequired,
  info: PropTypes.shape({
    budget: PropTypes.any,
    genres: PropTypes.array.isRequired,
    directors: PropTypes.array.isRequired,
    scriptwriters: PropTypes.array.isRequired,
    budget_currency: PropTypes.string,
  }).isRequired,
  isHeader: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  info: selectMovieInfo(),
});

export default connect(mapStateToProps)(FilmAboutContainer);
