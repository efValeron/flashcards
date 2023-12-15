import { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta = {
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleCard: Story = {
  args: {
    children: <h1>Card</h1>,
  },
}
