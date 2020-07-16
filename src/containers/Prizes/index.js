import React from 'react';
import { TitleLayout } from '../../layouts';
import styles from './PrizesContainer.scss';
import { PrizeContentItem } from '../../components';
import { filmPrizes, filmPrizeNominations } from '../../utils';
import FilmBestDealContainer from '../Film/FilmBestDealContainer';

const PrizesContainer = () => {
  const rendPrizeContent = () =>
    filmPrizes.map((prize) => (
      <PrizeContentItem
        {...prize}
        key={prize.id}
        className={styles.items_right__prize}
      />
    ));

  const rendNominationsContent = () =>
    filmPrizeNominations.map((prize) => (
      <PrizeContentItem {...prize} key={prize.id} />
    ));

  return (
    <>
      <FilmBestDealContainer
        tabId={4}
        tabListName="initialActorsTabs"
        ratingsContentProps={{
          itemProps: { isRadiused: true },
        }}
      />
      <section className={styles.container}>
        <TitleLayout title="Награды и номинации" titleClasses={styles.title}>
          <div className={styles.items}>
            <div className={styles.itemsLeft}>{rendNominationsContent()}</div>
            <div className={styles.itemsRight}>{rendPrizeContent()}</div>
          </div>
        </TitleLayout>
      </section>
      <div className={styles.bottom} />
    </>
  );
};

export default PrizesContainer;
