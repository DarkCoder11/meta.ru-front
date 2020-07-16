import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Menu.scss';
import NavLink from '../NextLink';

const MenuItem = ({
  route,
  href,
  text,
  linkClasses,
  isMobileOpen,
  activeClassName,
  toggleMenuopen,
  ...restProps
}) => {
  const anchorClickHandler = () => isMobileOpen && toggleMenuopen();

  return (
    <NavLink
      as={route}
      {...restProps}
      to={href || route}
      className={classNames(styles.link, {
        [linkClasses]: linkClasses,
      })}
      activeClassName={classNames(styles.link__active, {
        [activeClassName]: activeClassName,
      })}
      anchorProps={{ onClick: anchorClickHandler }}
    >
      {text}
    </NavLink>
  );
};

MenuItem.defaultProps = {
  href: '',
  linkClasses: '',
  activeClassName: '',
};

MenuItem.propTypes = {
  href: PropTypes.string,
  linkClasses: PropTypes.string,
  activeClassName: PropTypes.string,
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  isMobileOpen: PropTypes.bool.isRequired,
  toggleMenuopen: PropTypes.func.isRequired,
};

export default MenuItem;
