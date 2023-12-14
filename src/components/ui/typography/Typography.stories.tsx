import type {Meta, StoryObj} from '@storybook/react'
import {Typography, variantsTypography} from "@/components/ui/typography/Typography";
import {ElementType} from "react";


const meta = {
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        variant: {
            control: {type: 'radio'},
            options: ['large', 'h1', 'h2', 'h3', 'body1', 'body2', 'subtitle1', 'subtitle2', 'caption',
                'overline', 'link1', 'link2'],
        },
    },
    component: Typography,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    title: 'Components/Typography',
    decorators: [
        Story => (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Story />
            </div>
        )
    ]
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>


export const ControlExample: Story = {
    args: {
        variant: 'large',
        as: 'div',
        children: 'Control Example'
    }
}

let value = "Carosserie Test Zürichv Stauffacherstrasse 318004 Zürich, ZH, CH"
type TestStoryType = {
    variant: variantsTypography,
    text: string
    tag: ElementType
}

let testDataForStories : TestStoryType[] = [
    {variant: 'large', text: value, tag: 'p'},
    {variant: 'h1', text: value, tag: 'h1'},
    {variant: 'h2', text: value, tag: 'h2'},
    {variant: 'h3', text: value, tag: 'h3'},
    {variant: 'body1', text: value, tag: 'div'},
    {variant: 'body2', text: value, tag: 'div'},
    {variant: 'subtitle1', text: value, tag: 'p'},
    {variant: 'subtitle2', text: value, tag: 'p'},
    {variant: 'overline', text: value, tag: 'span'},
    {variant: 'caption', text: value, tag: 'span'},
    {variant: 'link1', text: value, tag: 'a'},
    {variant: 'link2', text: value, tag: 'a'},
]

export const AllTypography: Story = {
    render: () => {
        return (
            <div style={{width: '180px', display: 'flex', flexDirection: 'column',  gap: '20px'}}>
                {
                    testDataForStories.map((el) => (
                        <Typography variant={el.variant} as={el.tag}>
                                {el.text}
                        </Typography>
                    ))
                }
            </div> )}}