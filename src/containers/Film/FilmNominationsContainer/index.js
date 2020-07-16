import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMovieInfo } from 'store/selectors/movieSelector';
import { TitleLayout } from 'layouts/index';
import { Button } from 'components/index';

import styles from './FilmNominationsContainer.scss';

const FilmNominationsContainer = ({ refName, info }) => {
  const redirectPrizesHandler = () =>
    Router.push('/catalog/[movieSlug]/prizes', `/catalog/${info.slug}/prizes`);

  const filmNominations = [];
  const rendNominations = () =>
    filmNominations.map((nomination) => (
      <div key={nomination.id} className={styles.item}>
        <div className={styles.itemIcon}>{nomination.image}</div>
        <div className={styles.itemContent}>
          <p>{nomination.title}</p>
          <p>
            {nomination.isWinnedAny ? (
              <span>{nomination.participatedNominationCount} номинации</span>
            ) : (
              <>
                {`${nomination.winnedNominationCount} награда`}
                <span>
                  {` / ${nomination.participatedNominationCount} номинации`}
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    ));

  return (
    <div ref={refName} className={styles.container}>
      <TitleLayout title="Награды и номинации" titleClasses={styles.title}>
        <div className={styles.items}>
          {rendNominations()}
          <Button onClick={redirectPrizesHandler}>Все награды</Button>
        </div>
      </TitleLayout>
    </div>
  );
};

FilmNominationsContainer.propTypes = {
  info: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  refName: PropTypes.any.isRequired,
};

const mapStateToProps = createStructuredSelector({
  info: selectMovieInfo(),
});

export default connect(mapStateToProps)(FilmNominationsContainer);
