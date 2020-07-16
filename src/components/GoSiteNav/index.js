import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './GoSiteNav.scss';
import { useWindowSize } from '../../utils';
import { Rate, Bonus, CinemaLogo, BlankLink, Globus } from '..';

const GoSiteNav = ({
  image,
  isGlobus,
  metascore,
  cinemaURL,
  cinemaName,
  className,
  btnClasses,
  logoClasses,
  isOverview,
  cinemaSeoUrl,
  isArticle,
  rateClasses,
  reviewsCount,
  bonusClasses,
  referralLink,
  bonusIconClasses,
  bonusReviewsClasses,
  bonusContentClasses,
}) => {
  const {
    isMobile,
    isTablet,
    isLargeTablet,
    isDesktop,
  } = useWindowSize();

  return (
    <div className={classNames(styles.container, { [className]: className })}>
      <Rate className={rateClasses} rate={metascore} />
      <CinemaLogo logo={image} alt={cinemaName} className={logoClasses} />
      {!reviewsCount ? null : (
        <Bonus
          isRouterLink
          icon="/img/reviews__overview.svg"
          subText="Отзывов"
          title={reviewsCount}
          url="/overview/[overviewSeoUrl]/reviews"
          as={`/overview/${cinemaSeoUrl}/reviews`}
          bonusContentClasses={bonusContentClasses}
          bonusIconClasses={bonusIconClasses}
          className={bonusReviewsClasses}
        />
      )}
      {referralLink &&
        (isLargeTablet || isDesktop ? (
          <Bonus
            isFree
            subText="Получи бонус"
            title={referralLink.name}
            referralLink={referralLink}
            bonusContentClasses={bonusContentClasses}
            bonusIconClasses={bonusIconClasses}
            className={bonusClasses}
          />
        ) : (
          !isOverview && null
        ))}
      {(isMobile || isTablet) && isArticle && (
        <Bonus
          isFree
          subText="Получи бонус"
          title={referralLink.name}
          referralLink={referralLink}
          bonusContentClasses={bonusContentClasses}
          bonusIconClasses={bonusIconClasses}
          className={bonusClasses}
        />
      )}
      {(isMobile || isTablet) && isGlobus ? (
        <Globus url={cinemaURL} />
      ) : (
        <BlankLink
          url={cinemaURL}
          className={classNames(styles.btn, {
            [btnClasses]: btnClasses,
          })}
        >
          Перейти на сайт
        </BlankLink>
      )}
    </div>
  );
};

GoSiteNav.defaultProps = {
  cinemaSeoUrl: '',
  isOverview: false,
  className: '',
  btnClasses: '',
  bonusClasses: '',
  logoClasses: '',
  rateClasses: '',
  isGlobus: false,
  referralLink: {},
  reviewsCount: 0,
  isArticle: false,
  cinemaSubject: 0,
  bonusIconClasses: '',
  bonusContentClasses: '',
  bonusReviewsClasses: '',
};

GoSiteNav.propTypes = {
  isGlobus: PropTypes.bool,
  isArticle: PropTypes.bool,
  cinemaSeoUrl: PropTypes.string,
  isOverview: PropTypes.bool,
  reviewsCount: PropTypes.number,
  logoClasses: PropTypes.string,
  className: PropTypes.string,
  btnClasses: PropTypes.string,
  bonusClasses: PropTypes.string,
  rateClasses: PropTypes.string,
  bonusIconClasses: PropTypes.string,
  referralLink: PropTypes.object,
  cinemaSubject: PropTypes.number,
  image: PropTypes.string.isRequired,
  bonusReviewsClasses: PropTypes.string,
  cinemaName: PropTypes.string.isRequired,
  bonusContentClasses: PropTypes.string,
  metascore: PropTypes.number.isRequired,
  cinemaURL: PropTypes.string.isRequired,
};

export default GoSiteNav;
