const setAppUrl = (name) => {
  switch (name) {
    case 'iOS':
      return '/img/Apple.svg';
    case 'Android':
      return '/img/Google.svg';
    case 'Smart TV':
      return '/img/smart_TV.svg';
    case 'Windows Phone':
      return '/img/Windows.svg';

    default:
  }
};

export default setAppUrl;
