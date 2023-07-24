export const capitalizeString = (s = '') => {
  const string = s.trim();
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  return '';
};
