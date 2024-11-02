import type { StoryObj } from '@storybook/react';
import { Dialog, useDialog } from './dialog';
import { DialogForm } from './dialogForm';
import { Input } from '../input/input';
import { DialogFooter } from './dialogFooter';
import { Button } from '../button/button';
import { UploadImage } from '../uploadImage/uploadImage';
import { MultiRow } from './multiRow';
import { TextArea } from '../textarea/textarea';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Modals/Dialog',
    component: Dialog,
    args: {
      hasCloseBtn: true,
      title: 'Heading',
    },
    render: (args: {
        hasCloseBtn?: boolean,
        title?: string
    }) => {
  
    const [isOpen, setIsOpen, onKeyDown] = useDialog(true)
    return(
        <Dialog
            isOpen={isOpen}
            hasCloseBtn={args.hasCloseBtn}
            onClose={() => setIsOpen(false)}
            onKeyDown={onKeyDown}
            title={args.title}
        >
            <form method='dialog'>
                <MultiRow>
                <DialogForm>

                    <Input required={true} type='text' placeholder='Enter Collection Name' />
                    <TextArea placeholder='Enter Collection Description'/>


                </DialogForm>
                <UploadImage isReq={true} />
                </MultiRow>
                <DialogFooter>
                    <Button type='submit'>Save</Button>
                </DialogFooter>

            </form>
        </Dialog>
    )
  }

}
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};


