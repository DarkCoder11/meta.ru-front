import { createSelector } from 'reselect';

export const selectState = () => (state) => state.articleCategories;

export const selectArticleCategories = () =>
  createSelector(
    selectState(),
    (articleCategoriesState) => articleCategoriesState,
  );
