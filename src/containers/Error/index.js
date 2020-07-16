import React from 'react';
import styles from './Error.scss';
import { Image, SearchInput, BlankLink } from '../../components';

const ErrorContainer = () => (
  <div className={`full-container ${styles.error}`}>
    <Image className={styles.poster} src="/img/404.png" />
    <p className={styles.description}>
      Мы не нашли фильм, который вы искали – попробуйте еще раз!
    </p>
    <SearchInput
      queryKey="query"
      pathname="/search"
      containerClasses={styles.search}
    />
    <BlankLink className={styles.homelink} isRouterLink url="/">
      Вернуться на главную
    </BlankLink>
  </div>
);

export default ErrorContainer;
