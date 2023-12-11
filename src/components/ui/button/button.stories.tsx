import type { Meta, StoryObj } from '@storybook/react'
import s from '@/components/ui/button/button.module.scss'

import { Button } from './'
import {IconComponent} from "@/components/commonComponents/IconComponent/IconComponent";

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
  decorators: [
    (Story) => (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Story />
        </div>
    )
  ]
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryWithIcon = () => {
  return (
      <Button variant={"primary"} disabled={false} >
        <IconComponent name={'enterIcon'} className={s.styleIcon} size={16} />
        Button primary
      </Button>
  )
}

export const DisabledPrimaryWithIcon = () => {
  return (
      <Button variant={"primary"} disabled={true} >
        <IconComponent name={'enterIcon'} className={s.styleIcon} size={16} />
        Button primary
      </Button>
  )
}
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryWithIcon = () => {
  return (
      <Button variant={'secondary'} as={'button'}>
        <IconComponent name={"enterIcon"} className={s.styleIcon} size={16}/>
        Button Secondary
      </Button>
  )
}

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    disabled: false,
    variant: 'tertiary',
  },
}
export const Link: Story = {
  args: {
    as: 'a',
    children: 'Link-button',
    disabled: false,
    href: 'https://google.com',
    variant: 'link',
  },
}
export  const LinkDisabled: Story = {
  args: {
    as: 'a',
    children: 'Link-disabled',
    disabled: false,
    href: 'https://google.com',
    variant: 'link',
    className: s.disabledLink
  }
}
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

