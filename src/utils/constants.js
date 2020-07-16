import shortid from 'shortid';

const moviesRatingBreadCrumbs = [
  { id: shortid.generate(), url: '/', title: 'Главная' },
  {
    active: true,
    id: shortid.generate(),
    title: 'Рейтинг кинотеатров',
  },
];

const isServer = typeof window === 'undefined';

const isProduction = process.env.NODE_ENV === 'production';

export default { moviesRatingBreadCrumbs, isServer, isProduction };
