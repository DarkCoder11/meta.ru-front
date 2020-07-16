import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './GameReklam.scss';
import { CinemaLogo, Bonus, BlankLink } from '..';

const GameReklam = ({
  image,
  isSticky,
  metascore,
  className,
  cinemaURL,
  cinemaName,
  referralLink,
}) => (
  <div
    className={classNames(styles.nav, {
      [className]: className,
      [styles.sticky]: isSticky,
    })}
  >
    <div className="container">
      <div className="main__container">
        <div className={styles.content}>
          <span className={styles.count}>{metascore}</span>
          <CinemaLogo logo={image} alt={cinemaName} className={styles.logo} />
          <Bonus
            isFree
            title={referralLink.name}
            subText="Получи бонус"
            referralLink={referralLink}
            className={styles.bonus}
          />
          <BlankLink url={cinemaURL} className={styles.startPlay}>
            Начать смотреть
          </BlankLink>
        </div>
      </div>
    </div>
  </div>
);

GameReklam.defaultProps = {
  isSticky: false,
  className: undefined,
};

GameReklam.propTypes = {
  isSticky: PropTypes.bool,
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  metascore: PropTypes.number.isRequired,
  cinemaURL: PropTypes.string.isRequired,
  cinemaName: PropTypes.string.isRequired,
  referralLink: PropTypes.object.isRequired,
};

export default GameReklam;
