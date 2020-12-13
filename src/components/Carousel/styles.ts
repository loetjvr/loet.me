import styled from '@emotion/styled';
import { metrics } from '../../themes';

interface Props {
  width: number;
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
    display: none;
  }
`;

export const Container = styled.div`
  margin-right: ${metrics.doubleBaseMargin}px;
`;

export const Space = styled.div<Props>`
  width: ${({ width }: Props) => width}px;
`;
