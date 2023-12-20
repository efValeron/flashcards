import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { Input } from './'

const meta = {
  argTypes: {},
  args: {
    placeholder: 'Input',
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    variant: 'password',
  },
}

export const DefaultSearch: Story = {
  args: {
    placeholder: 'Search',
    variant: 'search',
  },
}

export const SearchWithClearButton: Story = {
  args: {
    onClear: action('Clear button clicked'),
    placeholder: 'Search',
    variant: 'search',
  },
}

export const Error: Story = {
  args: {
    error: true,
    errorMessage: 'Please enter a valid email!',
    label: 'Email',
    placeholder: 'example@ex.com',
    value: 'test@email.com',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
  },
}
