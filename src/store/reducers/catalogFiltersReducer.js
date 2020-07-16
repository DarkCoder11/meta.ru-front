import {
  SET_CATALOG_FILTERS,
  RAISE_CATALOG_FILTERS,
  RESET_CATALOG_FILTERS,
  REMOVE_CATALOG_FILTER,
} from '../actions/catalogFiltersAction';

const initialState = {
  cinemas: [],
  types: [],
  genres: [],
  subgenres: [],
  countries: [],
  years: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CATALOG_FILTERS:
      return {
        ...state,
        [action.filterKey]: action.filterValue,
      };
    case REMOVE_CATALOG_FILTER:
      return {
        ...state,
        [action.filterKey]: action.filterValue,
      };
    case RESET_CATALOG_FILTERS:
      return {
        ...state,
        ...initialState,
      };
    case RAISE_CATALOG_FILTERS:
      return {
        ...state,
        ...action.raisedFilters,
      };
    default:
      return state;
  }
};
