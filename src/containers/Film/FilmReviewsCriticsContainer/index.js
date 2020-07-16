import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { reviewsCritictsTabs, filmCritics } from 'utils/index';

import { TitleLayout } from 'layouts/index';
import { Button, TabList, CriticReviewItem, Image } from 'components/index';

import styles from './FilmReviewsCriticsContainer.scss';

const FilmReviewsCriticsContainer = ({ refName }) => {
  const [activeTab, setActiveTab] = useState(reviewsCritictsTabs[0]);

  const tabChangeHandler = (updatedActiveTab) => {
    setActiveTab(updatedActiveTab);
  };

  const rendCritics = () =>
    filmCritics.map((crit) => <CriticReviewItem key={crit.id} {...crit} />);

  return (
    <div ref={refName} className={styles.container}>
      <TitleLayout
        titleClasses={styles.title}
        title="Отзывы и рецензии о фильме Аватар"
      >
        <TabList
          tabs={reviewsCritictsTabs}
          onActiveTabChange={tabChangeHandler}
          containerClassName={styles.nav}
        />
        <div className={styles.br} />
        <Button className={styles.slidLeft}>
          <Image
            className={styles.slidLeftIcon}
            src="/img/upArrow.svg"
            alt="slid"
          />
        </Button>
        <Button className={styles.slidRight}>
          <Image
            className={styles.slidRightIcon}
            src="/img/upArrow.svg"
            alt="slid"
          />
        </Button>
        {activeTab.id === 2 && (
          <>
            <div className={styles.icons}>{rendCritics()}</div>
            {/* it has been commented till backend don`t support reviews */}
            {/* <Button className={styles.feedback}>Оставить отзыв</Button> */}
            <Button className={styles.more}>Больше отзывов</Button>
          </>
        )}
        {activeTab.id === 1 && (
          <>
            <div className={styles.icons}>{rendCritics()}</div>
            <Button className={styles.more}>Больше отзывов</Button>
          </>
        )}
      </TitleLayout>
    </div>
  );
};

FilmReviewsCriticsContainer.propTypes = {
  refName: PropTypes.any.isRequired,
};

export default FilmReviewsCriticsContainer;
