import React from 'react';
import PropTypes from 'prop-types';

import styles from './ReferenceInfo.scss';
import { TitleLayout } from '../../layouts';

const ReferenceInfo = ({
  referenceCompany,
  referenceAddress,
  referenceHelp,
}) => (
  <TitleLayout
    title="Справочная информация"
    titleClasses={styles.title}
    titleContainerClasses={styles.container}
  >
    <p className={styles.text}>{referenceHelp}</p>
    <div className={styles.content}>
      {referenceCompany && (
        <div className={styles.item}>
          <span className={styles.itemTitle}>Название компании:</span>
          <p className={styles.itemText}>{referenceCompany}</p>
        </div>
      )}
      {referenceAddress && (
        <div className={styles.item}>
          <span className={styles.itemTitle}>Адрес:</span>
          <p className={styles.itemText}>{referenceAddress}</p>
        </div>
      )}
    </div>
  </TitleLayout>
);

ReferenceInfo.defaultProps = {
  referenceHelp: '',
  referenceCompany: '',
  referenceAddress: '',
};

ReferenceInfo.propTypes = {
  referenceHelp: PropTypes.string,
  referenceCompany: PropTypes.string,
  referenceAddress: PropTypes.string,
};

export default ReferenceInfo;
