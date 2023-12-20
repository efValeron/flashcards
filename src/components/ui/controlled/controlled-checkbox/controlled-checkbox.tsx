import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

// TODO:
export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T>
// & Omit<CheckboxProps, 'id' | 'onChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <input
      type={'checkbox'}
      {...{
        checked: value,
        id: name,
        onChange,
        ...checkboxProps,
      }}
    />
  )
}
