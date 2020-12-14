import styled from '@emotion/styled';
import { fonts, colors, metrics } from '../../themes';

export const Container = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  padding: ${metrics.halfBaseMargin}px;
`;

export const BottomContainer = styled.div`
  margin-top: ${metrics.halfBaseMargin}px;
  background-color: ${colors.white};
  padding: ${metrics.halfBaseMargin}px;
  height: ${metrics.baseMargin}px;
`;

export const RightContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${metrics.maxWidth}px;
`;

export const Date = styled.h3`
  ${fonts.styles.medium};
  color: ${colors.black};
  margin-right: ${metrics.baseMargin}px;
`;

export const Text = styled.h5`
  ${fonts.styles.small};
  color: ${colors.secondary};
`;

export const Role = styled.h4`
  ${fonts.styles.regular};
  color: ${colors.black};
  margin-bottom: ${metrics.halfBaseMargin}px;
`;

export const Tech = styled(Text)`
  position: absolute;
  margin-top: 23px;
`;

export const LinkContainer = styled.div`
  position: absolute;
  margin-top: -40px;
  right: ${metrics.baseMargin}px;
`;
