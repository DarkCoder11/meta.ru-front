import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from '../NextImage';
import BlankLink from '../BlankLink';
import styles from '../../styles/Runet.scss';

const RunetItem = ({ cinema }) => (
  <div
    className={classNames(styles.containerItem, {
      [styles.containerItemBest]: cinema.achievement.length,
    })}
  >
    <div className={styles.containerItemContent}>
      <div className={styles.containerCount}>{cinema.metascore}</div>
      <div className={styles.containerIamge}>
        <Image alt={cinema.name} src={cinema.image} />
      </div>
      <BlankLink
        isRouterLink
        className={styles.containerOverview}
        url="/overview/[overviewSeoUrl]"
        as={`/overview/${cinema.seo_url}`}
      >
        <Image src="/img/overview.svg" alt="overview" />
      </BlankLink>
    </div>
    {cinema.achievement.length ? (
      <div className={styles.containerItemTextBlock}>
        <Image
          src="/img/star.svg"
          className={styles.containerStarIcon}
          alt="star"
        />
        <span className={styles.containerItemText}>
          {cinema.achievement[0].name}
        </span>
      </div>
    ) : null}
  </div>
);

RunetItem.propTypes = {
  cinema: PropTypes.object.isRequired,
};

export default RunetItem;
