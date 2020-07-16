import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import paths from 'routes/';
import { ratingMenuItem } from 'utils/menuItems';

import Button from 'components/Button';
import MenuItem from './MenuItem';
import NavLink from '../NextLink';

import SearchSVG from '../../../public/img/search__icon__grey.svg';
import styles from './Menu.scss';

const Menu = ({
  items,
  isDarkTop,
  linkClasses,
  menuClasses,
  isMobileOpen,
  menuOpenClasses,
  activeClassName,
  toggleMenuopenHandler,
}) => {
  const [dropdownIsOpen, toggleDropdownIsOpen] = useState({
    rating: false,
    articles: false,
  });
  const hideDropdownMenu = (obj) =>
    !isMobileOpen && toggleDropdownIsOpen({ [obj]: false });
  const showDropdownMenu = (obj) =>
    !isMobileOpen && toggleDropdownIsOpen({ [obj]: true });
  const handleClick = (obj) =>
    isMobileOpen && toggleDropdownIsOpen({ [obj]: !dropdownIsOpen[obj] });
  const staticMenu = [
    ...items.slice(1, 3),
    ...items.filter(({ text }) => text === 'Акции' || text === 'Промокоды'),
  ];
  const dropDownMenu = items
    .slice(3)
    .filter(({ text }) => text !== 'Акции' && text !== 'Промокоды');
  const ratingItemList = isMobileOpen
    ? ratingMenuItem
    : ratingMenuItem.slice(1);

  const renderItems = (array) =>
    array.map(({ id, ...item }) => (
      <MenuItem
        key={id}
        {...item}
        linkClasses={linkClasses}
        isMobileOpen={isMobileOpen}
        activeClassName={activeClassName}
        toggleMenuopen={toggleMenuopenHandler}
      />
    ));
  const topPosition = isDarkTop ? { top: 0 } : { top: '60px' };
  const anchorClickHandler = () => isMobileOpen && toggleMenuopenHandler();
  return (
    <div
      className={classNames(styles.container, {
        [menuOpenClasses]: isMobileOpen,
        [styles.open]: isMobileOpen,
        [menuClasses]: menuClasses,
      })}
    >
      <Button
        className={
          dropdownIsOpen.rating ? styles.dropdownActive : styles.dropdown
        }
        onMouseEnter={() => showDropdownMenu('rating')}
        onMouseLeave={() => hideDropdownMenu('rating')}
        onClick={() => handleClick('rating')}
      >
        {!isMobileOpen && (
          <MenuItem
            route="/cinemarating"
            text="Рейтинг кинотеатров"
            linkClasses={linkClasses}
            isMobileOpen={isMobileOpen}
            activeClassName={activeClassName}
            toggleMenuopen={toggleMenuopenHandler}
          />
        )}
        {isMobileOpen && (
          <span className={styles.dropdownTitle}>
            Рейтинг кинотеатров
            {isMobileOpen && <span className={styles.dropdownArrow} />}
          </span>
        )}
        {dropdownIsOpen.rating && (
          <div className={styles.dropdownListUpperWrap} />
        )}
        <div className={styles.dropdownList}>{renderItems(ratingItemList)}</div>
      </Button>
      {renderItems(staticMenu)}
      <Button
        className={
          dropdownIsOpen.articles ? styles.dropdownActive : styles.dropdown
        }
        onMouseEnter={() => showDropdownMenu('articles')}
        onMouseLeave={() => hideDropdownMenu('articles')}
        onClick={() => handleClick('articles')}
      >
        {!isMobileOpen && (
          <span className={styles.dropdownTitle}>
            Еще({dropDownMenu.length})
          </span>
        )}
        {dropdownIsOpen.articles && (
          <div className={styles.dropdownListUpperWrap} />
        )}
        <div className={styles.dropdownList}>{renderItems(dropDownMenu)}</div>
      </Button>
      {isMobileOpen && renderItems(dropDownMenu)}
      {(dropdownIsOpen.rating || dropdownIsOpen.articles) && !isMobileOpen && (
        <div className={styles.overlay} style={topPosition} />
      )}
      <NavLink
        to={paths.searchMovies}
        className={styles.link}
        activeClassName={styles.link__active}
        anchorProps={{ onClick: anchorClickHandler }}
      >
        <SearchSVG />
      </NavLink>
    </div>
  );
};

Menu.defaultProps = {
  linkClasses: '',
  menuClasses: '',
  activeClassName: '',
  menuOpenClasses: '',
};

Menu.propTypes = {
  linkClasses: PropTypes.string,
  menuClasses: PropTypes.string,
  menuOpenClasses: PropTypes.string,
  activeClassName: PropTypes.string,
  items: PropTypes.array.isRequired,
  isDarkTop: PropTypes.bool.isRequired,
  isMobileOpen: PropTypes.bool.isRequired,
  toggleMenuopenHandler: PropTypes.func.isRequired,
};

export default Menu;
