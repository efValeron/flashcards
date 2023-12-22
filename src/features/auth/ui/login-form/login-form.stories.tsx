import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { LoginForm } from './'

const meta = {
  component: LoginForm,
  tags: ['autodocs'],
  title: 'Auth/LoginForm',
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: action('Handling submit'),
  },
}
