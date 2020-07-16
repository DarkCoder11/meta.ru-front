import React from 'react';
import PropTypes from 'prop-types';

import Image from '../NextImage';
import BlankLink from '../BlankLink';
import styles from '../../styles/Runet.scss';

const RunetMobileItem = ({ cinema }) => (
  <BlankLink
    isRouterLink
    url="/overview/[overviewSeoUrl]"
    as={`/overview/${cinema.seo_url}`}
    className={styles.containerMobileItem}
  >
    <div className={styles.containerMobileItemContent}>
      <div className={styles.containerMobileCount}>{cinema.metascore}</div>
      <Image alt={cinema.name} src={cinema.image} />
      <div className={styles.containerMobileOverview}>
        <Image src="/img/overview.svg" alt="overview" />
      </div>
    </div>
  </BlankLink>
);

RunetMobileItem.propTypes = {
  cinema: PropTypes.object.isRequired,
};

export default RunetMobileItem;
