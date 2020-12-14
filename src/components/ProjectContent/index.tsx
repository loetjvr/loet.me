import React from 'react';
import {
  Container,
  TopContainer,
  Date,
  RightContainer,
  Company,
  Role,
  BottomContainer
} from './styles';

interface ProjectContent {
  year: number;
  company: string;
  roles: string[];
  tech: string[];
  link: string;
}

const ProjectContent = ({
  year,
  company,
  roles,
  tech,
  link
}: ProjectContent): JSX.Element => {
  return (
    <Container>
      <TopContainer>
        <Date>{year}</Date>
        <RightContainer>
          <Role>{roles.join(', ')}</Role>
          <Company>{company}</Company>
        </RightContainer>
      </TopContainer>
      <BottomContainer>{tech.join(', ')}</BottomContainer>
    </Container>
  );
};

export default ProjectContent;
