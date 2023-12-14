import type { Meta, StoryObj } from '@storybook/react'

import { IconComponent } from '@/components/commonComponents/IconComponent/IconComponent'

import s from '@/components/ui/button/button.module.scss'

import { Button } from './'

const meta = {
  argTypes: {
      variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Button',
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
    <Button disabled={false} variant={'primary'}>
      <IconComponent className={s.styleIcon} name={'enterIcon'} size={16} />
      Button primary
    </Button>
  )
}

export const DisabledPrimaryWithIcon = () => {
  return (
    <Button disabled variant={'primary'}>
      <IconComponent className={s.styleIcon} name={'enterIcon'} size={16} />
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
    <Button as={'button'} variant={'secondary'}>
      <IconComponent className={s.styleIcon} name={'enterIcon'} size={16} />
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
export const LinkDisabled: Story = {
  args: {
    as: 'a',
    children: 'Link-disabled',
    className: s.disabledLink,
    disabled: false,
    href: 'https://google.com',
    variant: 'link',
  },
}
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
