import styled from '@emotion/styled';
import { fonts, colors } from '../../themes';

const margin = Math.random() * 100;

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: ${margin}%;
`;

export const Text = styled.h2`
  ${fonts.styles.large};
  color: ${colors.black};
`;
