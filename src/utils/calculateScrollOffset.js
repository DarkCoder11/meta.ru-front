const calculateScrollOffset = (element, offset, alignment) => {
  const { body } = document;
  const html = document.documentElement;
  const { clientHeight } = html;
  const elementRect = element.getBoundingClientRect();
  const documentHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
  );
  const localOffset = offset || 0;

  let scrollPosition;
  switch (alignment) {
    case 'top':
      scrollPosition = elementRect.top;
      break;
    case 'middle':
      scrollPosition =
        elementRect.bottom - clientHeight / 2 - elementRect.height / 2;
      break;
    case 'bottom':
      scrollPosition = elementRect.bottom - clientHeight;
      break;
    default:
      scrollPosition =
        elementRect.bottom - clientHeight / 2 - elementRect.height / 2;
      break;
  }
  const maxScrollPosition = documentHeight - clientHeight;

  return Math.min(
    scrollPosition + localOffset + window.pageYOffset,
    maxScrollPosition,
  );
};

export default calculateScrollOffset;
