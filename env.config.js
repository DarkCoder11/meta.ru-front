const env = process.env.ENV || 'development';

const configs = {
  development: {
    api: 'https://movies.dev.accede.ru',
  },
  staging: {
    api: 'https://movies.dev.accede.ru',
  },
  production: {
    api: 'https://movies.accede.ru',
  },
}[env];

export default configs;
