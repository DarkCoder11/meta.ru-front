import shortid from 'shortid';

export default [
  {
    id: shortid.generate(),
    rank: 3,
    isTop: true,
    nomination: '“Фильмы с лучшими спецэффектами”',
  },
  {
    id: shortid.generate(),
    rank: 7,
    nomination: '“Лучшие фильмы в 3D”',
  },
  {
    id: shortid.generate(),
    rank: 32,
    nomination: '“Лучшие семейные комедии 2010-х годов”',
  },
];
