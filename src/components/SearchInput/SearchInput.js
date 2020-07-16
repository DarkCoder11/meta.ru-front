import React, { useState, useRef, memo } from 'react';
import Router, { useRouter } from 'next/router';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import OverlaySearchResult from './OverlaySearchResult';
import Image from '../NextImage';
import Button from '../Button';
import Input from '../Input';

import styles from './SearchInput.scss';

// this method here, because in function debounce does`t work
const handleChangeWithDebounce = debounce(
  (setValue, value) => setValue(value),
  500,
);

const SearchInput = ({
  pathname,
  queryKey,
  resetable,
  containerClasses,
  defaultSearchValue,
}) => {
  const inputRef = useRef();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(
    defaultSearchValue || router.query[queryKey],
  );
  const [overlayIsActive, setOverlayIsActive] = useState(false);
  const [query, setQuery] = useState(
    defaultSearchValue || router.query[queryKey],
  );

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    if (overlayIsActive) {
      handleChangeWithDebounce.cancel();
      handleChangeWithDebounce(setQuery, event.target.value);
    }
  };

  Router.events.on('routeChangeComplete', () => {
    document.body.style.overflow = '';
  });

  const searchHandler = () => {
    const isReadyToClear = resetable && router.query.search;

    const search = isReadyToClear ? '' : searchValue;
    const pageQuery = router.query.page ? { page: 1 } : {};

    if (isReadyToClear) {
      setSearchValue('');
      Router.push({
        pathname,
        query: { ...pageQuery },
      });
    } else {
      Router.push({
        pathname,
        query: { ...pageQuery, [queryKey]: search },
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      searchHandler();
    }
  };

  const handleFocus = () => {
    if (router.pathname === '/') {
      setOverlayIsActive(true);
    }
  };

  const handleBlur = (event) => {
    setOverlayIsActive(false);
    setSearchValue('');
    setQuery('');
    event.target.blur();
  };

  const handleInputFocus = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const searchWrapClassName = overlayIsActive ? styles.wrapActive : styles.wrap;

  const renderInput = (
    <div
      className={classNames(searchWrapClassName, {
        [containerClasses]: containerClasses,
      })}
    >
      <Input
        type="text"
        value={searchValue}
        inputRef={inputRef}
        onClick={handleFocus}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={`${styles.input} `}
        placeholder="Введите название фильма"
      />
      <Button className={styles.btn} onClick={searchHandler}>
        <Image
          alt="search_icon"
          title="search_icon"
          src={
            resetable && router.query.search
              ? '/img/close__menu__white.svg'
              : '/img/Search__icon.svg'
          }
        />
      </Button>
    </div>
  );

  return (
    <OverlaySearchResult
      query={query}
      handleBlur={handleBlur}
      handleFocus={handleInputFocus}
      overlayIsActive={overlayIsActive}
    >
      {renderInput}
    </OverlaySearchResult>
  );
};

SearchInput.defaultProps = {
  pathname: '',
  resetable: false,
  queryKey: 'search',
  containerClasses: '',
  defaultSearchValue: '',
};

SearchInput.propTypes = {
  resetable: PropTypes.bool,
  queryKey: PropTypes.string,
  pathname: PropTypes.string,
  containerClasses: PropTypes.string,
  defaultSearchValue: PropTypes.string,
};

export default memo(SearchInput);
