import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from '../Filters.scss';
import { Button } from '../../../components';
import { subgenreFilters } from '../../../utils';
import { setCatalogFilters } from '../../../store/actions/catalogFiltersAction';
import { selectCatalogFiltersSubGenres } from '../../../store/selectors/catalogFiltersSelector';

const SubGenreFilter = ({
  closeFilter,
  isTabletDevice,
  onFilterSelect,
  filtersMobileState,
  catalogFilterSubGenres,
  setCatalogFiltersHandler,
}) => {
  const [subgenres, setSubgenres] = useState(subgenreFilters);
  const selectedSubGenres = filter(subgenres, {
    items: [{ isActive: true }],
  });

  const resetSelectedSubGenres = (selectedArr = catalogFilterSubGenres) => {
    const updatedSubGenres = subgenres.map((subGenreBlock) => {
      const items = subGenreBlock.items.map((item) => {
        const filteredItem = selectedArr.find((type) => type.id === item.id);

        if (filteredItem) {
          return {
            ...item,
            isActive: true,
          };
        }

        return {
          ...item,
          isActive: false,
        };
      });

      return {
        ...subGenreBlock,
        items,
      };
    });

    setSubgenres(updatedSubGenres);
  };

  useEffect(() => {
    if (isTabletDevice) {
      resetSelectedSubGenres(filtersMobileState.subgenres);
    }
  }, [isTabletDevice]);

  useEffect(() => {
    resetSelectedSubGenres();
  }, [catalogFilterSubGenres.length]);

  const getActiveSubGenres = (subgenresArr = subgenres) => {
    const filteredSubGenres = [];

    subgenresArr.forEach((subgenre) => {
      subgenre.items.forEach((item) => {
        if (item.isActive) {
          filteredSubGenres.push(item);
        }
      });
    });

    return filteredSubGenres;
  };

  const confirmFilterHandler = () => {
    setCatalogFiltersHandler('subgenres', getActiveSubGenres());
    closeFilter();
  };

  const setActiveSubGenreHandler = (subgenre) => {
    const updatedSubgenres = subgenres.map((subGenreBlock) => {
      const items = subGenreBlock.items.map((item) => {
        if (item.genre === subgenre) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }

        return item;
      });

      return {
        ...subGenreBlock,
        items,
      };
    });

    setSubgenres(updatedSubgenres);
    if (isTabletDevice) {
      onFilterSelect('subgenres', getActiveSubGenres(updatedSubgenres));
    }
  };

  const renderSubgenres = () =>
    subgenres.map((subGenreBlock) => (
      <ul className={styles.list} key={subGenreBlock.id}>
        {subGenreBlock.items.map((item) => (
          <Button
            key={item.id}
            className={classNames(styles.text, {
              [styles.activeText]: item.isActive,
            })}
            onClick={() => setActiveSubGenreHandler(item.genre)}
          >
            {item.text}
          </Button>
        ))}
      </ul>
    ));

  return (
    <>
      <div className={styles.container}>{renderSubgenres()}</div>
      <Button
        className={classNames(styles.chooseBtn, {
          [styles.chooseBtnDisabled]: !selectedSubGenres.length,
        })}
        onClick={!selectedSubGenres.length ? closeFilter : confirmFilterHandler}
      >
        Применить
      </Button>
    </>
  );
};

SubGenreFilter.propTypes = {
  closeFilter: PropTypes.func.isRequired,
  isTabletDevice: PropTypes.bool.isRequired,
  onFilterSelect: PropTypes.func.isRequired,
  filtersMobileState: PropTypes.object.isRequired,
  catalogFilterSubGenres: PropTypes.array.isRequired,
  setCatalogFiltersHandler: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  catalogFilterSubGenres: selectCatalogFiltersSubGenres(),
});

const mapDispatchToProps = {
  setCatalogFiltersHandler: setCatalogFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubGenreFilter);
