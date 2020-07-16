import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './Article.scss';
import BlankLink from '../BlankLink';

const ArticleItem = ({
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
    <BlankLink isRouterLink className={styles.item} url={url} as={as}>
      <div className={styles.itemData}>
        <span className={styles.hour}>{dateHoured}</span>
        <span className={styles.day}>{dateDM}</span>
      </div>
      <p className={styles.itemText}>{title}</p>
    </BlankLink>
  );
};

ArticleItem.defaultProps = {
  category: {},
  creation_datetime: '',
};

ArticleItem.propTypes = {
  title: PropTypes.string.isRequired,
  creation_datetime: PropTypes.string,
  seo_url: PropTypes.string.isRequired,
  category: PropTypes.object,
};

export default ArticleItem;
