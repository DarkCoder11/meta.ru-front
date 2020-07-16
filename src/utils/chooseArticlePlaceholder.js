const data = [
  {
    img: 'img/articlePlaceholder/ivi.png',
    names: ['ivi', 'Иви', 'Ivi', 'иви', 'Иви'],
  },
  {
    img: 'img/articlePlaceholder/okko.png',
    names: ['Okko', 'Окко'],
  },
  {
    img: 'img/articlePlaceholder/megogo.png',
    names: ['Megogo', 'Мегого', 'мегого'],
  },
  {
    img: 'img/articlePlaceholder/wink.png',
    names: ['Wink', 'Винк'],
  },
  {
    img: 'img/articlePlaceholder/tvzavr.png',
    names: ['TVzavr', 'ТВзавр', 'ТиВиЗавр'],
  },
  {
    img: 'img/articlePlaceholder/tvigle.png',
    names: ['Tvigle', 'Твигл'],
  },
  {
    img: 'img/articlePlaceholder/more.png',
    names: ['more tv', 'море тв', 'Море тв', 'More tv', 'More TV', 'more.tv'],
  },
  {
    img: 'img/articlePlaceholder/amedia.png',
    names: ['Amediateka', 'Амедиатека'],
  },
  {
    img: 'img/articlePlaceholder/kinopoisk.png',
    names: ['Кинопоиск HD', 'Кинопоиск'],
  },
  {
    img: 'img/articlePlaceholder/netflix.png',
    names: ['Netflix', 'Нетфликс'],
  },
  {
    img: 'img/articlePlaceholder/mtc.png',
    names: ['МТС ТВ', 'МТСТВ', 'mts tv'],
  },
  {
    img: 'img/articlePlaceholder/start.png',
    names: ['Start', 'Старт'],
  },
  {
    img: 'img/articlePlaceholder/premier.png',
    names: ['Premier', 'Премьер', 'ТНТ премьер', 'ТНТ-премьер'],
  },
  {
    img: 'img/articlePlaceholder/vip.png',
    names: ['Vip Play', 'Вип плей', 'Vipplay'],
  },
  {
    img: 'img/articlePlaceholder/megafon.png',
    names: ['Мегафон ТВ', 'МегафонТВ'],
  },
  {
    img: 'img/articlePlaceholder/vip.png',
    names: ['ShowJet', 'Шоуджет', 'Show Jet'],
  },
  {
    img: 'img/articlePlaceholder/1.png',
    names: [
      'kino1tv',
      'кино1тв',
      'кино 1 тв',
      'кино 1тв',
      'kino 1 tv',
      'kino 1tv',
    ],
  },
  {
    img: 'img/articlePlaceholder/itunes.png',
    names: ['iTunes', 'Айтюнс'],
  },
  {
    img: 'img/articlePlaceholder/google.png',
    names: [
      'Google Play',
      'Гугл плей',
      'Гугл Плей фильмы',
      'Гугл плей. Фильмы',
      'Google Play. Фильмы',
    ],
  },
];

const chooseArticlePlaceholder = (title, isMobile, isBonus) => {
  const result = data.find(({ names }) => {
    const subString = names.map((name) => name.toLowerCase()).join('|');
    const regEpx = new RegExp(`(${subString})`, 'img');
    return regEpx.test(title.toLowerCase());
  });
  return result
    ? result.img
    : `img/articlePlaceholder/${isBonus ? 'bonus' : 'film'}${
        isMobile ? '_mobile' : ''
      }.png`;
};

export default chooseArticlePlaceholder;
