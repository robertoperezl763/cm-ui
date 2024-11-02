import type { Meta, StoryObj } from '@storybook/react';

import { Icon, IconTypes } from './icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plus: Story = {
  args: {
    width: 100,
    height: 100,
    fill: '#0000',
    type: IconTypes.Plus,
  },
};

export const Camera: Story = {
  args: {
    width: 100,
    height: 100,
    fill: '#0000',
    type: IconTypes.Camera,
  }
}

export const Chevron: Story = {
  args: {
    width: 100,
    height: 100,
    fill: '#0000',
    type: IconTypes.Chevron,
  }
}

export const Image: Story = {
  args: {
    width: 100,
    height: 100,
    fill: '#0000',
    type: IconTypes.Image,
  }
}

export const NewUser: Story = {
  args: {
    width: 100,
    height: 100,
    fill: '#0000',
    type: IconTypes.NewUser,
  }
}

export const Settings: Story = {
  args: {
    width: 100,
    height: 100,
    fill: '#0000',
    type: IconTypes.Settings,
  }
}

export const VerticalMore: Story = {
  args: {
    width: 100,
    height: 100,
    fill: '#0000',
    type: IconTypes.VerticalMore,
  }
}

export const X: Story = {
  args: {
    width: 100,
    height: 100,
    fill: '#0000',
    type: IconTypes.X,
  }
}

export const Search: Story = {
  args: {
    width: 100,
    height: 100,
    fill: '#0000',
    type: IconTypes.Search,
  }
}
