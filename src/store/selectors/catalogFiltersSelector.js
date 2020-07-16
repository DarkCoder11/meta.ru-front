import { createSelector } from 'reselect';

export const selectState = () => (state) => state.catalogFilters;

export const selectCatalogFiltersCinemas = () =>
  createSelector(selectState(), (catalogFilters) => catalogFilters.cinemas);

export const selectCatalogFiltersTypes = () =>
  createSelector(selectState(), (catalogFilters) => catalogFilters.types);

export const selectCatalogFiltersYear = () =>
  createSelector(selectState(), (catalogFilters) => catalogFilters.years);

export const selectCatalogFiltersGenres = () =>
  createSelector(selectState(), (catalogFilters) => catalogFilters.genres);

export const selectCatalogFiltersSubGenres = () =>
  createSelector(selectState(), (catalogFilters) => catalogFilters.subgenres);

export const selectCatalogFiltersCountries = () =>
  createSelector(selectState(), (catalogFilters) => catalogFilters.countries);

export const selectCatalogFilteredItems = () =>
  createSelector(selectState(), (catalogFilters) => catalogFilters.items);
