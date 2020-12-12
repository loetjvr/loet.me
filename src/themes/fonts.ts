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

const sizesSmall = {
  medium: 20
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
    @media (max-width: 520px) {
      font-size: ${sizesSmall.medium}px;
    };
  `,
  large: `
    font-family: ${types.tinos};
    font-size: ${sizes.large}px;
  `
};

export default { styles };
