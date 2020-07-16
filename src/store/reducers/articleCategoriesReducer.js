import { GET_ARTICLE_CATEGORIES } from '../actions/articleCategoriesAction';

export default (state = [], action = {}) => {
  switch (action.type) {
    case GET_ARTICLE_CATEGORIES:
      return action.articleCategories;
    default:
      return state;
  }
};
