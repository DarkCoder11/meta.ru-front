import React from 'react';
import PropTypes from 'prop-types';

import { Image } from '..';
import styles from './OverviewContent.scss';

const OverviewContentItem = ({ contentItem, content }) => {
  let icon = null;

  switch (contentItem) {
    case 'Контент':
      icon = '/img/Info_content.svg';
      break;
    case 'Дополнительно':
      icon = '/img/additionally.svg';
      break;
    case 'Устройства':
      icon = '/img/devices.svg';
      break;
    case 'Удобство':
      icon = '/img/convenience.svg';
      break;

    default:
      break;
  }

  return (
    <div className={styles.item}>
      <Image src={icon} alt="info" />
      <div className={styles.itemTextBlock}>
        <h4 className={styles.itemTitle}>{contentItem}</h4>
        {content[contentItem].map((listItem) => (
          <div key={listItem.id} className={styles.itemText}>
            {listItem.name}
          </div>
        ))}
      </div>
    </div>
  );
};

OverviewContentItem.propTypes = {
  content: PropTypes.object.isRequired,
  contentItem: PropTypes.string.isRequired,
};

export default OverviewContentItem;
