const types = {
  tinos: 'Tinos',
  montserrat: 'Montserrat'
};

const sizes = {
  small: 16,
  regular: 18,
  medium: 36,
  large: 144
};

const styles = {
  small: `
    font-family: ${types.montserrat};
    font-size: ${sizes.small}px;
  `,
  regular: `
    font-family: ${types.montserrat};
    font-size: ${sizes.regular}px;
  `,
  medium: `
    font-family: ${types.tinos};
    font-size: ${sizes.medium}px;
  `,
  large: `
    font-family: ${types.tinos};
    font-size: ${sizes.large}px;
  `,
  menu: `
    font-family: ${types.tinos};
    font-size: 4vw;
  `
};

export default { types, sizes, styles };
