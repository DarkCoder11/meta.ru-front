import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import ScrollLock from 'react-scrolllock';
import { createStructuredSelector } from 'reselect';

import styles from './Nav.scss';
import MenuSVG from '../../../public/img/menu.svg';
import { Menu, Button, Link } from '../../components';
import CloseSVG from '../../../public/img/close__menu.svg';
import { useWindowSize, menuItems, noop } from '../../utils';
import { selectArticleCategories } from '../../store/selectors/articleCategoriesSelector';

const Nav = ({
  className,
  isLogoWhite,
  menuProps,
  onMenuOpen,
  menuClasses,
  toggleClasses,
  openIconClasses,
  articleCategories,
}) => {
  const { isMobile } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);
  const finallyMenuItems = [...menuItems, ...articleCategories];

  Router.events.on('routeChangeComplete', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  const toggleMenuopenHandler = () => {
    setMenuOpen(!menuOpen);
    onMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (!isMobile && menuOpen) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <nav
      className={classNames({
        [styles.nav]: !className,
        [className]: className,
      })}
    >
      <div className="container">
        <div className={styles.navContent}>
          <Button
            className={classNames(styles.navToggler, {
              [toggleClasses]: toggleClasses,
            })}
            onClick={toggleMenuopenHandler}
          >
            {!menuOpen && (
              <MenuSVG
                alt="menu"
                width={16}
                height={16}
                className={openIconClasses}
              />
            )}
            {menuOpen && <CloseSVG width={13} height={13} alt="close-menu" />}
            <ScrollLock isActive={menuOpen} />
          </Button>
          <Link to="/" className={styles.navLogo}>
            <img
              alt="Metaratings"
              src={
                isLogoWhite && !menuOpen
                  ? '/img/logo-white.svg'
                  : '/img/logo.svg'
              }
            />
          </Link>
          <Menu
            {...menuProps}
            isDarkTop={isLogoWhite}
            isMobileOpen={menuOpen}
            items={finallyMenuItems}
            menuClasses={menuClasses}
            toggleMenuopenHandler={toggleMenuopenHandler}
          />
        </div>
      </div>
    </nav>
  );
};

Nav.defaultProps = {
  className: '',
  menuProps: {},
  menuClasses: '',
  onMenuOpen: noop,
  toggleClasses: '',
  isLogoWhite: false,
  openIconClasses: '',
};

Nav.propTypes = {
  onMenuOpen: PropTypes.func,
  menuProps: PropTypes.object,
  isLogoWhite: PropTypes.bool,
  className: PropTypes.string,
  menuClasses: PropTypes.string,
  toggleClasses: PropTypes.string,
  openIconClasses: PropTypes.string,
  articleCategories: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articleCategories: selectArticleCategories(),
});

export default connect(mapStateToProps)(Nav);
