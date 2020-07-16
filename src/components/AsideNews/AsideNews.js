import React, { memo } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { BlankLink } from 'components/index';

import styles from './AsideNews.scss';

const dateHoured = (date) => moment(date).format('HH:MM');
const dateDM = (date) => moment(date).format('DD MMM');

const AsideNewsItem = ({ data }) => {
  return (
    <div className={styles.list}>
      {data.map(({ id, title, category, date, seo_url }) => (
        <div className={styles.item} key={id}>
          <div className={styles.itemHeader}>
            <span className={styles.date}>{dateDM(date)}</span>
            <span className={styles.date}>{dateHoured(date)}</span>
          </div>
          <BlankLink
            url="/[categoryUrl]/[seoUrl]"
            as={`${category.seo_url}/${seo_url}`}
            className={styles.title}
            isRouterLink
          >
            {title}
          </BlankLink>
        </div>
      ))}
    </div>
  );
};

const AsideNews = () => {
  // fix it as soon as possible
  const data = useSelector((store) => store.news.results) || [];
  return (
    <aside className={styles.wrap}>
      <h3 className={styles.mainTitle}>Новости</h3>
      <AsideNewsItem data={data} />
      <BlankLink
        url="/[categoryUrl]"
        as="/news"
        className={styles.bottomLink}
        isRouterLink
      >
        Все новости
      </BlankLink>
    </aside>
  );
};

AsideNewsItem.propTypes = {
  data: PropTypes.array.isRequired,
};

export default memo(AsideNews);
