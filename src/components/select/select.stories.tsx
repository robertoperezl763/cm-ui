import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
        <>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>

        </>
    )
  },
};
