import styled from '@emotion/styled';
import { Orientation } from '.';

interface Props {
  orientation: Orientation;
}

export const Container = styled.div<Props>`
  width: ${({ orientation }: Props) =>
    orientation === Orientation.portrait ? 220 : 440}px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
`;

// shadow adds whitespace - remove with margin
export const Image = styled.img`
  width: 100%;
  margin-bottom: -3px;
`;
