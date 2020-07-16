import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMovieInfo } from 'store/selectors/movieSelector';
import {
  filmBreadcrumbLinks,
  getDynamicImage,
  useWindowSize,
} from 'utils/index';

import Nav from '../../Nav';
import Breadcrumbs from '../../Breadcrumbs';

import styles from './FilmHeaderContainer.scss';

const FilmHeaderContainer = ({ info }) => {
  const { isMobile } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const noPoster = !isMobile ? '/img/noposter.png' : '/img/nopostermobile.png';

  const menuOpenListener = (menuOpen) => {
    setIsMenuOpen(menuOpen);
  };

  return (
    <header
      style={{
        backgroundImage: !isMobile
          ? 'url(/img/film_img.png)'
          : `url(${info.image ? getDynamicImage(info.image) : noPoster})`,
      }}
      className={classNames(styles.container, {
        [styles.noBackground]: isMenuOpen,
      })}
    >
      <div className={styles.linearTop} />
      <Nav
        isLogoWhite
        onMenuOpen={menuOpenListener}
        toggleClasses={styles.navFilms}
        openIconClasses={styles.navFilmsOpen}
        menuProps={{
          activeClassName: classNames({
            [styles.navActive]: !isMenuOpen,
            [styles.navLinkActive]: isMenuOpen,
          }),
          menuClasses: classNames({
            [styles.navFilmsMenu]: !isMenuOpen,
          }),
          linkClasses: classNames({
            [styles.navLink]: !isMenuOpen,
            [styles.navLinkMobile]: isMenuOpen,
          }),
        }}
        className={classNames({ [styles.nav]: !isMenuOpen })}
      />
      <Breadcrumbs
        breadcrumbsLinks={filmBreadcrumbLinks}
        className={styles.breadcrumbs}
      />
      <div className={styles.linearBottom} />
    </header>
  );
};

FilmHeaderContainer.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  info: selectMovieInfo(),
});

export default connect(mapStateToProps)(FilmHeaderContainer);
