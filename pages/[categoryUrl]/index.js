import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { generatePageError } from 'next-with-error';

import { constants } from 'utils/index';
import { getArticleCategories } from 'store/actions/articleCategoriesAction';
import { getArticles } from 'store/actions/articlesAction';
import { HelmetWrapper, MainLayout } from 'layouts/index';
import { getSeoInfo } from 'store/actions/seoInfoAction';
import { getRating } from 'store/actions/ratingAction';

import {
  AriclesHeaderContainer,
  ArticlesMainContainer,
} from 'containers/index';

import styles from 'styles/ArticlesPage.scss';

const ArticleCategoryPage = ({
  title,
  page,
  isServer,
  categoryUrl,
  articlesSeoInfo,
}) => {
  const dispatch = useDispatch();

  const fetchArticlesCSR = async () => {
    try {
      await dispatch(getArticles({ categoryUrl, page }));
    } catch {
      generatePageError(404);
    }
  };

  useEffect(() => {
    if (!isServer) {
      fetchArticlesCSR();
    }
  }, [categoryUrl, page]);
  return (
    <HelmetWrapper
      title={articlesSeoInfo.title}
      metaDescription={articlesSeoInfo.description}
      tagLink={page !== 1 && (<link rel="canonical" href="https://meta.ru/wiki" />)}
    >
      <MainLayout>
        <div className={styles.container}>
          <AriclesHeaderContainer tagName={title} />
          <ArticlesMainContainer title={title} isHeader />
        </div>
      </MainLayout>
    </HelmetWrapper>
  );
};

ArticleCategoryPage.getInitialProps = async ({ reduxStore, query }) => {
  const { dispatch, getState } = reduxStore;
  const { page, categoryUrl } = query;

  try {
    const runetPromise = dispatch(getRating('ru_net'));

    const articleSeoDataPromise = dispatch(getSeoInfo('articles-page'));

    if (constants.isServer) {
      await dispatch(getArticles({ categoryUrl, page }));
    }

    if (!getState().articleCategories.length) {
      const articleCategoriesPromise = dispatch(getArticleCategories());

      await articleCategoriesPromise;
    }

    const [articleSeoData] = await Promise.all([
      articleSeoDataPromise,
      runetPromise,
    ]);

    const { articles, articleCategories } = getState();
    const { text } = articleCategories.find(
      (item) => item.queryValue === categoryUrl,
    );

    return {
      query,
      page,
      articles,
      title: text,
      categoryUrl,
      articlesSeoInfo:
        query.page !== 1 && query.page !== undefined
          ? {
              ...articleSeoData.seo_info.tags,
              title: `${categoryUrl} | Страница ${query.page}`,
            }
          : articleSeoData.seo_info.tags,
    };
  } catch {
    return {
      error: {
        statusCode: 404,
      },
    };
  }
};

ArticleCategoryPage.defaultProps = {
  page: '1',
  articles: {},
};

ArticleCategoryPage.propTypes = {
  page: PropTypes.string,
  articles: PropTypes.object,
  title: PropTypes.string.isRequired,
  isServer: PropTypes.bool.isRequired,
  categoryUrl: PropTypes.string.isRequired,
  articlesSeoInfo: PropTypes.object.isRequired,
};

export default ArticleCategoryPage;
