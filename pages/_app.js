import React from 'react';
import withYM from 'next-ym';
import NextApp from 'next/app';
import Router from 'next/router';
import { Provider } from 'react-redux';
import withError from 'next-with-error';
import NProgress from 'next-nprogress/component';
import Head from 'next/head';

import addTagManager from 'utils/addTagManager';
import { configureApp, constants } from 'utils/index';
import { getArticleCategories } from 'store/actions/articleCategoriesAction';
import { withReduxStore } from 'libraries/index';
import ErrorPage from './_error';

import 'moment/locale/ru';
import 'styles/base/index.global.scss';

configureApp();

class MyApp extends NextApp {
  static async getInitialProps(appContext) {
    const { ctx } = appContext;
    const { reduxStore } = ctx;
    const { dispatch } = reduxStore;

    const appProps = await NextApp.getInitialProps(appContext);

    if (constants.isServer) {
      await dispatch(getArticleCategories());
    }

    return {
      isServer: constants.isServer,
      ...appProps,
    };
  }

  render() {
    const { reduxStore, Component, pageProps, isServer } = this.props;
    const [GTMWithoutScript, GTMWithScript] = addTagManager();

    return (
      <Provider store={reduxStore}>
        {constants.isProduction && <Head>{GTMWithScript()}</Head>}
        <NProgress
          color="#601dc0"
          spinner={false}
          showAfterMs={300}
          options={{ trickleSpeed: 50 }}
        />
        {constants.isProduction && GTMWithoutScript()}
        <Component {...pageProps} isServer={isServer} />
      </Provider>
    );
  }
}

export default withYM(
  '56873377',
  Router,
)(withReduxStore(withError(ErrorPage)(MyApp)));
