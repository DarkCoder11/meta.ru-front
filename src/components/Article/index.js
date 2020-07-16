import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ArticleItemWithPicture from 'components/Article/ArticleItemWithPicture';
import ArticleItem from './ArticleItem';

import styles from './Article.scss';

const Article = ({ articles, title, className, isHeader, isMain }) => {
  const renderArticles = () =>
    articles.map((item) =>
      isMain ? (
        <ArticleItemWithPicture key={item.id} {...item} />
      ) : (
        <ArticleItem key={item.id} {...item} />
      ),
    );

  return (
    <div
      className={classNames({
        [className]: className,
      })}
    >
      {isHeader ? (
        <h1 className={styles.title}>{title}</h1>
      ) : (
        <h2 className={styles.title}>{title}</h2>
      )}
      <div className={styles.content}>{renderArticles()}</div>
    </div>
  );
};

Article.defaultProps = {
  isHeader: false,
  isMain: false,
  className: undefined,
};

Article.propTypes = {
  isHeader: PropTypes.bool,
  isMain: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired,
};

export default Article;
