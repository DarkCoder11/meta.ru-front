import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Image from '../NextImage';
import styles from './MoviesFilterItem.scss';
import { useWindowSize, noop } from '../../utils';
import CatalogFilters from '../../containers/CatalogFilters';

const MoviesFilterItem = ({
  text,
  type,
  openFilter,
  isKeyFilter,
  currentFilter,
  onFilterSelect,
  containerClasses,
  filtersMobileState,
  mobileContainerClasses,
}) => {
  const [isMoreFilter, setIsMoreFilter] = useState(false);
  const isChoose = currentFilter === type;
  const { isMobile, isTablet } = useWindowSize();
  const isTabletDevice = isMobile || isTablet;

  const toggleFilterHandler = () => {
    setIsMoreFilter(!isMoreFilter);
  };

  const renderButton = (buttonRest, imageRest) => (
    <Button
      onClick={() => openFilter(type)}
      className={classNames(styles.container, {
        [containerClasses]: containerClasses,
      })}
      {...buttonRest}
    >
      <span
        className={classNames(styles.text, {
          [styles.activeFilter]: isChoose,
          [styles.activeFilterText]: isKeyFilter,
        })}
      >
        {text}
      </span>
      <div className={styles.more}>
        <Image {...imageRest} src="/img/downArrow.svg" />
      </div>
    </Button>
  );

  return isTabletDevice ? (
    <div className={mobileContainerClasses}>
      {renderButton(
        { onClick: toggleFilterHandler },
        {
          className: classNames({
            [styles.expandedArrow]: isMoreFilter,
          }),
        },
      )}
      {isMoreFilter && (
        <CatalogFilters
          onlyFilter
          currentFilter={type}
          onFilterSelect={onFilterSelect}
          filtersMobileState={filtersMobileState}
        />
      )}
    </div>
  ) : (
    renderButton()
  );
};

MoviesFilterItem.defaultProps = {
  currentFilter: '',
  containerClasses: '',
  onFilterSelect: noop,
  filtersMobileState: [],
  mobileContainerClasses: '',
};

MoviesFilterItem.propTypes = {
  onFilterSelect: PropTypes.func,
  currentFilter: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  containerClasses: PropTypes.string,
  filtersMobileState: PropTypes.object,
  openFilter: PropTypes.func.isRequired,
  isKeyFilter: PropTypes.bool.isRequired,
  mobileContainerClasses: PropTypes.string,
};

export default MoviesFilterItem;
