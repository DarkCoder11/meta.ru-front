import shortid from 'shortid';

export default [
  { id: shortid.generate(), url: '/', title: 'Главная' },
  {
    id: shortid.generate(),
    active: true,
    title: 'Фильмы',
  },
];
