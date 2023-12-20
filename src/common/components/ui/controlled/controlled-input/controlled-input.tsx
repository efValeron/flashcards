import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/common/components/ui/input'

type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'id' | 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>(props: ControlledTextFieldProps<T>) => {
  const { control, defaultValue, name, rules, shouldUnregister, ...rest } = props
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <Input id={name} onChange={onChange} value={value} {...rest} />
}
