const getSlugFromTitle = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[&]/g, 'and')
    .replace(/[%#<>@;:/?!&=+${}|`,.-]/g, '')
    .split(' ')
    .join('-');

export default getSlugFromTitle;
