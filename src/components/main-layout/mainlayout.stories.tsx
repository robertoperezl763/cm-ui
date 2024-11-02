import type { Meta, StoryObj } from '@storybook/react';
import { IconTypes } from '../icon/icon';
import { MainLayout, MainLayoutContainer } from './main-layout';
import { HeaderNav } from '../header-nav/header-nav';
import { HeaderNavBtn } from '../header-nav/header-nav-btn';
import { HeaderNavLogo } from '../header-nav/header-nav-logo';

const meta = {
    title: 'Layout/Main Layout',
    component: MainLayout,
    parameters: {
      layout: 'fullscreen'
    }
  } satisfies Meta<typeof MainLayout>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
        children: (
            <>
                <HeaderNav>
                <HeaderNavLogo />
                <HeaderNavBtn label="Test1" icon={IconTypes.Camera} />
                <HeaderNavBtn label="Test1" icon={IconTypes.NewUser} />
                <HeaderNavBtn label="Test1" icon={IconTypes.Image} />
                </HeaderNav>
                <MainLayoutContainer>
                    <p>
                        Content
                        
                    </p>
                </MainLayoutContainer>
            </>
        )
    }
  }