import shortid from 'shortid';

const genreFilters = [
  {
    id: shortid.generate(),
    items: [
      {
        id: shortid.generate(),
        text: 'Биографии',
        genre: 'biography',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Боевики',
        genre: 'thriller',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Военное кино',
        genre: 'war',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Детективы',
        genre: 'detective',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Документальное',
        genre: 'documentary',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Драмы',
        genre: 'drama',
        isActive: false,
        key: 'genres',
      },
    ],
  },
  {
    id: shortid.generate(),
    items: [
      {
        id: shortid.generate(),
        text: 'Историческое кино',
        genre: 'historical',
      },
      {
        id: shortid.generate(),
        text: 'Комедии',
        genre: 'comedy',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Криминальное кино',
        genre: 'criminal',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Мелодрамы',
        genre: 'melodrama',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Музыкальное кино',
        genre: 'musical',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Приключения',
        genre: 'adventure',
        isActive: false,
        key: 'genres',
      },
    ],
  },
  {
    id: shortid.generate(),
    items: [
      {
        id: shortid.generate(),
        text: 'Семейное кино',
        genre: 'domestic',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Спорт',
        genre: 'sport',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Триллеры',
        genre: 'thrillers',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Ужасы',
        genre: 'horror',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Фантастика',
        genre: 'fantasy',
        isActive: false,
        key: 'genres',
      },
      {
        id: shortid.generate(),
        text: 'Фентези',
        genre: 'fentezi',
        isActive: false,
        key: 'genres',
      },
    ],
  },
];

export default genreFilters;
