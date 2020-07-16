import React, { useState, useEffect } from 'react';
import { filter } from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from '../Filters.scss';
import { Button } from '../../../components';
import { countryFilters } from '../../../utils';
import { setCatalogFilters } from '../../../store/actions/catalogFiltersAction';
import { selectCatalogFiltersCountries } from '../../../store/selectors/catalogFiltersSelector';

const CountryFilter = ({
  closeFilter,
  isTabletDevice,
  onFilterSelect,
  filtersMobileState,
  catalogFilterCountries,
  setCatalogFiltersHandler,
}) => {
  const [countries, setCountries] = useState(countryFilters);
  const selectedCountries = filter(countries, {
    items: [{ isActive: true }],
  });

  const resetSelectedCountries = (selectedArr = catalogFilterCountries) => {
    const updatedCountries = countries.map((countryBlock) => {
      const items = countryBlock.items.map((item) => {
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
        ...countryBlock,
        items,
      };
    });

    setCountries(updatedCountries);
  };

  useEffect(() => {
    if (isTabletDevice) {
      resetSelectedCountries(filtersMobileState.countries);
    }
  }, [isTabletDevice]);

  useEffect(() => {
    resetSelectedCountries();
  }, [catalogFilterCountries.length]);

  const getActiveCountries = (countriesArr = countries) => {
    const filteredCountries = [];

    countriesArr.forEach((country) => {
      country.items.forEach((item) => {
        if (item.isActive) {
          filteredCountries.push(item);
        }
      });
    });

    return filteredCountries;
  };

  const confirmFilterHandler = () => {
    setCatalogFiltersHandler('countries', getActiveCountries());
    closeFilter();
  };

  const setActiveCountryHandler = (country) => {
    const updatedCountry = countries.map((countryBlock) => {
      const items = countryBlock.items.map((item) => {
        if (item.country === country) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }

        return item;
      });

      return {
        ...countryBlock,
        items,
      };
    });

    setCountries(updatedCountry);

    if (isTabletDevice) {
      onFilterSelect('countries', getActiveCountries(updatedCountry));
    }
  };

  const renderCountries = () =>
    countries.map((countryBlock) => (
      <ul className={styles.list} key={countryBlock.id}>
        {countryBlock.items.map((item) => (
          <Button
            key={item.id}
            className={classNames(styles.text, {
              [styles.activeText]: item.isActive,
            })}
            onClick={() => setActiveCountryHandler(item.country)}
          >
            {item.text}
          </Button>
        ))}
      </ul>
    ));

  return (
    <>
      <div className={styles.container}>{renderCountries()}</div>
      <Button
        className={classNames(styles.chooseBtn, {
          [styles.chooseBtnDisabled]: !selectedCountries.length,
        })}
        onClick={!selectedCountries.length ? closeFilter : confirmFilterHandler}
      >
        Применить
      </Button>
    </>
  );
};

CountryFilter.propTypes = {
  closeFilter: PropTypes.func.isRequired,
  onFilterSelect: PropTypes.func.isRequired,
  isTabletDevice: PropTypes.bool.isRequired,
  filtersMobileState: PropTypes.object.isRequired,
  catalogFilterCountries: PropTypes.array.isRequired,
  setCatalogFiltersHandler: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  catalogFilterCountries: selectCatalogFiltersCountries(),
});

const mapDispatchToProps = {
  setCatalogFiltersHandler: setCatalogFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryFilter);
