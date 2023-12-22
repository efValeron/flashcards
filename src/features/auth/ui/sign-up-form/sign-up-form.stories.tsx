import type { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from '@/features/auth/ui/sign-up-form/sign-up-form'
import { action } from '@storybook/addon-actions'

const meta = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/SignUpForm',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: action('Handling submit'),
  },
}
