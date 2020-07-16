import { axios } from '../../utils';

export const GET_ARTICLE_CATEGORIES = '@MetaMovies/articleCategories/GET';

export const loadArticleCategories = (articleCategories) => ({
  type: GET_ARTICLE_CATEGORIES,
  articleCategories,
});

export const getArticleCategories = () => (dispatch) =>
  new Promise((resolve, reject) => {
    axios
      .get(`/website/category`)
      .then(({ data }) => {
        const changedCategories = data.map(({ id, seo_url: seoUrl, name }) => ({
          id,
          text: name,
          queryKey: 'categoryUrl',
          queryValue: seoUrl,
          href: '/[categoryUrl]',
          route: `/${seoUrl}`,
        }));

        resolve(changedCategories);
        dispatch(loadArticleCategories(changedCategories));
      })
      .catch((error) => reject(error));
  });
