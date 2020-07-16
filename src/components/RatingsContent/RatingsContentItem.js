/* eslint-disable react/self-closing-comp */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

import styles from './RatingsContent.scss';
import Bonus from '../Bonus';
import Globus from '../Globus';
import Image from '../NextImage';
import BlankLink from '../BlankLink';
import CinemaLogo from '../CinemaLogo';
import { useWindowSize } from '../../utils';
import ReviewCount from '../SearchReviewCount';
import ReviewsCountSVG from '../../../public/img/reviews__count.svg';

const RatingsContentItem = ({
  cinema,
  isShowCount,
  logoClasses,
  isShowReviews,
  isFirstRating,
  firstItemClasses,
  isFirstReviewCount,
}) => {
  const {
    isMobile,
    isTablet,
    isLargeTablet,
    isDesktop,
  } = useWindowSize();
  const [isSwipedLeft, setIsSwipedLeft] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);

  const ratingAchievments =
    cinema.achievement && cinema.achievement.length
      ? cinema.achievement.filter((achiev, idx) => idx < 2)
      : [];

  useEffect(() => {
    if ((isLargeTablet || isDesktop) && isSwipedLeft) {
      setIsSwipedLeft(false);
    }
  }, [isLargeTablet, isDesktop, isSwipedLeft]);

  const swipeLeftHandler = () => {
    setIsSwipedLeft(true);
  };

  const swipeRightHandler = () => {
    setIsSwipedLeft(false);
  };

  const swipingHandler = () => {
    setIsSwiping(true);
  };

  const swipedHandler = () => {
    setIsSwiping(false);
  };

  const handlers = useSwipeable({
    onSwipedLeft: (e) => swipeLeftHandler(e),
    onSwipedRight: (e) => swipeRightHandler(e),
    onSwiping: (e) => swipingHandler(e),
    onSwiped: (e) => swipedHandler(e),
  });

  return (
    <>
      <div
        {...handlers}
        className={classNames(styles.content, {
          [styles.contentSwiped]: isSwipedLeft,
        })}
      >
        <div
          className={classNames(styles.contentFirst, {
            [styles.contentFirstSwiping]: isSwiping,
            [firstItemClasses]: firstItemClasses,
            [styles.contentAct]:
              cinema.achievement && !!cinema.achievement.length,
          })}
        >
          {isShowCount && <span className={styles.contentCount} />}
          {!isFirstRating ? (
            <>
              <CinemaLogo
                alt={cinema.name}
                logo={cinema.image}
                className={classNames(
                  styles.contentLogo,
                  'ratings_content__item__logo',
                  {
                    [logoClasses]: logoClasses,
                  },
                )}
              />
              <span className={styles.contentRate}>{cinema.metascore}</span>
            </>
          ) : (
            <>
              <span className={styles.contentRate}>{cinema.metascore}</span>
              <CinemaLogo
                alt={cinema.name}
                logo={cinema.image}
                className={classNames(
                  styles.contentLogo,
                  'ratings_content__item__logo',
                  {
                    [logoClasses]: logoClasses,
                  },
                )}
              />
            </>
          )}
          {(isLargeTablet || isDesktop) && isFirstReviewCount && (
            <ReviewCount
              url="/overview/[overviewSeoUrl]/reviews"
              as={`/overview/${cinema.seo_url}/reviews`}
            >
              {cinema.reviews_count}
            </ReviewCount>
          )}
          {(isMobile || isTablet) && (
            <>
              <BlankLink
                isRouterLink
                url="/overview/[overviewSeoUrl]"
                as={`/overview/${cinema.seo_url}`}
                className={classNames(styles.contentOverviewSVG, {
                  [styles.contentOverviewSVGHome]: isFirstRating,
                })}
              >
                <Image src="/img/overview-black.svg" alt="overview" />
              </BlankLink>
              <Globus
                url={cinema.url}
                className={classNames({
                  [styles.contentGlobus]: isFirstRating,
                })}
              />
            </>
          )}
          {cinema.referral_link &&
            (isFirstRating ? (
              isMobile || isTablet ? null : (
                <Bonus
                  title={cinema.referral_link.name}
                  referralLink={cinema.referral_link}
                  style={{
                    fontSize:
                      cinema.referral_link.name.length <= 14
                        ? '14px'
                        : cinema.referral_link.name.length <= 18
                        ? '11px'
                        : '9px',
                  }}
                  className={`${`bcont__${cinema.id}`} ratings_content__item__bcont ${
                    styles.contentBcont
                  }`}
                  bonusContentClasses={styles.contentBonus}
                />
              )
            ) : (
              <BlankLink
                style={{
                  fontSize:
                    cinema.referral_link.name.length <= 14
                      ? '14px'
                      : cinema.referral_link.name.length <= 18
                      ? '11px'
                      : '9px',
                }}
                url={cinema.referral_link.external_url}
                className={`${`bonus__for__${cinema.id}`} ${
                  styles.contentBonusBtn
                } ratings_content__item__bonus__btn`}
              >
                <span className={styles.contentBonusBtnSvg} />
                {cinema.referral_link.name}
              </BlankLink>
            ))}
          {isShowReviews && (
            <BlankLink
              isRouterLink
              className={styles.contentReviews}
              url="/overview/[overviewSeoUrl]/reviews"
              as={`/overview/${cinema.seo_url}/reviews`}
            >
              <span className={styles.contentReviewsCount}>
                {cinema.reviews_count}
                <span className={styles.contentReviewsCountSvg}>
                  <ReviewsCountSVG />
                </span>
              </span>
            </BlankLink>
          )}
          <BlankLink
            isRouterLink
            url="/overview/[overviewSeoUrl]"
            as={`/overview/${cinema.seo_url}`}
            className={`ratings_content__item__overview ${styles.contentOverview}`}
          >
            Обзор
          </BlankLink>
          <BlankLink
            url={cinema.url}
            className={`ratings_content__item__btn ${styles.contentBtn}`}
          >
            На сайт
          </BlankLink>
        </div>
        <div className={styles.contentSecond}>
          {cinema.referral_link && (
            <Bonus
              isFree
              subText="Получи бонус"
              title={cinema.referral_link.name}
              referralLink={cinema.referral_link}
              bonusContentClasses={styles.contentBonus}
              className={`ratings_content__item__bcont ${styles.contentBcont}`}
            />
          )}
        </div>
      </div>
      {(isLargeTablet || isDesktop) && (
        <div className={styles.contentContainer}>
          {ratingAchievments.length
            ? ratingAchievments.map((ach) => (
                <div
                  key={ach.id}
                  style={{
                    padding: ach.name.length >= 20 ? '5px 25px' : '5px 30px',
                  }}
                  className={styles.contentActive}
                >
                  <span className={styles.contentActiveNum}>
                    <Image src="/img/first.svg" alt="first" />
                  </span>
                  {ach.name}
                </div>
              ))
            : null}
        </div>
      )}
      {(isMobile || isTablet) && (
        <div className={styles.contentContainer}>
          {ratingAchievments.length
            ? ratingAchievments
                .filter((item, id) => id < 1)
                .map((ach) => (
                  <div key={ach.id} className={styles.contentActive}>
                    <span className={styles.contentActiveNum}>
                      <Image src="/img/first.svg" alt="first" />
                    </span>
                    {ach.name}
                  </div>
                ))
            : null}
        </div>
      )}
    </>
  );
};

RatingsContentItem.defaultProps = {
  isShowCount: false,
  logoClasses: '',
  isShowReviews: false,
  isFirstRating: false,
  isFirstReviewCount: false,
  firstItemClasses: '',
};

RatingsContentItem.propTypes = {
  cinema: PropTypes.object.isRequired,
  isShowCount: PropTypes.bool,
  logoClasses: PropTypes.string,
  isShowReviews: PropTypes.bool,
  isFirstRating: PropTypes.bool,
  isFirstReviewCount: PropTypes.bool,
  firstItemClasses: PropTypes.string,
};

export default RatingsContentItem;
