import shortid from 'shortid';

const typeFilters = [
  {
    id: shortid.generate(),
    items: [
      {
        id: shortid.generate(),
        text: 'Фильм',
        type: 'film',
        isActive: false,
        key: 'types',
      },
      {
        id: shortid.generate(),
        text: 'Сериал',
        type: 'movie',
        isActive: false,
        key: 'types',
      },
      {
        id: shortid.generate(),
        text: 'Мультфильм',
        type: 'multfilm',
        isActive: false,
        key: 'types',
      },
    ],
  },
];

export default typeFilters;
