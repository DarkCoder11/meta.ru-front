import React, { useState } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';
import styles from './BackLeft.scss';
import { useScrollPosition } from '../../utils';

const BackLeft = ({ className }) => {
  const [isShowToTop, setIsShowToTop] = useState(false);

  useScrollPosition(({ currPos }) => {
    if (currPos.y <= -100 && !isShowToTop) {
      setIsShowToTop(true);
    }
    if (currPos.y >= -100 && isShowToTop) {
      setIsShowToTop(false);
    }
  });

  const backHandler = () => {
    if (isShowToTop) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      Router.back();
    }
  };

  return (
    <Button
      onClick={backHandler}
      className={classNames(styles.container, { [className]: className })}
    >
      <div
        className={classNames(styles.back, {
          [styles.backTop]: isShowToTop,
        })}
      >
        {isShowToTop ? 'Наверх' : 'Назад'}
      </div>
    </Button>
  );
};

BackLeft.defaultProps = {
  className: undefined,
};

BackLeft.propTypes = {
  className: PropTypes.string,
};

export default BackLeft;
