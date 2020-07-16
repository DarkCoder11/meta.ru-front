import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../Slider';
import { TitleLayout } from '../../layouts';
import styles from './AuthoritativeInfo.scss';
import AuthoritativeInfoItem from './AuthoritativeInfoItem';

const AuthoritativeInfo = ({ authoritativeSliderItems }) => {
  const renderSlideItems = () =>
    authoritativeSliderItems.map(({ id, ...item }) => (
      <AuthoritativeInfoItem key={id} {...item} />
    ));

  return (
    <div className={`${styles.container} authoritative`}>
      <TitleLayout
        title="Оценка авторитетных источников"
        titleClasses={styles.title}
        titleRowClasses={styles.titleRow}
      >
        <div className={styles.slider}>
          <Slider carouselClasses={styles.carousel} gutter={10}>
            {renderSlideItems()}
          </Slider>
        </div>
      </TitleLayout>
    </div>
  );
};

AuthoritativeInfo.propTypes = {
  authoritativeSliderItems: PropTypes.array.isRequired,
};

export default AuthoritativeInfo;
