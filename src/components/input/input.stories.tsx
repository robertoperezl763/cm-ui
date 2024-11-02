import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter Here',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search for ...'
  },
};

export const Checkbox: Story = {
  args: {
    type: 'checkbox'
  },
};

export const Radio: Story = {
  args: {
    type: 'radio'
  },
};