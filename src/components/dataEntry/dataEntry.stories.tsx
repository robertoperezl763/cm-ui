import type { Meta, StoryObj } from '@storybook/react';
import { DataEntry } from './dataEntry';
import { Input } from '../input/input';
import { Rows } from './dataEntry-rows';
import { Columns } from './dataEntry-columns';
import { UploadImage } from '../uploadImage/uploadImage';
import { TextArea } from '../textarea/textarea';
import { Button } from '../button/button';
import { Label } from '../label/label';
import { AuthorStoryInput } from './authorStory';
import { Select } from '../select/select';
import { PopupHeader } from './header';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/dataEntry',
  component: DataEntry,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DataEntry>;

export default meta;
type Story = StoryObj<typeof meta>;



export const CollectionsEntry: Story = {
  args: {
    children:(
    <>
      <PopupHeader title='Create New Collection'/>
      <Rows>
        <Columns>
          <Input placeholder='Enter Collection Name'/>
          <TextArea placeholder='Enter Collection Description'/> 
        </Columns>

        <Columns>
          <UploadImage isReq={true}/>
        </Columns>
        
      </Rows>

      <Rows>
        <Label>
            <Input type='checkbox' />
            Collection Has Authors
        </Label>
        <Label>
            <Input type='checkbox' />
            Collection Has Series
        </Label>
        <Label>
            <Input type='checkbox' />
            Make Public
        </Label>
      </Rows>

      <Rows>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </Rows>

    </>
    ),
  },
};

export const ItemEntry: Story = {
  args: {
    children: (
      <>
      <PopupHeader title='Create New Item' />
      <Rows>
        <Columns>
          <Rows>
            <div>
              <Label>
                Select Collection
              </Label>
              <Select >
                <option value="">Select a Collection--</option>
                <option>Library</option>
                <option>Music</option>
                <option>Playing Cards</option>
              </Select>
            </div>
          </Rows>
          <Rows>
            <Input placeholder='Enter Item Name'/>
          </Rows>
          <Rows>
            <AuthorStoryInput vars={ {hasAuthor:true, hasSeries:true } }/>
            {/* Create Custom Component for this that determines if it will need these values???? */}
          </Rows>
          <Rows>
            <TextArea placeholder='Enter Item Description' />
          </Rows>
        </Columns>
        
        <Columns>
          <UploadImage isReq={true}/>
        </Columns>
      </Rows>

      <Rows>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </Rows>
      </>
    )
  }
}