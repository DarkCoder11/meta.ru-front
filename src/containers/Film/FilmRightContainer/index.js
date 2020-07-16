import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useInView } from 'react-hook-inview';
import { createStructuredSelector } from 'reselect';

//  ********** do not delete, while backend information expected ********************//

import { filmTabs, scrollToComponent } from 'utils/index';
import { selectAllCinemas } from 'store/selectors/movieSelector';

import { TabList, FilmDivider, BestShowTypes } from 'components/index';
// import FilmFactsContainer from '../FilmFactsContainer';
import FilmAboutContainer from '../FilmAboutContainer';
// import FilmRelatedsContainer from '../FilmRelatedsContainer';
// import FilmPodcastsContainer from '../FilmPodcastsContainer';
import FilmTrailersContainer from '../FilmTrailersContainer';
import FilmMainActorsContainer from '../FilmMainActorsContainer';
// import FilmSimiliarsContainer from '../FilmSimiliarsContainer';
// import FilmNominationsContainer from '../FilmNominationsContainer';
import FilmBestCinemasContainer from '../FilmBestCinemasContainer';
import FilmDescriptionContainer from '../FilmDescriptionContainer';
// import FilmReviewsCriticsContainer from '../FilmReviewsCriticsContainer';
// import FilmParticipationsContainer from '../FilmParticipationsContainer';
import FilmTitleInfoContainer from '../FilmTitleInfoContainer';

import styles from './FilmRightContainer.scss';

const FilmRightContainer = ({ cinemas }) => {
  // const [newsVisibleRef, isVisibleNews, newsRef] = useInView({
  //   threshold: 1,
  // });
  // const [infoVisibleRef, isVisibleInfo, infoRef] = useInView({
  //   threshold: 1,
  // });
  // const [awardsVisibleRef, isVisibleAwards, awardsRef] = useInView({
  //   threshold: 1,
  // });
  const [actorsVisibleRef, isVisibleActors, actorsRef] = useInView({
    threshold: 1,
  });
  const [trailerVisibleRef, isVisibleTrailer, trailerRef] = useInView({
    threshold: 1,
  });
  // const [reviewsVisibleRef, isVisibleReviews, reviewsRef] = useInView({
  //   threshold: 1,
  // });
  const [aboutVisibleRef, isVisibleAbout, aboutFilmRef] = useInView({
    threshold: 1,
  });
  const [tabs, setTabs] = useState(filmTabs(1));
  const combinedRefs = {
    // newsRef,
    // infoRef,
    // awardsRef,
    actorsRef,
    trailerRef,
    // reviewsRef,
    aboutFilmRef,
  };

  const setActiveTabHandler = (updatedActiveTab) => {
    scrollToComponent(
      { current: combinedRefs[updatedActiveTab.refName].target },
      'middle',
    );
  };

  useEffect(() => {
    // if (isVisibleNews) {
    //   setTabs(filmTabs(7));
    // }
    //  else if (isVisibleInfo) {
    //   setTabs(filmTabs(6));
    // }
    // else if (isVisibleAwards) {
    //   setTabs(filmTabs(4));
    // }
    if (isVisibleActors) {
      setTabs(filmTabs(2));
    } else if (isVisibleTrailer) {
      setTabs(filmTabs(5));
    }
    // else if (isVisibleReviews) {
    //   setTabs(filmTabs(3));
    // }
    else if (isVisibleAbout) {
      setTabs(filmTabs(1));
    }
  }, [
    // isVisibleNews,
    // isVisibleInfo,
    // isVisibleAwards,
    isVisibleActors,
    isVisibleTrailer,
    // isVisibleReviews,
    isVisibleAbout,
  ]);

  return (
    <div>
      <FilmTitleInfoContainer />
      {!!cinemas.length && (
        <>
          <div className={styles.cinemas}>
            <p className={styles.cinemasTitle}>Лучшие онлайн кинотеатры</p>
            <BestShowTypes />
          </div>
        </>
      )}
      <FilmBestCinemasContainer />
      <TabList
        tabs={tabs}
        onActiveTabChange={setActiveTabHandler}
        containerClassName={styles.nav}
        stickyClasses={styles.navSticky}
        stickyItemClasses={styles.navStickyItem}
      />
      <FilmDivider className={styles.navDivider} />
      <FilmDescriptionContainer />
      <FilmAboutContainer refName={aboutVisibleRef} />
      <FilmMainActorsContainer refName={actorsVisibleRef} />
      {/* <FilmReviewsCriticsContainer refName={reviewsVisibleRef} /> */}
      {/* <FilmNominationsContainer refName={awardsVisibleRef} /> */}
      {/* <FilmParticipationsContainer /> */}
      <FilmTrailersContainer refName={trailerVisibleRef} />
      {/* <FilmFactsContainer refName={infoVisibleRef} /> */}
      {/* <FilmPodcastsContainer /> */}
      {/* <FilmSimiliarsContainer />
      <FilmRelatedsContainer refName={newsVisibleRef} /> */}
      {/* <div className={styles.bottom} /> */}
    </div>
  );
};

FilmRightContainer.propTypes = {
  cinemas: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cinemas: selectAllCinemas(),
});

export default connect(mapStateToProps)(FilmRightContainer);
