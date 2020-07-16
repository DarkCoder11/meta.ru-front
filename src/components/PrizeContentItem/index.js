import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from '../NextImage';
import styles from './PrizeContentItem.scss';

const PrizeContentItem = ({
  prizes,
  className,
  prizeIcon,
  prizeText,
  prizeTitle,
  nominations,
}) => {
  const rendPrizes = () =>
    prizes.map((prize) => <p key={prize.id}>{prize.text}</p>);

  const rendNominations = () =>
    nominations.map((nomination) => (
      <p key={nomination.id}>{nomination.text}</p>
    ));

  return (
    <div
      className={classNames(styles.prize, {
        [className]: className,
      })}
    >
      <div className={styles.icon}>
        <Image src={prizeIcon} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <p>{prizeTitle}</p>
        </div>
        <div className={styles.contentSubtitle}>
          <p>{prizeText}</p>
        </div>
        {prizes && !!prizes.length && (
          <div className={styles.contentText}>{rendPrizes()}</div>
        )}
        {nominations && !!nominations.length && (
          <div className={styles.contentNomination}>
            <p className={styles.contentNominationTitle}>
              {`Номинации: ${nominations.length}`}
            </p>
            {rendNominations()}
          </div>
        )}
      </div>
      <span />
    </div>
  );
};

PrizeContentItem.defaultProps = {
  prizes: [],
  className: '',
  prizeIcon: '',
  prizeText: '',
  prizeTitle: '',
  nominations: [],
};

PrizeContentItem.propTypes = {
  prizes: PropTypes.array,
  prizeIcon: PropTypes.string,
  className: PropTypes.string,
  prizeText: PropTypes.string,
  prizeTitle: PropTypes.string,
  nominations: PropTypes.array,
};

export default PrizeContentItem;
