import React from 'react';
import classNames from 'classnames';

import { filmParticipations } from 'utils/index';
import styles from './FilmParticipationsContainer.scss';

const FilmParticipationsContainer = () => {
  const rendFilmParticipationsRatings = () =>
    filmParticipations.map((participation) => (
      <div key={participation.id} className={styles.top}>
        <div
          className={classNames({
            [styles.topRating]: participation.isTop,
            [styles.topRate]: !participation.isTop,
          })}
        >{`#${participation.rank}`}</div>
        <p>{participation.nomination}</p>
      </div>
    ));

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Участие в рейтингах</h2>
      </div>

      {rendFilmParticipationsRatings()}
    </div>
  );
};

export default FilmParticipationsContainer;
