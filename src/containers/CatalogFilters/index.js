import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TypeFilter from './TypeFilter';
import YearFilter from './YearFilter';
import GenreFilter from './GenreFilter';
import styles from './CatalogFilters.scss';
import CountryFilter from './CountryFilter';
import SubGenreFilter from './SubGenreFilter';
import { Button, Image } from '../../components';
import { noop, useWindowSize } from '../../utils';

const CatalogFilters = ({
  onlyFilter,
  closeFilter,
  currentFilter,
  onFilterSelect,
  filtersMobileState,
}) => {
  const { isMobile, isTablet } = useWindowSize();
  const isTabletDevice = isMobile || isTablet;
  const filterProps = {
    closeFilter,
    isTabletDevice,
    onFilterSelect,
    filtersMobileState,
  };

  const renderFilter = () => {
    switch (currentFilter) {
      case 'genre':
        return <GenreFilter {...filterProps} />;
      case 'country':
        return <CountryFilter {...filterProps} />;
      case 'subgenre':
        return <SubGenreFilter {...filterProps} />;
      case 'type':
        return <TypeFilter {...filterProps} />;
      case 'year':
        return <YearFilter {...filterProps} />;

      default:
        return null;
    }
  };

  return onlyFilter ? (
    renderFilter()
  ) : (
    <div
      className={classNames(styles.container, {
        [styles.typeContainer]: currentFilter === 'type',
      })}
    >
      <Button onClick={closeFilter} className={styles.blockMore}>
        <Image src="/img/downArrow.svg" />
      </Button>
      {renderFilter()}
    </div>
  );
};

CatalogFilters.defaultProps = {
  onlyFilter: false,
  closeFilter: noop,
  onFilterSelect: noop,
  filtersMobileState: {},
};

CatalogFilters.propTypes = {
  onlyFilter: PropTypes.bool,
  closeFilter: PropTypes.func,
  onFilterSelect: PropTypes.func,
  filtersMobileState: PropTypes.object,
  currentFilter: PropTypes.string.isRequired,
};

export default CatalogFilters;
