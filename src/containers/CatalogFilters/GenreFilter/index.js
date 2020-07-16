import React, { useState, useEffect } from 'react';
import { filter } from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from '../Filters.scss';
import { Button } from '../../../components';
import { genreFilters } from '../../../utils';
import { setCatalogFilters } from '../../../store/actions/catalogFiltersAction';
import { selectCatalogFiltersGenres } from '../../../store/selectors/catalogFiltersSelector';

const GenreFilter = ({
  closeFilter,
  isTabletDevice,
  onFilterSelect,
  filtersMobileState,
  catalogFilterGenres,
  setCatalogFiltersHandler,
}) => {
  const [genres, setGenres] = useState(genreFilters);
  const selectedGenres = filter(genres, {
    items: [{ isActive: true }],
  });

  const resetSelectedGenres = (selectedArr = catalogFilterGenres) => {
    const updatedGenres = genres.map((genreBlock) => {
      const items = genreBlock.items.map((item) => {
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
        ...genreBlock,
        items,
      };
    });

    setGenres(updatedGenres);
  };

  useEffect(() => {
    if (isTabletDevice) {
      resetSelectedGenres(filtersMobileState.genres);
    }
  }, [isTabletDevice]);

  useEffect(() => {
    resetSelectedGenres();
  }, [catalogFilterGenres.length]);

  const getActiveGenres = (genresArr = genres) => {
    const filteredGenres = [];

    genresArr.forEach((genre) => {
      genre.items.forEach((item) => {
        if (item.isActive) {
          filteredGenres.push(item);
        }
      });
    });

    return filteredGenres;
  };

  const confirmFilterHandler = () => {
    setCatalogFiltersHandler('genres', getActiveGenres());
    closeFilter();
  };

  const setActiveGenreHandler = (genre) => {
    const updatedGenres = genres.map((genreBlock) => {
      const items = genreBlock.items.map((item) => {
        if (item.genre === genre) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }

        return item;
      });

      return {
        ...genreBlock,
        items,
      };
    });

    setGenres(updatedGenres);
    if (isTabletDevice) {
      onFilterSelect('genres', getActiveGenres(updatedGenres));
    }
  };

  const renderGenres = () =>
    genres.map((genreBlock) => (
      <ul className={styles.list} key={genreBlock.id}>
        {genreBlock.items.map((item) => (
          <Button
            key={item.id}
            className={classNames(styles.text, {
              [styles.activeText]: item.isActive,
            })}
            onClick={() => setActiveGenreHandler(item.genre)}
          >
            {item.text}
          </Button>
        ))}
      </ul>
    ));

  return (
    <>
      <div className={styles.container}>{renderGenres()}</div>
      <Button
        className={classNames(styles.chooseBtn, {
          [styles.chooseBtnDisabled]: !selectedGenres.length,
        })}
        onClick={!selectedGenres.length ? closeFilter : confirmFilterHandler}
      >
        Применить
      </Button>
    </>
  );
};

GenreFilter.propTypes = {
  closeFilter: PropTypes.func.isRequired,
  onFilterSelect: PropTypes.func.isRequired,
  isTabletDevice: PropTypes.bool.isRequired,
  filtersMobileState: PropTypes.object.isRequired,
  catalogFilterGenres: PropTypes.array.isRequired,
  setCatalogFiltersHandler: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  catalogFilterGenres: selectCatalogFiltersGenres(),
});

const mapDispatchToProps = {
  setCatalogFiltersHandler: setCatalogFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreFilter);
