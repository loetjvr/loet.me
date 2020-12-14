import React, { useState } from 'react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../themes';
import IconButton from '../IconButton';
import {
  Container,
  TopContainer,
  Date,
  RightContainer,
  Text,
  Role,
  BottomContainer,
  Tech,
  LinkContainer
} from './styles';

interface ProjectContent {
  year: number;
  company: string;
  roles: string[];
  tech: string[];
  link?: string;
}

const ProjectContent = ({
  year,
  company,
  roles,
  tech,
  link
}: ProjectContent): JSX.Element => {
  const roleString = useState(roles.join(', '));
  const techString = useState(tech.map(m => m.toLowerCase()).join(', '));

  const onLink = () => {
    window.open(link, '_blank');
  };

  return (
    <Container>
      {link ? (
        <LinkContainer>
          <IconButton
            size={50}
            color={colors.primary}
            icon={faExternalLinkAlt}
            onClick={onLink}
          />
        </LinkContainer>
      ) : null}
      <TopContainer>
        <Date>{year}</Date>
        <RightContainer>
          <Role>{roleString}</Role>
          <Text>by {company}</Text>
          <Tech>{techString}</Tech>
        </RightContainer>
      </TopContainer>
      <BottomContainer />
    </Container>
  );
};

export default ProjectContent;
