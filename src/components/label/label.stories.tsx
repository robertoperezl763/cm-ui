import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';
import { Input } from '../input/input';
import { Select } from '../select/select';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
//   argTypes: {},
//   args: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Label'
  },
};

export const InputCase: Story = {
  args: {},
  render: () => (
      <>
        <Label>
          Label
        </Label>
        <Input type="text" />
      </>
    )
  };

  export const SelectCase: Story = {
    args: {},
    render: () => (
        <>
          <Label>
            Label
          </Label>
          <Select><option>Option 1</option></Select>
        </>
      )
    };

export const CheckboxCase: Story = {
args: {
  children: 'Label'
},
render: () => (
  <>
      <Label>
          <Input type='checkbox' />
          Label
      </Label>
  </>
)
};

export const RadioCase: Story = {
  args: {
      children: 'Label'
  },
  render: () => (
      <>
          <Label>
              <Input type='radio' />
              Label
          </Label>
      </>
  )
  };