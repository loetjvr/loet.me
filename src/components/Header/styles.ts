import styled from '@emotion/styled';
import { colors, metrics } from '../../themes';

export const MainContainer = styled.div`
  width: 100%;
  background-color: ${colors.white};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  padding: ${metrics.baseMargin}px 0;
  max-width: ${metrics.headerWidth}px;
  margin: 0 auto;
`;
