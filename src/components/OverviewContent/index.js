import React from 'react';
import PropTypes from 'prop-types';

import styles from './OverviewContent.scss';
import OverviewContentItem from './OverviewContentItem';

const OverviewContent = ({ content }) => {
  const renderContent = () =>
    Object.keys(content).map((contentItem) =>
      content[contentItem].length && contentItem !== 'Фишки' ? (
        <OverviewContentItem
          key={contentItem}
          content={content}
          contentItem={contentItem}
        />
      ) : null,
    );

  return <div className={styles.container}>{renderContent()}</div>;
};

OverviewContent.propTypes = {
  content: PropTypes.object.isRequired,
};

export default OverviewContent;
