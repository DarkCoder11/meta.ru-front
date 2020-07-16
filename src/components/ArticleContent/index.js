import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './ArticleContent.scss';
import { TitleLayout } from '../../layouts';
import { CinemaInfo, Tag, Article } from '..';

const ArticleContent = ({
  tags,
  title,
  author,
  content,
  articles,
  pathname,
}) => {
  const sortedArticles = _.orderBy(
    articles.results,
    (article) => moment(article.creation_datetime),
    ['desc'],
  ).filter((article, i) => i < 3);
  const seoTags = tags.filter((tag) => tag.name === 'seo');
  const isHideTags = seoTags.length === tags.length;

  return (
    <div className={styles.content}>
      <TitleLayout
        isHeader
        title={title}
        allowExpand={false}
        titleClasses={styles.cinemaInfoTitle}
      >
        <CinemaInfo
          isShowGetBtn={false}
          cinemaInfo={content}
          className={styles.text}
        />
      </TitleLayout>
      <div className={styles.postedBy}>
        <h4 className={styles.postedByText}>
          Опубликовал: <span>{author}</span>
        </h4>
        {/**
         ***<<< Commented for future, waiting for backend to send front @source in article >>>***

          <h4 className="postedBySource">
            Источник: <span>официальный сайт НХЛ</span>
          </h4>
        */}
      </div>
      <div className={styles.tags}>
        <h4 className={styles.tagsTitle}>Теги:</h4>
        <div className={styles.tagsRow}>
          {isHideTags
            ? null
            : tags.map((tag) =>
                tag.name === 'seo' ? null : (
                  <Tag key={tag.id} {...tag}>
                    {tag.name}
                  </Tag>
                ),
              )}
        </div>
      </div>
      {/**
         ***<<< Commented for future, waiting for backend to send front @rating in article >>>***

         <div className="rating">
            <div className="ratingTitle">
              <span>Рейтинг: </span>
              <span>4,5</span>
            </div>
            <ReactStars
              count={5}
              value={4.5}
              edit={false}
              // onChange={ratingChanged}
              size={24}
              color2={'#ffd700'}
            />
          </div>
        */}
      <Article
        pathname={pathname}
        title="Статьи по теме"
        className={styles.articles}
        articles={_.take(sortedArticles, 3)}
      />
    </div>
  );
};

ArticleContent.defaultProps = {
  articles: {},
};

ArticleContent.propTypes = {
  articles: PropTypes.object,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default ArticleContent;
