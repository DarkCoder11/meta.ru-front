import React from 'react';
import PropTypes from 'prop-types';
import styles from './SupportInfo.scss';

const SupportInfo = ({ supportPhone, supportEmail }) => (
  <>
    {supportPhone && (
      <div className={styles.item}>
        <div>
          <h4 className={styles.itemTitle}>
            Бесплатный номер телефона для обращений:{' '}
          </h4>
          <h5 className={styles.itemSubtitle}>
            Обратите внимание, что ваш звонок будет записан.
          </h5>
        </div>
        <a href="tel:+78002344923" className={styles.itemBtn}>
          {supportPhone}
        </a>
      </div>
    )}
    {supportEmail && (
      <div className={styles.item}>
        <div>
          <h4 className={styles.itemTitle}>E-mail службы поддержки:</h4>
          <h5 className={styles.itemSubtitle}>
            В письме нужно указать логин/идентификатор.
          </h5>
        </div>
        <a href="mailto:support@ivi.ru" className={styles.itemBtn}>
          {supportEmail}
        </a>
      </div>
    )}
  </>
);

SupportInfo.defaultProps = {
  supportPhone: '',
  supportEmail: '',
};

SupportInfo.propTypes = {
  supportPhone: PropTypes.string,
  supportEmail: PropTypes.string,
};

export default SupportInfo;
