import defaltTheme, { ITheme } from './theme';

export const extendTheme = (newTheme, oldTheme = defaltTheme): ITheme => {
  const mergedTheme = {} as ITheme;

  for (const key in oldTheme) {
    if (oldTheme.hasOwnProperty(key)) {
      if (typeof oldTheme[key] === 'object' && oldTheme[key] !== null) {
        mergedTheme[key] = extendTheme(oldTheme[key], newTheme[key]);
      } else {
        mergedTheme[key] = oldTheme[key];
      }
    }
  }

  for (const key in newTheme) {
    if (newTheme.hasOwnProperty(key)) {
      if (typeof newTheme[key] === 'object' && newTheme[key] !== null) {
        mergedTheme[key] = extendTheme(oldTheme[key], newTheme[key]);
      } else {
        mergedTheme[key] = newTheme[key];
      }
    }
  }

  return mergedTheme;
};
