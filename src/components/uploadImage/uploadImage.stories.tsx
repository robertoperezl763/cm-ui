import type { Meta, StoryObj } from '@storybook/react';
import { UploadImage } from './uploadImage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ImageUpload',
  component: UploadImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof UploadImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  args: {},
};
