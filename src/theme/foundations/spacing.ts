export const spacing = Array.from(new Array(96))
  .map((_, x) => ({
    [x]: `${(x * 4) / 10}rem`,
    [x / 2]: `${(x * 2) / 10}rem`,
    [`-${x}`]: `${-(x * 4) / 10}rem`,
    [`-${x / 2}`]: `${-(x * 2) / 10}rem`,
  }))
  .reduce((acc, x) => ({ ...acc, ...x }), {});
