import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Breadcrumbs.scss';
import BreadcrumbsItem from './BreadcrumbsItem';

const Breadcrumbs = ({ links, containerStyle }) => {
  const renderLinks = () =>
    links.map((link) => <BreadcrumbsItem key={link.id} {...link} />);

  return (
    <div className={classNames(styles.breadcrumbs, containerStyle)}>
      {renderLinks()}
    </div>
  );
};

Breadcrumbs.defaultProps = {
  containerStyle: undefined,
};

Breadcrumbs.propTypes = {
  links: PropTypes.array.isRequired,
  containerStyle: PropTypes.string,
};

export default Breadcrumbs;
