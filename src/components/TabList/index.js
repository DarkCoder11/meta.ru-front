import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TabListItem from './TabListItem';
import styles from './TabList.scss';
import { noop, useSticky } from '../../utils';

const TabList = ({
  tabs,
  stickyTop,
  setActiveTab,
  stickyClasses,
  onActiveTabChange,
  stickyItemClasses,
  containerClassName,
}) => {
  const [tabList, setTabList] = useState(tabs);
  const [tabBarRef, sticky] = useSticky(stickyTop);

  useEffect(() => {
    setTabList(tabs);
  }, [tabs]);

  const tabChangeHandler = (id) => {
    setActiveTab(id);

    const updatedList = tabs.map((tab, index) => {
      if (tab.id === id) {
        onActiveTabChange(tab, index);

        return {
          ...tab,
          isActive: true,
        };
      }
      return {
        ...tab,
        isActive: false,
      };
    });

    setTabList(updatedList);
  };

  const renderTabs = () =>
    tabList.map((tab) => (
      <TabListItem
        {...tab}
        key={tab.id}
        isSticky={sticky}
        setActiveTab={tabChangeHandler}
        stickyItemClasses={stickyItemClasses}
      />
    ));

  return (
    <div
      ref={tabBarRef}
      className={classNames(styles.container, {
        [containerClassName]: containerClassName,
        [stickyClasses]: sticky,
      })}
    >
      {renderTabs()}
    </div>
  );
};

TabList.defaultProps = {
  tabs: [],
  stickyTop: 15,
  stickyClasses: '',
  setActiveTab: noop,
  containerClassName: '',
  stickyItemClasses: '',
  onActiveTabChange: noop,
};

TabList.propTypes = {
  tabs: PropTypes.array,
  setActiveTab: PropTypes.func,
  onActiveTabChange: PropTypes.func,
  stickyTop: PropTypes.number,
  stickyClasses: PropTypes.string,
  stickyItemClasses: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default TabList;
