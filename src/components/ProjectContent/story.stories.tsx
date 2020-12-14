import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import ProjectContent from '.';

export default {
  title: 'loet.me/ProjectContent',
  component: ProjectContent,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

const Template: Story<ProjectContent> = args => <ProjectContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  year: 2009,
  company: 'Black Forest Labs',
  roles: ['Programming lead for app and backend'],
  tech: ['React-Native', 'iOS', 'Firebase'],
  link: 'https://apps.apple.com/us/app/flixy/id1441090136?ign-mpt=uo%3D4'
};
