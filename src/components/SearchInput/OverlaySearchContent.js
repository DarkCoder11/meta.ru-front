import React from 'react';
import PropTypes from 'prop-types';

import { renderFilmCards, renderRating } from './OverlaySearchItem';
import BlankLink from '../BlankLink';

import styles from './OverlaySearchResult.scss';

const OverlaySearchContent = ({ isEmptyQuery, query, data, size }) => {
  if (isEmptyQuery) {
    return null;
  }

  return data.length === 0 ? (
    <div className={styles.emptyResponse}>
      <h2>По вашему запросу ничего не найдено</h2>
    </div>
  ) : (
    <div className={styles.wrap}>
      <span className={styles.title}>Возможно вы искали</span>
      <div className={styles.divider} />
      <div className={styles.filmCardsWrap}>{renderFilmCards(data, size)}</div>
      <span className={styles.title}>Кинотеатры с этим фильмом</span>
      <div className={styles.divider} />
      <div className={styles.filmRatingWrap}>{renderRating(data[0], size)}</div>
      <BlankLink
        isRouterLink
        className={styles.btn}
        href={{ pathname: '/search', query: { query } }}
      >
        Все результаты
      </BlankLink>
    </div>
  );
};

OverlaySearchContent.propTypes = {
  query: PropTypes.string.isRequired,
  isEmptyQuery: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  size: PropTypes.object.isRequired,
};

export default OverlaySearchContent;
