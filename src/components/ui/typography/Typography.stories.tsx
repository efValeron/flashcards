import type { Meta, StoryObj } from '@storybook/react'

import { ElementType } from 'react'

import { Typography, variantsTypography } from '@/components/ui/typography/Typography'

const meta = {
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
    },
  },
  component: Typography,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const ControlExample: Story = {
  args: {
    as: 'div',
    children: 'Control Example',
    variant: 'large',
  },
}

const value = 'Carosserie Test Zürichv Stauffacherstrasse 318004 Zürich, ZH, CH'

type TestStoryType = {
  tag: ElementType
  text: string
  variant: variantsTypography
}

const testDataForStories: TestStoryType[] = [
  { tag: 'p', text: value, variant: 'large' },
  { tag: 'h1', text: value, variant: 'h1' },
  { tag: 'h2', text: value, variant: 'h2' },
  { tag: 'h3', text: value, variant: 'h3' },
  { tag: 'div', text: value, variant: 'body1' },
  { tag: 'div', text: value, variant: 'body2' },
  { tag: 'p', text: value, variant: 'subtitle1' },
  { tag: 'p', text: value, variant: 'subtitle2' },
  { tag: 'span', text: value, variant: 'overline' },
  { tag: 'span', text: value, variant: 'caption' },
  { tag: 'a', text: value, variant: 'link1' },
  { tag: 'a', text: value, variant: 'link2' },
]

export const AllTypography: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '180px' }}>
        {testDataForStories.map(el => (
          <Typography as={el.tag} variant={el.variant}>
            {el.text}
          </Typography>
        ))}
      </div>
    )
  },
}
