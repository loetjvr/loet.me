import styled from '@emotion/styled';
import { fonts, colors } from '../../themes';

interface Props {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  cursor: pointer;
  justify-content: center;
`;

export const Text = styled.a<Props>`
  ${fonts.styles.medium};
  color: ${({ selected }: Props) => (selected ? colors.primary : colors.black)};
  text-decoration: ${({ selected }: Props) =>
    selected ? 'underline' : 'none'};
`;
