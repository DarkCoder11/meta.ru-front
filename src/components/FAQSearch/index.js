import React from 'react';

import styles from './FAQSearch.scss';
import { Button, Input, Image } from '..';

const FAQSearch = () => (
  <div className={styles.bar}>
    <Input type="text" placeholder="Введите ваш вопрос" />
    <Button className={styles.btn}>
      <Image src="/img/Search__icon.svg" alt="search" />
    </Button>
  </div>
);

export default FAQSearch;
