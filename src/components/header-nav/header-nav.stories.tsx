import type { Meta, StoryObj } from '@storybook/react';
import { IconTypes } from '../icon/icon';
import { HeaderNav } from './header-nav';
import { HeaderNavLogo } from './header-nav-logo';
import { HeaderNavBtn } from './header-nav-btn';

const meta = {
    title: 'Navigation/Header Navigation',
    component: HeaderNav,
    parameters: {
      layout: 'fullscreen'
    }
  } satisfies Meta<typeof HeaderNav>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
        children: (
            <>
                <HeaderNavLogo />
                <HeaderNavBtn label="Test1" icon={IconTypes.Camera} />
                <HeaderNavBtn label="Test1" icon={IconTypes.NewUser} />
                <HeaderNavBtn label="Test1" icon={IconTypes.Image} />
            </>
        )
    }
  }