import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// ************ do not delete while backend information is expected **************//

import {
  Button,
  // Image,
  //  Slider
} from 'components/index';
import {
  selectMovieInfo,
  selectMovieActors,
} from 'store/selectors/movieSelector';
import styles from './FilmMainActorsContainer.scss';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 5,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

const FilmMainActorsContainer = ({ refName, info, actors }) => {
  const redirectActorsHandler = () =>
    Router.push('/catalog/[movieSlug]/actors', `/catalog/${info.slug}/actors`);

  const rendMainActors = () =>
    actors.map((actor) => (
      <div key={actor.id} className={styles.item}>
        <div className={styles.itemImage} />
        <p>{actor.name}</p>
        <p>{actor.name_en}</p>
      </div>
    ));

  return (
    <div ref={refName} className={styles.container}>
      <h2 className={styles.title}>В главных ролях:</h2>
      {/* <Button className={styles.slidLeft}>
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
      </Button> */}
      {/* <Slider
        customResponsive={responsive}
        infiniteMode={false}
        carouselClasses={styles.items}
        itemClassName={styles._carouselitem}
      > */}
      <div className={styles.items}>{rendMainActors()}</div>
      {/* </Slider> */}
      <Button onClick={redirectActorsHandler} className={styles.all}>
        Все актеры
      </Button>
    </div>
  );
};

FilmMainActorsContainer.propTypes = {
  actors: PropTypes.array.isRequired,
  info: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  refName: PropTypes.any.isRequired,
};

const mapStateToProps = createStructuredSelector({
  info: selectMovieInfo(),
  actors: selectMovieActors(),
});

export default connect(mapStateToProps)(FilmMainActorsContainer);
