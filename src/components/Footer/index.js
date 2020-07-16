import React from 'react';
import NextImage from '../NextImage';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.content}>
      <div className={`container ${styles.contentContainer}`}>
        <NextImage
          alt="footer-logo"
          className={styles.logo}
          src="/img/footer__logo.svg"
        />
        <p className={styles.text}>
          Перепечатка материалов без согласования допустима при наличии
          dofollow-ссылки на страницу-источник.
        </p>
        <span className={styles.copyright}>
          Все права защищены Metaratings © 2008 — 2020
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
