import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { IconComponent } from '@/common/components/icon/IconComponent'

import s from './input.module.scss'

export type InputProps = {
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  label?: string
  onClear?: () => void
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    error,
    errorMessage,
    label,
    onClear,
    type,
    variant = 'default',
    ...rest
  } = props
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  let inputType

  if (variant === 'password') {
    if (isPasswordVisible) {
      inputType = 'text'
    } else {
      inputType = 'password'
    }
  } else {
    inputType = type
  }

  return (
    <div className={`${s.container}`}>
      <label className={s.label}>{label}</label>
      <div
        className={`${s.inputContainer} ${error ? s.error : ''} ${
          rest.disabled ? s.disabled : ''
        } ${className}`}
      >
        {variant === 'search' && (
          <div className={`${s.startIconContainer}`}>
            <IconComponent
              className={`${s.icon} ${s.startIcon}`}
              name={'searchOutlineIcon'}
            ></IconComponent>
          </div>
        )}
        <input className={`${s.input}`} ref={ref} type={inputType} {...rest} />
        {variant === 'password' ? (
          <div
            className={`${s.endIconContainer}`}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {!isPasswordVisible ? (
              <IconComponent className={`${s.icon} ${s.endIcon}`} name={'eyeOutlineIcon'} />
            ) : (
              <IconComponent className={`${s.icon} ${s.endIcon}`} name={'eyeOffOutlineIcon'} />
            )}
          </div>
        ) : (
          variant === 'search' &&
          onClear && (
            <div className={`${s.endIconContainer}`} onClick={onClear}>
              <IconComponent className={`${s.icon} ${s.endIcon}`} name={'closeOutlineIcon'} />
            </div>
          )
        )}
      </div>
      {error && errorMessage && <small className={`${s.errorMessage}`}>{props.errorMessage}</small>}
    </div>
  )
})
