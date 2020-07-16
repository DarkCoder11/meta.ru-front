import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { filter } from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from '../Filters.scss';
import { Button } from '../../../components';
import { typeFilters } from '../../../utils';
import { setCatalogFilters } from '../../../store/actions/catalogFiltersAction';
import { selectCatalogFiltersTypes } from '../../../store/selectors/catalogFiltersSelector';

const TypeFilter = ({
  closeFilter,
  isTabletDevice,
  onFilterSelect,
  catalogFilterTypes,
  filtersMobileState,
  setCatalogFiltersTypesHandler,
}) => {
  const [types, setTypes] = useState(typeFilters);
  const selectedTypes = filter(types, {
    items: [{ isActive: true }],
  });

  const resetSelectedTypes = (selectedArr = catalogFilterTypes) => {
    const updatedTypes = types.map((typeBlock) => {
      const items = typeBlock.items.map((item) => {
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
        ...typeBlock,
        items,
      };
    });

    setTypes(updatedTypes);
  };

  useEffect(() => {
    if (isTabletDevice) {
      resetSelectedTypes(filtersMobileState.types);
    }
  }, [isTabletDevice]);

  useEffect(() => {
    resetSelectedTypes();
  }, [catalogFilterTypes.length]);

  const getActiveTypes = (typesArr = types) => {
    const filteredTypes = [];

    typesArr.forEach((type) => {
      type.items.forEach((item) => {
        if (item.isActive) {
          filteredTypes.push(item);
        }
      });
    });

    return filteredTypes;
  };

  const confirmFilterHandler = () => {
    setCatalogFiltersTypesHandler('types', getActiveTypes());
    closeFilter();
  };

  const setActiveTypeHandler = (type) => {
    const updatedTypes = types.map((typeBlock) => {
      const items = typeBlock.items.map((item) => {
        if (item.type === type) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }

        return item;
      });

      return {
        ...typeBlock,
        items,
      };
    });

    setTypes(updatedTypes);
    if (isTabletDevice) {
      onFilterSelect('types', getActiveTypes(updatedTypes));
    }
  };

  const renderTypes = () =>
    types.map((typeBlock) => (
      <ul className={styles.list} key={typeBlock.id}>
        {typeBlock.items.map((item) => (
          <Button
            key={item.id}
            className={classNames(styles.text, {
              [styles.activeText]: item.isActive,
            })}
            onClick={() => setActiveTypeHandler(item.type)}
          >
            {item.text}
          </Button>
        ))}
      </ul>
    ));

  return (
    <>
      <div className={`${styles.container} ${styles.typeCont}`}>
        {renderTypes()}
      </div>
      <Button
        onClick={!selectedTypes.length ? closeFilter : confirmFilterHandler}
        className={classNames(styles.chooseBtn, {
          [styles.chooseBtnDisabled]: !selectedTypes.length,
        })}
      >
        Применить
      </Button>
    </>
  );
};

TypeFilter.propTypes = {
  closeFilter: PropTypes.func.isRequired,
  onFilterSelect: PropTypes.func.isRequired,
  isTabletDevice: PropTypes.bool.isRequired,
  catalogFilterTypes: PropTypes.array.isRequired,
  filtersMobileState: PropTypes.object.isRequired,
  setCatalogFiltersTypesHandler: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  catalogFilterTypes: selectCatalogFiltersTypes(),
});

const mapDispatchToProps = {
  setCatalogFiltersTypesHandler: setCatalogFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter);
