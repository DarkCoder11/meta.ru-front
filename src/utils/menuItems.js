import shortid from 'shortid';

export default [
  {
    id: shortid.generate(),
    route: '/cinemarating',
    text: 'Рейтинг кинотеатров',
  },
  {
    id: shortid.generate(),
    route: '/catalog',
    text: 'Каталог фильмов',
  },
  {
    id: shortid.generate(),
    route: '/overview',
    text: 'Обзоры',
  },
];

export const ratingMenuItem = [
  {
    id: shortid.generate(),
    route: '/cinemarating',
    text: 'Лучшие онлайн кинотеатры',
  },
  {
    id: shortid.generate(),
    route: '/cinemarating/russia',
    text: 'Кинотеатры России',
  },
  {
    id: shortid.generate(),
    route: '/cinemarating/besplatnye',
    text: 'Бесплатные',
  },
  {
    id: shortid.generate(),
    route: '/cinemarating/bez-reklamy',
    text: 'Без рекламы',
  },
  {
    id: shortid.generate(),
    route: '/cinemarating/legalnye',
    text: 'Легальные',
  },
  {
    id: shortid.generate(),
    route: '/cinemarating/bez-registracii',
    text: 'Без регистрации',
  },
  {
    id: shortid.generate(),
    route: '/cinemarating/smart-tv',
    text: 'Для Smart TV',
  },
  {
    id: shortid.generate(),
    route: '/cinemarating/platnye',
    text: 'Платные',
  },
];
