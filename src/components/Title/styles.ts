import styled from '@emotion/styled';
import { fonts, colors } from '../../themes';

interface Props {
  margin: number;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-grow: 1;
  margin-left: ${({ margin }: Props) => margin}%;
`;

export const Text = styled.h2`
  ${fonts.styles.large};
  color: ${colors.black};
`;
