import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import chooseArticlePlaceholder from 'utils/chooseArticlePlaceholder';
import BlankLink from '../BlankLink';

import styles from './Article.scss';

const ArticleItemWithPicture = ({
  title,
  seo_url: seoUrl,
  creation_datetime: date,
  category,
}) => {
  const categorySeoUUrl = category !== null ? category.seo_url : 'wiki';
  const url = '/[categoryUrl]/[seoUrl]';
  const as = `/${categorySeoUUrl}/${seoUrl}`;
  const dateHoured = moment(date).format('HH:MM');
  const dateDM = moment(date).format('DD MMM');
  return (
    <div className={styles.wrap}>
      <img
        src={chooseArticlePlaceholder(title)}
        className={styles.img}
        alt=""
      />
      <BlankLink isRouterLink className={styles.item} url={url} as={as}>
        <div className={styles.itemData}>
          <span className={styles.hour}>{dateHoured}</span>
          <span className={styles.day}>{dateDM}</span>
        </div>
        <p className={styles.itemText}>{title}</p>
      </BlankLink>
    </div>
  );
};

ArticleItemWithPicture.defaultProps = {
  category: {},
  creation_datetime: '',
};

ArticleItemWithPicture.propTypes = {
  title: PropTypes.string.isRequired,
  creation_datetime: PropTypes.string,
  seo_url: PropTypes.string.isRequired,
  category: PropTypes.object,
};

export default ArticleItemWithPicture;
