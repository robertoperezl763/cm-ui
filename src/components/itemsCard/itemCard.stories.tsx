import type { Meta, StoryObj } from '@storybook/react';
import { ItemCard } from './itemCard';
import { Icon, IconTypes } from '../icon/icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Cards/ItemCard',
  component: ItemCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  args: {
    children:(
    <>
    <Icon type={IconTypes.VerticalMore} width={32} height={32}/>
    </>
    ),
    hasAuthor: true,
    hasSeries: false,
    imageUrl: 'https://picsum.photos/300/200',
    itemName: 'Jujutsu Kaisen Volume 1',
    author: "Gege Akatumi",
    series: "Jujutus Kaisen",
    description: 'this is my card description for this colleciton! and this is also the exmaple if it were to be super long super long super long super long super long'
  },
};

export const noAuthor: Story = {
  args: {
    children:(
    <>
    <Icon type={IconTypes.VerticalMore} width={32} height={32}/>
    </>
    ),
    hasAuthor: true,
    hasSeries: true,
    imageUrl: 'https://picsum.photos/300/200',
    itemName: 'Jujutsu Kaisen Volume 1',
    author: "Gege Akatumi",
    series: "Jujutus Kaisen",
    description: 'this is my card description for this colleciton! and this is also the exmaple if it were to be super long super long super long super long super long'
  },
};

export const noSeries: Story = {
  args: {
    children:(
    <>
    <Icon type={IconTypes.VerticalMore} width={32} height={32}/>
    </>
    ),
    hasAuthor: true,
    hasSeries: false,
    imageUrl: 'https://picsum.photos/300/200',
    itemName: 'Jujutsu Kaisen Volume 1',
    author: "Gege Akatumi",
    series: "Jujutus Kaisen",
    description: 'this is my card description for this colleciton! and this is also the exmaple if it were to be super long super long super long super long super long'
  },
};

export const noAuthorSeries: Story = {
  args: {
    children:(
    <>
    <Icon type={IconTypes.VerticalMore} width={32} height={32}/>
    </>
    ),
    hasAuthor: false,
    hasSeries: false,
    imageUrl: 'https://picsum.photos/300/200',
    itemName: 'Jujutsu Kaisen Volume 1',
    author: "Gege Akatumi",
    series: "Jujutus Kaisen",
    description: 'this is my card description for this colleciton! and this is also the exmaple if it were to be super long super long super long super long super long'
  },
};


