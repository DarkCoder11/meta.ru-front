import React from 'react';
import PropTypes from 'prop-types';

import BlankLink from '../BlankLink';
import NextImage from '../NextImage';
import styles from './AppLinksContent.scss';

const AppLinkItem = ({ appType, url, icon }) => (
  <BlankLink url={url} target="_blank" className={styles.item}>
    <NextImage src={icon} alt="applink" />
    <div className={styles.itemBottom}>
      <span className={styles.downloadText}>Загрузите на</span>
      <span className={styles.itemName}>{appType.name}</span>
    </div>
  </BlankLink>
);

AppLinkItem.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  appType: PropTypes.object.isRequired,
};

export default AppLinkItem;
