import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ScrollLock from 'react-scrolllock';

import Button from '../Button';
import styles from './Modal.scss';

const Modal = ({
  isOpen,
  children,
  title,
  closeModal,
  popupClasses,
  containerRef,
}) => (
  <ScrollLock isActive={isOpen}>
    {isOpen ? (
      <div className={styles.block}>
        <div
          className={classNames(styles.popup, {
            [popupClasses]: popupClasses,
          })}
          ref={containerRef}
        >
          <Button onClick={closeModal} className={styles.close} />
          <h2 className={styles.title}>{title}</h2>
          {children}
        </div>
      </div>
    ) : null}
  </ScrollLock>
);

Modal.defaultProps = {
  title: '',
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  popupClasses: PropTypes.string.isRequired,
  containerRef: PropTypes.any.isRequired,
};

export default Modal;
