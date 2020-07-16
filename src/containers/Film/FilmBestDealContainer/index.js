import React, { useState } from 'react';
import { take } from 'lodash';
import Router from 'next/router';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { filmTabs, getFilmCinemas, getFilmBestCinemas } from 'utils/index';
import {
  selectMovieInfo,
  selectAllCinemas,
} from 'store/selectors/movieSelector';

import {
  Button,
  TabList,
  FilmDivider,
  FilmRatingsContent,
} from 'components/index';
import FilmTitleInfoContainer from '../FilmTitleInfoContainer';

import styles from './FilmBestDealContainer.scss';

const FilmBestDealContainer = ({
  info,
  tabId,
  cinemas,
  tabListName,
  ratingsContentProps,
}) => {
  const [isMore, setIsMore] = useState(false);

  const neededCinemas = isMore ? cinemas : take(cinemas, 3);
  const filmCinemas = getFilmCinemas(neededCinemas);
  const filmBestCinemas = getFilmBestCinemas(neededCinemas);

  const getAllCinemasHandler = () => {
    setIsMore(!isMore);
  };

  const setActiveTabHandler = (updatedActiveTab) => {
    const baseAs = `/catalog/[movieSlug]${updatedActiveTab.route}`;
    const baseUrl = `/catalog/${info.slug}${updatedActiveTab.route}`;

    Router.push(baseAs, baseUrl);
  };

  return (
    <>
      <FilmTitleInfoContainer />
      <div
        className={classNames(styles.container, {
          [styles.containerNoBackground]:
            !filmBestCinemas.length && !filmCinemas.length,
        })}
      >
        <FilmRatingsContent
          {...ratingsContentProps}
          filmCinemas={filmCinemas}
          filmBestCinemas={filmBestCinemas}
        />
        {cinemas.length > 3 && (
          <div className={styles.containerOffersContent}>
            <Button
              onClick={getAllCinemasHandler}
              className={classNames(styles.containerOffers, {
                [styles.containerOffersMore]: isMore,
              })}
            >
              {isMore ? 'Свернуть' : 'Больше предложений'}
            </Button>
          </div>
        )}
      </div>
      <TabList
        tabs={filmTabs(tabId, tabListName)}
        onActiveTabChange={setActiveTabHandler}
        containerClassName={styles.tabList}
      />
      <FilmDivider className={styles.divider} />
    </>
  );
};

FilmBestDealContainer.defaultProps = {
  ratingsContentProps: {},
};

FilmBestDealContainer.propTypes = {
  info: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  tabId: PropTypes.number.isRequired,
  cinemas: PropTypes.array.isRequired,
  ratingsContentProps: PropTypes.object,
  tabListName: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  info: selectMovieInfo(),
  cinemas: selectAllCinemas(),
});

export default connect(mapStateToProps)(FilmBestDealContainer);
