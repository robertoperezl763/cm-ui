import type { Meta, StoryObj } from '@storybook/react';
import { CollectionCard } from './collectionCard';
import { Button } from '../button/button';
import { Icon, IconTypes } from '../icon/icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Cards/CollectionCard',
  component: CollectionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CollectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  args: {
    children:(
    <>
    <Button children="Click Me" />
    <Icon type={IconTypes.VerticalMore} width={16} height={16}/>
    </>
    ),
    imageUrl: 'https://picsum.photos/300/200',
    collectionName: 'Library Example',
    description: 'this is my card description for this colleciton! and this is also the exmaple if it were to be super long'
  },
};
