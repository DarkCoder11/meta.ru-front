import React from 'react';
import PropTypes from 'prop-types';

import BonusContentItem from './BonusContentItem';

import styles from './BonusContent.scss';

const BonusContent = ({ content }) => {
  const renderContent = () =>
    content.map((contentItem) => (
      <BonusContentItem key={contentItem.id} {...contentItem} />
    ));

  return <div className={styles.container}>{renderContent()}</div>;
};

BonusContent.propTypes = {
  content: PropTypes.array.isRequired,
};

export default BonusContent;
