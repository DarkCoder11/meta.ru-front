export const RESET_CATALOG_FILTERS = '@MetaMovies/catalogFilters/RESET';
export const SET_CATALOG_FILTERS = '@MetaMovies/catalogFilters/SET';
export const REMOVE_CATALOG_FILTER = '@MetaMovies/catalogFilters/REMOVE';
export const RAISE_CATALOG_FILTERS = '@MetaMovies/catalogFilters/RAISE';

export const setCatalogFilters = (filterKey, filterValue) => ({
  type: SET_CATALOG_FILTERS,
  filterKey,
  filterValue,
});

export const removeCatalogFilters = (filterKey, filterValue) => ({
  type: REMOVE_CATALOG_FILTER,
  filterKey,
  filterValue,
});

export const resetFilters = () => ({
  type: RESET_CATALOG_FILTERS,
});

export const raiseFilter = (raisedFilters) => ({
  type: RAISE_CATALOG_FILTERS,
  raisedFilters,
});

export const removeCatalogFilter = (key, id) => (dispatch, getState) => {
  const { catalogFilters } = getState();

  const filtered = catalogFilters[key].filter((cinema) => cinema.id !== id);

  dispatch(removeCatalogFilters(key, filtered));
};
