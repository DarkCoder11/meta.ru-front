import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PopPicker from 'rmc-date-picker/lib/Popup';
import DatePicker from 'rmc-date-picker/lib/DatePicker';

import styles from '../Filters.scss';
import { useWindowSize } from '../../../utils';
import { CompoundSlider, Button } from '../../../components';
import { setCatalogFilters } from '../../../store/actions/catalogFiltersAction';
import { selectCatalogFiltersYear } from '../../../store/selectors/catalogFiltersSelector';

const YearFilter = ({
  closeFilter,
  onFilterSelect,
  filtersMobileState,
  catalogFilterYears,
  setCatalogFiltersHandler,
}) => {
  const { isMobile, isTablet } = useWindowSize();

  const now = new Date();
  const isTabletDevice = isMobile || isTablet;
  const minDate = new Date(1911, 1);
  const maxDate = new Date(2020, 1);
  const initialStartDate = new Date(1952, 8);

  const [endDate, setEndDate] = useState(now);
  const [startDate, setStartDate] = useState(initialStartDate);
  const sliderDates = [startDate.getFullYear(), endDate.getFullYear()];

  const datePicker = (
    <DatePicker
      mode="year"
      minDate={minDate}
      maxDate={maxDate}
      defaultDate={now}
      rootNativeProps={{ 'data-xx': 'yy' }}
    />
  );

  const resetSelectedYears = (selectedArr = catalogFilterYears) => {
    if (!selectedArr.length) {
      setEndDate(now);
      setStartDate(initialStartDate);
    } else {
      setEndDate(selectedArr[0].endDate);
      setStartDate(selectedArr[0].startDate);
    }
  };

  useEffect(() => {
    if (isTabletDevice) {
      resetSelectedYears(filtersMobileState.years);
    }
  }, [isTabletDevice]);

  useEffect(() => {
    resetSelectedYears();
  }, [catalogFilterYears.length]);

  const onYearChangeHandler = (years) => {
    const newStartDate = new Date(years[0], 1);
    const newEndDate = new Date(years[1], 1);

    setEndDate(newEndDate);
    setStartDate(newStartDate);
  };

  const getActiveYearsHandler = () => {
    const years = [
      {
        id: shortid.generate(),
        key: 'years',
        startDate,
        endDate,
        text: `${sliderDates[0]}-${sliderDates[1]}`,
      },
    ];

    return years;
  };

  const confirmYearHandler = () => {
    setCatalogFiltersHandler('years', getActiveYearsHandler());
    closeFilter();
  };

  const onChange = (date, setDate) => {
    setDate(date);
    if (isTabletDevice) {
      onFilterSelect('years', getActiveYearsHandler());
    }
  };

  return (
    <div
      className={classNames({
        [styles.mobileContent]: isTabletDevice,
      })}
    >
      {!isTabletDevice ? (
        <>
          <div className={styles.currentYear}>
            <span>2020</span>
          </div>

          <div className={styles.sliderContainer}>
            <CompoundSlider
              values={sliderDates}
              onChange={onYearChangeHandler}
              sliderStyle={{
                position: 'relative',
                width: '100%',
                height: 78,
              }}
            />
          </div>
        </>
      ) : (
        <div className={styles.pickerContainer}>
          <PopPicker
            date={startDate}
            title="From date"
            datePicker={datePicker}
            maskTransitionName="rmc-picker-popup-fade"
            transitionName="rmc-picker-popup-slide-fade"
            onChange={(date) => onChange(date, setStartDate)}
          >
            <Button className={styles.pickerBtn}>
              {startDate.getFullYear()}
            </Button>
          </PopPicker>

          <span>-</span>
          <PopPicker
            date={endDate}
            title="To date"
            datePicker={datePicker}
            maskTransitionName="rmc-picker-popup-fade"
            transitionName="rmc-picker-popup-slide-fade"
            onChange={(date) => onChange(date, setEndDate)}
          >
            <Button className={styles.pickerBtn}>
              {endDate.getFullYear()}
            </Button>
          </PopPicker>
        </div>
      )}
      <Button onClick={confirmYearHandler} className={styles.chooseBtn}>
        Применить
      </Button>
    </div>
  );
};

YearFilter.propTypes = {
  closeFilter: PropTypes.func.isRequired,
  onFilterSelect: PropTypes.func.isRequired,
  catalogFilterYears: PropTypes.array.isRequired,
  filtersMobileState: PropTypes.object.isRequired,
  setCatalogFiltersHandler: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  catalogFilterYears: selectCatalogFiltersYear(),
});

const mapDispatchToProps = {
  setCatalogFiltersHandler: setCatalogFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(YearFilter);
