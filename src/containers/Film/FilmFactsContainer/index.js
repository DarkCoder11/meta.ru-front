import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/index';
import { TitleLayout } from 'layouts/index';

import styles from './FilmFactsContainer.scss';

const FilmFactsContainer = ({ refName }) => (
  <div ref={refName} className={styles.container}>
    <TitleLayout title="Знаете ли вы, что" titleClasses={styles.title}>
      <div className={styles.item}>
        21 августа 2009 года было объявлено «всемирным днем Аватара». В этот
        день по всей планете состоялись показы 15-минутного фрагмента картины.
      </div>
      <div className={styles.item}>
        События картины разворачиваются на Пандоре, спутнике со средой, похожей
        на земную, вращающемся по орбите планеты-гиганта Полифемуса в системе
        Альфа Центавра-А.
      </div>
      <div className={styles.item}>
        Изначально Джеймс Кэмерон планировал выпустить картину на экраны в 1999
        году. Однако, учитывая сложность и масштабность спецэффектов, которые
        собирался создать Кэмерон, бюджет фильма должен был составить около $400
        миллионов. Даже несмотря на гигантский кассовый успех «Титаника» (1997)
        ни одна студия не могла позволить себе выделить такие средства. Проект
        лег на полку, где находился около 10 лет.
      </div>
      <Button className={styles.more}>Еще 21 факт</Button>
    </TitleLayout>
  </div>
);

FilmFactsContainer.propTypes = {
  refName: PropTypes.any.isRequired,
};

export default FilmFactsContainer;
