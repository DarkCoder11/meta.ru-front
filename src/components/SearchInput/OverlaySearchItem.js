import React from 'react';
import shortid from 'shortid';
import configs from '../../../env.config';

import BlankLink from '../BlankLink';
import Image from '../NextImage';

import styles from './OverlaySearchResult.scss';

export const renderFilmCards = (array, size) => {
  const { isDesktop } = size;
  const tempArray = isDesktop ? array.slice(-4) : array.slice(-3);
  return tempArray.map(({ name, year, image, ratings, slug }) => {
    const background =
      image === null
        ? { backgroundImage: `url('img/no_poster_mobile.png')` }
        : { backgroundImage: `url(${configs.api}${image})` };
    return (
      <BlankLink
        isRouterLink
        key={shortid.generate()}
        as={`/catalog/${slug}`}
        url="/catalog/[movieSlug]"
        className={styles.filmCardWrap}
        anchorProps={{ style: background }}
      >
        <div className={styles.rating}>
          {ratings.length === 0 ? '-' : Math.floor(ratings[0].score * 10)}
        </div>
        <div className={styles.descWrap}>
          <span className={styles.description}>{name}</span>
          <span className={styles.description}>{year}</span>
        </div>
      </BlankLink>
    );
  });
};

export const renderRating = ({ cinemas = [] }, size) => {
  const { isMobile, isTablet, isLargeTablet } = size;
  const isMobileDevice = isMobile || isTablet || isLargeTablet;
  return cinemas.slice(-2).map(({ cinema, url }) => (
    <div
      key={shortid.generate()}
      className={cinema.achievement ? styles.achievement : ''}
    >
      {cinema.achievement.length > 0 && (
        <BlankLink
          key={shortid.generate()}
          className={styles.achievementDesc}
          url={cinema.achievement[0].url}
        >
          <Image src="/img/first.svg" alt="first" />
          {cinema.achievement[0].name}
        </BlankLink>
      )}
      <div
        className={isMobileDevice ? styles.cinemaWrapMobile : styles.cinemaWrap}
        key={cinema.id}
      >
        <div className={styles.cinemaRating}>{cinema.metascore}</div>
        <BlankLink className={styles.logo} url={cinema.url}>
          <Image src={cinema.image} isLocal={false} />
        </BlankLink>
        {!isMobileDevice && (
          <>
            <BlankLink
              className={styles.price}
              url={cinema.referral_link.external_url}
            >
              <div className={styles.priceImage}>
                <Image src="/img/bonus.svg" />
              </div>
              {cinema.referral_link.name}
            </BlankLink>
            <BlankLink
              isRouterLink
              className={styles.reviewsCount}
              url="/overview/[overviewSeoUrl]/reviews"
              as={`/overview/${cinema.seo_url}/reviews`}
            >
              {cinema.reviews_count}
            </BlankLink>
          </>
        )}
        <BlankLink
          isRouterLink
          className={styles.reviewBtn}
          url="/overview/[overviewSeoUrl]"
          as={`/overview/${cinema.seo_url}`}
        >
          Обзор
          {isMobileDevice && <Image src="/img/reviews__black.svg" isLocal />}
        </BlankLink>
        <BlankLink url={url} className={styles.onSiteBtn}>
          На сайт
          {isMobileDevice && <Image src="img/globus.svg" isLocal />}
        </BlankLink>
      </div>
    </div>
  ));
};
