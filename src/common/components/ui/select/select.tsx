import * as Select from '@radix-ui/react-select'
import s from './select.module.scss'
import { forwardRef, ReactNode, useState } from 'react'
import {Typography} from "@/common/components/ui/typography";
import {IconComponent} from "@/common/components/icon/IconComponent";


export type OptionType = {
    value: string
    label: string
}

type PropsType = {
    label?: string
    placeholder: string
    className?: string
    options?: OptionType[]
    disabled?: boolean
    value?: string
    onChange?: (value: any) => void
}

export const SelectComponent = (props: PropsType) => {
    const [isOpen, setIsOpen] = useState(false)

    const onChangeValue = (value: string) => {
        if (onChange) {
            onChange(value)
        }
    }

    const OpenChangeSelect = () => {
        setIsOpen(!isOpen)
    }

    const resetAutoFocus = (event: any) => {
        event.preventDefault()
    }

    const { placeholder, value, onChange, label, options, disabled } = props
    return (
        <div>
            <Typography
                as={'span'}
                variant={'body2'}
                className={`${disabled ? s.disabledLabel : s.labelStyle}`}
            >
                {label}
            </Typography>
            <Select.Root
                open={isOpen}
                onOpenChange={OpenChangeSelect}
                disabled={disabled}
                value={value}
                onValueChange={(value: string) => onChangeValue(value)}
            >
                <Select.Trigger className={`${s.SelectTrigger} ${s.triggerSelector}`} disabled={disabled}>
                    <Typography variant={'body1'} className={disabled ? s.disabledText : ''}>
                        <Select.Value placeholder={placeholder} />
                    </Typography>
                    <Select.Icon className={s.Icon}>
                        <IconComponent
                            name={isOpen ? 'arrowUp' : 'arrowDown'}
                            size={18}
                            className={`${s.IconStyle} ${disabled ? s.iconDisabled : ''}`}
                        />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content
                        position={'popper'}
                        onCloseAutoFocus={resetAutoFocus}
                        className={s.SelectContent}
                    >
                        <Select.Viewport>
                            <Select.Group>
                                {options?.map(items => (
                                    <SelectItem key={items.value} value={items.value} disabled={disabled}>
                                        {items.label}
                                    </SelectItem>
                                ))}
                            </Select.Group>
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    )
}

type SelectItemProps = {
    children: ReactNode
    className?: string
    value: string
    disabled?: boolean
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
    ({ children, value, className, ...props }, ref) => {
        return (
            <Select.Item value={value} className={`${s.SelectItem} ${className}`} {...props} ref={ref}>
                <Select.ItemText>
                    {
                        <Typography variant={'body1'} className={props.disabled ? s.disabledText : ''}>
                            {children}
                        </Typography>
                    }
                </Select.ItemText>
            </Select.Item>
        )
    }
)
