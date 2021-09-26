import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from './Accordion';

export default {
    title: 'components/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
};

export const NotCollapsedMode = Template.bind({});
CollapsedMode.args = {
    titleValue: 'User',
    collapsed: false,
};