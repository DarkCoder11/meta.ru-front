import React from 'react';
import PropTypes from 'prop-types';

import AppLinkItem from './AppLinkItem';
import styles from './AppLinksContent.scss';

const AppLinksContent = ({ appLinks }) => {
  const renderLinks = () =>
    appLinks.map((appLink) =>
      appLink.app_type.name === 'Smart TV' ? null : (
        <AppLinkItem key={appLink.id} appType={appLink.app_type} {...appLink} />
      ),
    );

  return <div className={styles.container}>{renderLinks()}</div>;
};

AppLinksContent.propTypes = {
  appLinks: PropTypes.array.isRequired,
};

export default AppLinksContent;
