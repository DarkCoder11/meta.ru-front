import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { generatePageError } from 'next-with-error';

import { constants } from 'utils/index';
import { getRating } from 'store/actions/ratingAction';
import { getCinemas } from 'store/actions/cinemasAction';
import { getArticle } from 'store/actions/articleAction';
import { HelmetWrapper, MainLayout } from 'layouts/index';
import { getArticles } from 'store/actions/articlesAction';
import { AriclesHeaderContainer, ArticleMainContainer } from 'containers/index';

import styles from 'styles/ArticlePage.scss';

const ArticlePage = ({ isServer, article, articleSeo, seo_url = 'wiki' }) => {
  const dispatch = useDispatch();

  const fetchArticlesCSR = async () => {
    try {
      await dispatch(getArticles());
    } catch {
      generatePageError(404);
    }
  };

  useEffect(() => {
    if (!isServer) {
      fetchArticlesCSR();
    }
  }, []);

  return (
    <HelmetWrapper
      title={articleSeo.title}
      metaDescription={articleSeo.description}
    >
      <MainLayout>
        <div className={styles.container}>
          <AriclesHeaderContainer tagName="Статьи" />
          <ArticleMainContainer
            pathname={seo_url}
            article={article}
            isHeader={false}
          />
        </div>
      </MainLayout>
    </HelmetWrapper>
  );
};

ArticlePage.getInitialProps = async ({ reduxStore, query }) => {
  const { dispatch } = reduxStore;

  try {
    const articlePromise = dispatch(
      getArticle(query.seoUrl, query.categoryUrl),
    );
    const cinemasPromise = dispatch(getCinemas());
    const runetPromise = dispatch(getRating('ru_net'));

    if (constants.isServer) {
      await dispatch(getArticles());
    }

    const [article] = await Promise.all([
      articlePromise,
      runetPromise,
      cinemasPromise,
    ]);

    return {
      article,
      articleSeo: article.seo_info.tags,
      seo_url: article.category.seo_url,
    };
  } catch {
    return {
      error: {
        statusCode: 404,
      },
    };
  }
};

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired,
  isServer: PropTypes.bool.isRequired,
  seo_url: PropTypes.string.isRequired,
  articleSeo: PropTypes.object.isRequired,
};

export default ArticlePage;
