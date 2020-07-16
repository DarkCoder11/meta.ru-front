import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { generatePageError } from 'next-with-error';
import { useDispatch, useSelector } from 'react-redux';

import { helpers, constants } from 'utils/index';
import { getRating } from 'store/actions/ratingAction';
import { getSeoInfo } from 'store/actions/seoInfoAction';
import { getArticles } from 'store/actions/articlesAction';
import { getNews } from 'store/actions/newsAction';
import { getPromo } from 'store/actions/promoAction';
import { getAction } from 'store/actions/actionAction';

import {
  HomeInfoContainer,
  HomeRatingsContainer,
  ArticlesMainContainer,
} from 'containers/index';
import HomeBanner from 'containers/Home/HomeBanner';
import HomeBonus from 'containers/Home/HomeBonusContainer';
import { HelmetWrapper, MainLayout } from 'layouts/index';

import { HomeCorner, SearchInput, Button } from 'components/index';
import styles from 'styles/HomePage.scss';

const HomePage = ({ isServer }) => {
  const dispatch = useDispatch();
  const [isActiveTooltip, setActiveTooltip] = useState(false);
  const closeTooltip = () => setActiveTooltip(false);
  const openTooltip = () => setActiveTooltip(true);
  const containerClasses = 'full-container home_container';
  const homeSeo = useSelector(
    (state) => state.seoInfo && state.seoInfo.mainPage,
  );
  const rating = useSelector((state) => state.rating.rating);

  const sortedRankCinemas = helpers.sort(
    'cinema.metascore',
    rating ? rating.cinemarating_set : [],
  );

  const title = homeSeo
    ? homeSeo.title
    : 'Топ онлайн-кинотеатров - лучшие кинотеатры в интернете';
  const description = homeSeo
    ? homeSeo.description
    : 'Metaratings представляет лучшие онлайн-кинотеатры России и мира. Объективный рейтинг, основанный на отзывах пользователей.';

  const fetchHomeDataCSR = async () => {
    try {
      const ratingPromise = dispatch(getRating('main'));
      const runetPromise = dispatch(getRating('ru_net'));
      const homeSeoDataPromise = dispatch(getSeoInfo('main-page'));
      const articlesPromise = dispatch(getArticles({ categoryUrl: 'wiki' }));
      const newsPromise = dispatch(getNews());
      const promoPromise = dispatch(getPromo({ categoryUrl: 'promo' }));
      const actionPromise = dispatch(getAction({ categoryUrl: 'action' }));

      await Promise.all([
        ratingPromise,
        articlesPromise,
        homeSeoDataPromise,
        runetPromise,
        newsPromise,
        promoPromise,
        actionPromise,
      ]);
    } catch {
      generatePageError(404);
    }
  };

  useEffect(() => {
    if (!isServer) {
      fetchHomeDataCSR();
    }
  }, []);

  return (
    <HelmetWrapper title={title} metaDescription={description}>
      <MainLayout>
        <div className={containerClasses}>
          <HomeCorner />
          <div className="container">
            <h1 className={styles.title}>Где смотреть фильм?</h1>
            <span className={styles.secondaryTitle}>
              Поиск по предложениям онлайн-кинотеатров
            </span>
            <SearchInput pathname="/search" queryKey="query" />
            <Button className={styles.searchTitle} onClick={openTooltip}>
              Зачем нужен поиск?
            </Button>
            {isActiveTooltip && (
              <div className={styles.overlay}>
                <div className={styles.tooltip}>
                  <h3 className={styles.tooltipTitle}>Зачем нужен поиск?</h3>
                  <p className={styles.tooltipDesc}>
                    Мы создали поиск, чтобы Вам больше не пришлось долго искать,
                    где посмотреть кино онлайн. Просто наберите в поисковой
                    строке название фильма или сериала, и мы покажем актуальные
                    предложения российских онлайн-кинотеатров, где и на каких
                    условиях его можно посмотреть онлайн прямо сейчас
                  </p>
                  <Button className={styles.close} onClick={closeTooltip}>
                    &times;
                  </Button>
                </div>
              </div>
            )}
          </div>
          <HomeInfoContainer />
          <div className="container p-0">
            <HomeRatingsContainer
              ratings={helpers.take(sortedRankCinemas, 6)}
            />
            <HomeBonus />
            <HomeBanner />
          </div>
          <ArticlesMainContainer
            isMain
            isMore
            title="Статьи"
            containerClasses="container__articles"
          />
        </div>
      </MainLayout>
    </HelmetWrapper>
  );
};

HomePage.getInitialProps = async ({ reduxStore }) => {
  const { dispatch } = reduxStore;

  try {
    if (constants.isServer) {
      const ratingPromise = dispatch(getRating('main'));
      const runetPromise = dispatch(getRating('ru_net'));
      const homeSeoDataPromise = dispatch(getSeoInfo('main-page'));
      const articlesPromise = dispatch(
        getArticles({ categoryUrl: 'collections' }),
      );
      const newsPromise = dispatch(getNews());
      const promoPromise = dispatch(getPromo({ categoryUrl: 'promo' }));
      const actionPromise = dispatch(getAction({ categoryUrl: 'action' }));

      await Promise.all([
        ratingPromise,
        articlesPromise,
        homeSeoDataPromise,
        runetPromise,
        newsPromise,
        promoPromise,
        actionPromise,
      ]);

      return { dispatch };
    }

    return { dispatch };
  } catch {
    return {
      error: {
        statusCode: 404,
      },
    };
  }
};

HomePage.propTypes = {
  isServer: PropTypes.bool.isRequired,
};

export default HomePage;
