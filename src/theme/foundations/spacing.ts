export const spacing = [...new Array(96)].reduce((acc, _, x) => {
  acc = {
    ...acc,
    [x]: `${(x * 4) / 10}rem`,
    [`-${x}`]: `${-(x * 4) / 10}rem`,
    [x / 2]: `${(x * 2) / 10}rem`,
    [`-${x / 2}`]: `${-(x * 2) / 10}rem`,
  };
  return acc;
}, {});
