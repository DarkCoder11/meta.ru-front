import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Image from '../NextImage';
import styles from './Bonus.scss';
import BlankLink from '../BlankLink';
import { useWindowSize } from '../../utils';

const Bonus = (props) => {
  const {
    url,
    icon,
    title,
    isFree,
    subText,
    className,
    children,
    referralLink,
    isRouterLink,
    bonusIconClasses,
    bonusContentClasses,
    ...restProps
  } = props;
  const { isMobile, isLargeTablet, isDesktop } = useWindowSize();

  return (
    <BlankLink
      {...restProps}
      isRouterLink={isRouterLink}
      url={url || referralLink.external_url}
      className={classNames(styles.bonus, { [className]: className })}
    >
      {icon ? (
        <div
          className={classNames(styles.icon, {
            [bonusIconClasses]: bonusIconClasses,
          })}
        >
          <Image src={icon} alt="bonus" />
        </div>
      ) : (
        (isFree || !isMobile) && (
          <div
            className={classNames(styles.icon, {
              [bonusIconClasses]: bonusIconClasses,
            })}
          >
            <Image src="/img/bonus.svg" alt="bonus" />
          </div>
        )
      )}
      <div
        className={classNames(styles.content, {
          [bonusContentClasses]: bonusContentClasses,
        })}
      >
        <span className={styles.title}>{title}</span>
        {(isLargeTablet || isDesktop) && <span className={styles.subtitle}>{subText}</span>}
      </div>
      {children}
    </BlankLink>
  );
};

Bonus.defaultProps = {
  url: '',
  icon: '',
  isFree: false,
  referralLink: {},
  isRouterLink: false,
  className: undefined,
  children: [],
  title: '',
  subText: '',
  bonusIconClasses: '',
  bonusContentClasses: '',
};

Bonus.propTypes = {
  icon: PropTypes.any,
  url: PropTypes.string,
  isFree: PropTypes.bool,
  subText: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  isRouterLink: PropTypes.bool,
  referralLink: PropTypes.object,
  bonusIconClasses: PropTypes.string,
  bonusContentClasses: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Bonus;
