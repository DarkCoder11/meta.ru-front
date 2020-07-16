import React from 'react';

import { similarFilms } from 'utils/index';
import { Button, Image, MovieCard } from 'components/index';

import styles from './FilmSimiliarsContainer.scss';

const FilmSimiliarsContainer = () => {
  const rendSimilarFilms = () =>
    similarFilms.map((similar) => <MovieCard key={similar.id} {...similar} />);

  return (
    <div className={styles.container}>
      <h2>Похожие фильмы</h2>
      <Button className={styles.film__similar_movies_slid_left}>
        <Image
          className={styles.film__similar_movies_slid_left_icon}
          src="/img/upArrow.svg"
          alt="slid"
        />
      </Button>
      <Button className={styles.film__similar_movies_slid_right}>
        <Image
          className={styles.film__similar_movies_slid_right_icon}
          src="/img/upArrow.svg"
          alt="slid"
        />
      </Button>
      <div className={styles.film__similar_movies_items}>
        {rendSimilarFilms()}
      </div>
      <Button className={styles.film__similar_movies_button}>
        Больше фильмов по теме
      </Button>
    </div>
  );
};

export default FilmSimiliarsContainer;
