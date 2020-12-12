import styled from '@emotion/styled';
import { colors, metrics } from '../../themes';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  padding: ${metrics.baseMargin}px 0;
  max-width: 800px;
  margin: 0 auto;
`;
