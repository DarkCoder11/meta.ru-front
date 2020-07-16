const initialFilmTabs = [
  {
    id: 1,
    title: 'О фильме',
    isActive: false,
    route: '',
    refName: 'aboutFilmRef',
  },
  {
    id: 2,
    title: 'Актеры',
    isActive: false,
    route: '/actors',
    refName: 'actorsRef',
  },
  // {
  //   id: 3,
  //   title: 'Отзывы',
  //   isActive: false,
  //   route: '/',
  //   refName: 'reviewsRef',
  // },
  // {
  //   id: 4,
  //   title: 'Награды',
  //   isActive: false,
  //   route: '/awards',
  //   refName: 'awardsRef',
  // },
  {
    id: 3,
    title: 'Трейлер',
    isActive: false,
    route: '/',
    refName: 'trailerRef',
  },
  // {
  //   id: 4,
  //   title: 'Инфо',
  //   isActive: false,
  //   route: '/',
  //   refName: 'infoRef',
  // },
  // {
  //   id: 4,
  //   title: 'Новости',
  //   isActive: false,
  //   route: '/',
  //   refName: 'newsRef',
  // },
];
const initialActorsTabs = [
  {
    id: 1,
    title: 'О фильме',
    isActive: false,
    route: '',
    refName: 'aboutFilmRef',
  },
  {
    id: 2,
    title: 'Актеры',
    isActive: false,
    route: '/actors',
    refName: 'actorsRef',
  },
];

const tabs = {
  initialFilmTabs,
  initialActorsTabs,
};

export default (id, tablistName = 'initialFilmTabs') =>
  tabs[tablistName].map((tab) =>
    tab.id === id ? { ...tab, isActive: true } : { ...tab, isActive: false },
  );
