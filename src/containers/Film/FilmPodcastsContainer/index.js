import React from 'react';

import { filmPodcasts } from 'utils/index';

import { Image, Button } from 'components/index';

import styles from './FilmPodcastsContainer.scss';

const FilmPodcastsContainer = () => {
  const rendPodcasts = () =>
    filmPodcasts.map((podcast) => (
      <div key={podcast.id} className={styles.item}>
        <div className={styles.itemTitle}>
          <div className={styles.itemTitleLogo}>
            <Image src={podcast.image} />
          </div>
          <p>{podcast.time}</p>
        </div>
        <div className={styles.itemContent}>
          <p className={styles.itemContentTitle}>{podcast.text}</p>
          <p className={styles.itemContentText}>{podcast.service}</p>
        </div>
      </div>
    ));

  return (
    <div className={styles.container}>
      <h2>Подкасты</h2>
      <Button className={styles.slidLeft}>
        <Image
          className={styles.slidLeftIcon}
          src="/img/upArrow.svg"
          alt="slid"
        />
      </Button>
      <Button className={styles.slidRight}>
        <Image
          className={styles.slidRightIcon}
          src="/img/upArrow.svg"
          alt="slid"
        />
      </Button>
      <div className={styles.items}>{rendPodcasts()}</div>
    </div>
  );
};

export default FilmPodcastsContainer;
