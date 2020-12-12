import styled from '@emotion/styled';
import { fonts, colors } from '../../themes';

interface Props {
  selected: boolean;
}

export const Text = styled.a<Props>`
  ${fonts.styles.menu};
  cursor: pointer;
  color: ${({ selected }: Props) => (selected ? colors.primary : colors.black)};
  text-decoration: ${({ selected }: Props) =>
    selected ? 'underline' : 'none'};
`;
