import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Button } from '../../components';
import { TitleLayout } from '../../layouts';
import styles from './ActorsContainer.scss';
import FilmBestDealContainer from '../Film/FilmBestDealContainer';
import {
  selectMovieActors,
  selectMovieInfo,
} from '../../store/selectors/movieSelector';

const ActorsContainer = ({ actors, info }) => {
  const { directors, scriptwriters } = info;

  const renderActors = (array) =>
    array.map((item) => (
      <div key={shortid.generate()} className={styles.actorsItem}>
        <div className={styles.actorsItemImg} />
        <div className={styles.actorsItemContent}>
          <p className={styles.actorsItemName}>{item.name}</p>
          {/* <p className={styles.actorsItemNickname}>
            {actor.total_films}
          </p> */}
        </div>
      </div>
    ));

  const renderDirectors = () =>
    directors.map((director) => (
      <div key={director.id} className={styles.actorsItem}>
        <div className={styles.actorsItemImg} />
        <div className={styles.actorsItemContent}>
          <p className={styles.actorsItemName}>{director.name}</p>
        </div>
      </div>
    ));

  return (
    <>
      <FilmBestDealContainer
        tabId={2}
        tabListName="initialActorsTabs"
        ratingsContentProps={{
          itemProps: { isRadiused: true },
        }}
      />

      <div className={styles.worksTema}>
        <Button className={styles.worksTemaItem}>Режиссер</Button>
        <Button className={styles.worksTemaItem}>Актеры</Button>
        <Button className={styles.worksTemaItem}>Сценарист</Button>
      </div>

      <div className={styles.actors}>
        <TitleLayout title="Режиссер" titleClasses={styles.actorsTitle}>
          <div className={styles.actorsItems}>{renderDirectors()}</div>
        </TitleLayout>
      </div>

      <div className={styles.actors}>
        <TitleLayout title="Актеры" titleClasses={styles.actorsTitle}>
          <div className={styles.actorsItems}>{renderActors(actors)}</div>
        </TitleLayout>
      </div>

      <div className={styles.actors}>
        <TitleLayout title="Сценаристы" titleClasses={styles.actorsTitle}>
          <div className={styles.actorsItems}>
            {renderActors(scriptwriters)}
          </div>
        </TitleLayout>
      </div>
      <div className={styles.bottom} />
    </>
  );
};

ActorsContainer.propTypes = {
  info: PropTypes.shape({
    directors: PropTypes.array.isRequired,
    scriptwriters: PropTypes.array.isRequired,
  }).isRequired,
  actors: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  info: selectMovieInfo(),
  actors: selectMovieActors(),
});

export default connect(mapStateToProps)(ActorsContainer);
