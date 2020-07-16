import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getSearch, removeSearchData } from 'store/actions/searchAction';
import useWindowSize from 'utils/useWindowSize';

import OverlaySearchContent from './OverlaySearchContent';
import Button from '../Button';

import styles from './OverlaySearchResult.scss';

const OverlaySearchResult = ({
  query,
  overlayIsActive,
  handleBlur,
  handleFocus,
  children,
}) => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.search.search) || [];
  const size = useWindowSize();
  const isEmptyQuery = query === '';
  const handleKeyDown = (event) => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      handleBlur(event);
    }
  };

  useEffect(() => {
    if (!isEmptyQuery) {
      dispatch(getSearch(query));
    } else {
      dispatch(removeSearchData());
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [query]);
  useEffect(() => {
    if (overlayIsActive) {
      handleFocus();
    }

    if (overlayIsActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [overlayIsActive]);

  if (!overlayIsActive) {
    return children;
  }

  return (
    <div className={styles.overlay}>
      <Button type="button" onClick={handleBlur} className={styles.closeLeft} />
      <div className={styles.container}>{children}</div>
      <OverlaySearchContent
        data={data}
        isEmptyQuery={isEmptyQuery}
        query={query}
        size={size}
      />
      <Button
        type="button"
        onClick={handleBlur}
        className={styles.closeRight}
      />
    </div>
  );
};

OverlaySearchResult.defaultProps = {
  query: '',
  overlayIsActive: false,
};

OverlaySearchResult.propTypes = {
  query: PropTypes.string,
  overlayIsActive: PropTypes.bool,
  handleBlur: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default OverlaySearchResult;
