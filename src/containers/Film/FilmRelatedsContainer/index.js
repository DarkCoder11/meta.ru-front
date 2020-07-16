import React from 'react';
import PropTypes from 'prop-types';

import { relatedFilms } from 'utils/index';
import styles from './FilmRelatedsContainer.scss';

const FilmRelatedsContainer = ({ refName }) => {
  const rendRelatedFilms = () =>
    relatedFilms.map((related) => (
      <div key={related.id} className={styles.item}>
        <p className={styles.itemData}>
          {related.hour}
          <span>{related.date}</span>
        </p>
        <p className={styles.itemContent}>{related.text}</p>
      </div>
    ));

  return (
    <div ref={refName} className={styles.container}>
      <h2>Новости по теме</h2>
      <div className={styles.items}>{rendRelatedFilms()}</div>
    </div>
  );
};

FilmRelatedsContainer.propTypes = {
  refName: PropTypes.any.isRequired,
};

export default FilmRelatedsContainer;
