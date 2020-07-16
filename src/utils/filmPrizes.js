import shortid from 'shortid';

export default [
  {
    id: shortid.generate(),
    prizeIcon: '/img/Oscar_icon.svg',
    prizeTitle: 'Британская академия',
    prizeText: '2 награды',
    prizes: [
      { id: shortid.generate(), text: 'Лучший фильм (драма)' },
      { id: shortid.generate(), text: 'Лучший режиссер' },
    ],
    nominations: [
      { id: shortid.generate(), text: 'Лучший песня' },
      { id: shortid.generate(), text: 'Лучший саундтрек' },
    ],
  },
  {
    id: shortid.generate(),
    prizeIcon: '/img/Oscar_icon.svg',
    prizeTitle: 'Венецианский кинофестиваль',
    prizeText: '2 награды',
    prizes: [
      { id: shortid.generate(), text: 'Лучший фильм (драма)' },
      { id: shortid.generate(), text: 'Лучший режиссер' },
    ],
    nominations: [
      { id: shortid.generate(), text: 'Лучший песня' },
      { id: shortid.generate(), text: 'Лучший саундтрек' },
    ],
  },
];
