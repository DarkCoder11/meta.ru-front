import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const HelmetWrapper = (props) => {
  const { children, title, metaDescription, tagLink } = props;

  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
        {tagLink}
      </Head>
      {children}
    </>
  );
};

HelmetWrapper.defaultProps = {
  title: '',
  metaDescription: '',
  tagLink: null,
};

HelmetWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  tagLink: PropTypes.node,
  metaDescription: PropTypes.string,
};

export default HelmetWrapper;
