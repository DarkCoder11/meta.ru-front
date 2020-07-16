import React from 'react';
import PropTypes from 'prop-types';

import { BlankLink } from 'components/index';
import Image from '../NextImage';

import styles from './BonusContent.scss';

const BonusContentItem = ({ logoSrc, title, date, saleText, url, as }) => (
  <div className={styles.item}>
    <div className={styles.itemBg}>
      <Image alt="logo" src={logoSrc} className={styles.img} />
    </div>
    <div className={styles.itemContent}>
      <h4 className={styles.itemText}>{title}</h4>
      <span className={styles.itemDate}>{date}</span>
      <BlankLink className={styles.itemBtn} as={url} url={as} isRouterLink>
        {saleText}
      </BlankLink>
    </div>
  </div>
);

BonusContentItem.defaultProps = {
  url: '/',
  as: '/',
};

BonusContentItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  saleText: PropTypes.string.isRequired,
  url: PropTypes.string,
  as: PropTypes.string,
};

export default BonusContentItem;
