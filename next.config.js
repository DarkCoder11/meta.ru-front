/* eslint-disable no-param-reassign */
const path = require('path');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withOffline = require('next-offline');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withOptimizedImages = require('next-optimized-images');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const resourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: ['./src/styles/base/vars.scss', './src/styles/base/mixins.scss'],
  },
};

require('dotenv').config();

const nextConfig = withPlugins(
  [
    [
      withSass,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 2,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
    withCSS,
    withFonts,
    withImages,
    [
      withOffline,
      {
        workboxOpts: {
          swDest: process.env.NEXT_EXPORT
            ? 'service-worker.js'
            : 'static/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'offlineCache',
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
        experimental: {
          async rewrites() {
            return [
              {
                source: '/service-worker.js',
                destination: '/_next/static/service-worker.js',
              },
            ];
          },
        },
      },
    ],
    withBundleAnalyzer,
    withOptimizedImages,
  ],
  {
    webpack: (config, { dev }) => {
      config.resolve.alias.components = path.join(__dirname, 'src/components');
      config.resolve.alias.containers = path.join(__dirname, 'src/containers');
      config.resolve.alias.libraries = path.join(__dirname, 'src/libraries');
      config.resolve.alias.layouts = path.join(__dirname, 'src/layouts');
      config.resolve.alias.routes = path.join(__dirname, 'src/routes');
      config.resolve.alias.styles = path.join(__dirname, 'src/styles');
      config.resolve.alias.utils = path.join(__dirname, 'src/utils');
      config.resolve.alias.store = path.join(__dirname, 'src/store');
      config.resolve.alias.public = path.join(__dirname, 'public');

      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        }),
      );

      config.module.rules.forEach((rule) => {
        if (
          rule.test.source.includes('scss') ||
          rule.test.source.includes('sass')
        ) {
          rule.use.push(resourcesLoader);
        }

        if (rule.test.toString().includes('.scss')) {
          rule.rules = rule.use.map((useRule) => {
            if (typeof useRule === 'string') {
              return { loader: useRule };
            }

            if (useRule.loader.startsWith('css-loader')) {
              return {
                oneOf: [
                  {
                    test: new RegExp('.global.scss$'),
                    loader: useRule.loader,
                    options: { ...useRule.options, modules: false },
                  },
                  {
                    loader: useRule.loader,
                    options: useRule.options,
                  },
                ],
              };
            }

            return useRule;
          });

          delete rule.use;
        }
      });

      if (!dev) {
        config.plugins.push(new OptimizeCSSAssetsPlugin({}));
      }

      return config;
    },
    env: {
      ENV: process.env.ENV,
    },
  },
);

module.exports = nextConfig;
