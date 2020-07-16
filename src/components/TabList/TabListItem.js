import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';
import styles from './TabList.scss';

const TabListItem = ({
  id,
  title,
  isSticky,
  isActive,
  setActiveTab,
  stickyItemClasses,
}) => (
  <Button
    onClick={() => setActiveTab(id)}
    className={classNames(styles.containerItem, {
      [styles.active]: isActive,
      [stickyItemClasses]: isSticky,
    })}
  >
    {title}
  </Button>
);

TabListItem.defaultProps = {
  isActive: false,
  isSticky: false,
};

TabListItem.propTypes = {
  isActive: PropTypes.bool,
  isSticky: PropTypes.bool,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  stickyItemClasses: PropTypes.string.isRequired,
};

export default TabListItem;
