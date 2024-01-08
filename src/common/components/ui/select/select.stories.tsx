import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import {OptionType, SelectComponent} from "@/common/components/ui/select/select";
import {Typography} from "@/common/components/ui/typography";


const meta = {
    argTypes: {},
    component: SelectComponent,
    decorators: [
        Story => (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
    title: 'Components/Select',
} satisfies Meta<typeof SelectComponent>

export default meta
type Story = StoryObj<typeof meta>

export const TestSelect: Story = {
    args: {
        placeholder: 'Test',
        options: [
            { value: 'apple', label: 'apple' },
            { value: 'strawberry', label: 'strawberry' },
            { value: 'potato', label: 'potato' },
        ],
        disabled: false,
        label: 'Select',
    },
}

export const testWorkedSelect = () => {
    const [value, setValue] = useState('test')
    const options: OptionType[] = [
        { value: 'firstChange', label: 'Option 1' },
        { value: 'secondChange', label: 'Option 2' },
        { value: 'ThirtyChange', label: 'Option 3' },
    ]

    const testFunction = (val: string) => {
        setValue(val)
    }
    return (
        <div>
            <Typography variant={'body1'}>{value}</Typography>
            <SelectComponent placeholder="Select an option" options={options} onChange={testFunction} />
        </div>
    )
}
