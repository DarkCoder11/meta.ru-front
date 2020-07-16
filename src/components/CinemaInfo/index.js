import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import { noop } from '../../utils';
import styles from './CinemaInfo.scss';

const CinemaInfo = ({
  className,
  setAppRef,
  cinemaInfo,
  isShowGetBtn,
  additionalInfo,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    setAppRef(containerRef);

    const changeTableParent = () => {
      const tableNodes = containerRef.current.querySelectorAll('table');

      tableNodes.forEach((node) => {
        const newNode = document.createElement('div');
        const nodeParent = node.parentNode;

        newNode.className = 'info__table__parent';
        newNode.appendChild(node);
        nodeParent.append(newNode);
      });
    };
    changeTableParent();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={classNames(styles.text, {
          [className]: className,
        })}
        /** Waiting for normal json data from backend and immediately I'll remove  @dangerouslySetInnerHTML */
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: cinemaInfo,
        }}
      />
      {additionalInfo}
      {isShowGetBtn && (
        <Button className={styles.btn}>Получить месяц бесплатно от Ivi</Button>
      )}
    </>
  );
};

CinemaInfo.defaultProps = {
  setAppRef: noop,
  className: null,
  isShowGetBtn: true,
  additionalInfo: null,
};

CinemaInfo.propTypes = {
  setAppRef: PropTypes.func,
  isShowGetBtn: PropTypes.bool,
  className: PropTypes.string,
  additionalInfo: PropTypes.any,
  cinemaInfo: PropTypes.string.isRequired,
};

export default CinemaInfo;
