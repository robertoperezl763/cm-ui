import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { IconTypes } from '../icon/icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Primary Button',
    type: 'button'
  },
};

export const IconButton: Story = {
  args: {
    children: 'Icon Button',
    icon: IconTypes.Plus
  },
};