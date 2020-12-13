import styled from '@emotion/styled';

interface Props {
  color: string;
  size: number;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }: Props) => color};
  width: ${({ size }: Props) => size}px;
  height: ${({ size }: Props) => size}px;
  border-radius: ${({ size }: Props) => size / 2}px;
`;
