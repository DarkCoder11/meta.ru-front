import React from 'react';
import PropTypes from 'prop-types';
import constants from './constants';

let ReactDOMServer;
if (constants.isServer) {
  // don`t change!!!
  // eslint-disable-next-line global-require
  ReactDOMServer = require('react-dom/server');
}

const Noscript = ({ children }) => {
  if (!ReactDOMServer) {
    return null;
  }
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(children);
  // eslint-disable-next-line react/no-danger
  return <noscript dangerouslySetInnerHTML={{ __html: staticMarkup }} />;
};

Noscript.defaultProps = {
  children: [],
};

Noscript.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};

export default Noscript;
