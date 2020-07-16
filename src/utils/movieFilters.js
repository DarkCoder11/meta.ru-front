import shortid from 'shortid';

export default [
  {
    id: shortid.generate(),
    text: 'По типу',
    type: 'type',
    keyFactor: 'types',
  },
  {
    id: shortid.generate(),
    text: 'Жанры',
    type: 'genre',
    keyFactor: 'genres',
  },
  {
    id: shortid.generate(),
    text: 'Поджанры',
    type: 'subgenre',
    keyFactor: 'subgenres',
  },
  {
    id: shortid.generate(),
    text: 'Страна',
    type: 'country',
    keyFactor: 'countries',
  },
  {
    id: shortid.generate(),
    text: 'Год',
    type: 'year',
    keyFactor: 'years',
  },
];
