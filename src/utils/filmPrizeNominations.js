import shortid from 'shortid';

export default [
  {
    id: shortid.generate(),
    prizeIcon: '/img/Oscar_icon.svg',
    prizeTitle: 'Оскар, 2010',
    prizeText: 'Победитель: 3',
    prizes: [
      {
        id: shortid.generate(),
        text: 'Лучшая работа оператора',
      },
      {
        id: shortid.generate(),
        text: 'Лучшие декорации',
      },
      {
        id: shortid.generate(),
        text: 'Лучшие визуальные эффекты',
      },
    ],
    nominations: [
      { id: shortid.generate(), text: 'Лучший фильм' },
      { id: shortid.generate(), text: 'Лучший режиссер' },
      { id: shortid.generate(), text: 'Лучший звук' },
      { id: shortid.generate(), text: 'Лучший монтаж' },
      { id: shortid.generate(), text: 'Лучший монтаж звука' },
      { id: shortid.generate(), text: 'Лучший саундтрек' },
    ],
  },
];
