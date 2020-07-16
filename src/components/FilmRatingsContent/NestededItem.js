import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useSwipeable } from 'react-swipeable';

import Bonus from '../Bonus';
import Image from '../NextImage';
import BlankLink from '../BlankLink';
import { useWindowSize } from '../../utils';
import styles from './FilmRatingsContent.scss';
import Star from '../../../public/img/star.svg';
import Comment from '../../../public/img/reviews__overview.svg';

const NestededItem = ({
  url,
  rate,
  isBest,
  logoSrc,
  logoAlt,

  isRadiused,
  achievement,
  reviewsCount,
  seo_url: seoUrl,
  containerClasses,
  referral_link: referralLink,
  payment_offers: paymentOffers,
}) => {
  const { isMobile, isTablet, isLargeTablet, isDesktop } = useWindowSize();
  const [isSwiping, setIsSwiping] = useState(false);
  const [isSwipedLeft, setIsSwipedLeft] = useState(false);
  const { pricingType } = useSelector((state) => state.movie);
  const option = pricingType;
  const achievementContent = achievement[0]
    ? achievement[0].name
    : 'Лучшее предложение';

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
    <div
      className={classNames(styles.container, {
        [containerClasses]: containerClasses,
        [styles.radiusedContainer]: isRadiused,
      })}
    >
      <div
        className={classNames({
          [styles.radiused]: isRadiused,
          [styles.radiusedBordered]: isRadiused && isBest,
          [containerClasses]: containerClasses,
          [styles.itemBestBordered]: isBest,
        })}
      >
        <div
          {...handlers}
          className={classNames(styles.item, {
            [styles.itemSwiped]: isSwipedLeft,
            [styles.itemBest]: isBest,
            [styles.itemRadiused]: isRadiused,
          })}
        >
          <div
            className={classNames(styles.itemFirst, {
              [styles.itemFirstSwiping]: isSwiping,
            })}
          >
            <div className={styles.rating}>{rate}</div>
            <div
              className={classNames(styles.cinema, {
                [styles.cinemaActive]: isBest,
              })}
            >
              <div>
                <BlankLink
                  url="/overview/[overviewSeoUrl]"
                  as={`/overview/${seoUrl}`}
                  isRouterLink
                >
                  <Image src={logoSrc} alt={logoAlt} isLocal={false} />
                </BlankLink>
              </div>
              {isBest && (
                <div className={styles.cinemaTop}>
                  <Star />
                  <p
                    style={{
                      fontSize: achievementContent.length > 10 ? 10 : 12,
                    }}
                  >
                    {achievementContent}
                  </p>
                </div>
              )}
            </div>
            <BlankLink
              isRouterLink
              as={`/overview/${seoUrl}/reviews`}
              url="/overview/[overviewSeoUrl]/reviews"
            >
              <div className={styles.review}>
                <div className={styles.reviewIcon}>
                  <Comment />
                </div>
                <p className={styles.reviewCount}>{reviewsCount}</p>
              </div>
            </BlankLink>
            <BlankLink url={url} className={classNames(styles.itemLink)}>
              {isMobile || isTablet ? 'Смотреть':'Смотреть онлайн'}
            </BlankLink>
          </div>
          <div className={styles.itemData}>
            {referralLink && (
              <Bonus
                isFree
                title={referralLink.name}
                referralLink={referralLink}
              />
            )}
          </div>
        </div>
      </div>
      {isBest && (isMobile || isTablet) && (
        <div
          className={classNames(styles.active, {
            [styles.activeRadiused]: isRadiused,
          })}
        >
          <Star />
          <p
            style={{
              fontSize: achievementContent.length > 10 ? 10 : 12,
            }}
          >
            {achievementContent}
          </p>
        </div>
      )}
    </div>
  );
};

NestededItem.defaultProps = {
  rate: 87,
  isBest: false,
  logoAlt: '',
  achievement: [],
  reviewsCount: 739,
  isRadiused: false,
  payOption: null,
  containerClasses: '',
  logoSrc: '/media/cinemas_images/ivi.png',
};

NestededItem.propTypes = {
  rate: PropTypes.number,
  isBest: PropTypes.bool,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  payOption: PropTypes.any,
  isRadiused: PropTypes.bool,
  achievement: PropTypes.array,
  reviewsCount: PropTypes.number,
  containerClasses: PropTypes.string,
  url: PropTypes.string.isRequired,
  seo_url: PropTypes.string.isRequired,
  subject_id: PropTypes.number.isRequired,
  referral_link: PropTypes.object.isRequired,
  payment_offers: PropTypes.array.isRequired,
};

export default NestededItem;
