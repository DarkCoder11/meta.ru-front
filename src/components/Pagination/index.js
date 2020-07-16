import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'rc-pagination';

import { noop } from 'utils/index';

import Image from '../NextImage';
import Link from '../NextLink';

import './Pagination.global.scss';

const Pagination = ({
  totalCount,
  pageChange,
  pageSize,
  linkProps,
  ...rest
}) => {
  const { pathname, asPath } = linkProps;

  const renderItemsHandler = (current, type) => {
    const isNotFirst = current !== 0;
    const isNotLast = current !== pageSize - 1;
    const query = current !== 1 && isNotFirst ? { page: current } : {};
    const pageQuery = current !== 1 && isNotFirst ? `/?page=${current}` : '';
    const linkOtherProps = asPath ? { as: `${asPath}${pageQuery}` } : {};

    switch (type) {
      case 'prev':
        return (
          isNotFirst && (
            <Link to={{ pathname, query }} {...linkOtherProps}>
              <Image src="/img/leftArrow.svg" alt="Prev" />
            </Link>
          )
        );
      case 'next':
        return (
          isNotLast && (
            <Link to={{ pathname, query }} {...linkOtherProps}>
              <Image src="/img/rightArrow.svg" alt="Prev" />
            </Link>
          )
        );
      case 'jump-prev':
      case 'jump-next':
        return '...';

      default:
        return (
          <Link to={{ pathname, query }} {...linkOtherProps}>
            {current}
          </Link>
        );
    }
  };

  return (
    <ReactPaginate
      {...rest}
      showTitle={false}
      total={totalCount}
      pageSize={pageSize}
      prefixCls="content"
      onChange={pageChange}
      itemRender={renderItemsHandler}
    />
  );
};

Pagination.defaultProps = {
  pageChange: noop,
};

Pagination.propTypes = {
  pageChange: PropTypes.func,
  linkProps: PropTypes.object.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default Pagination;
