import { ComponentPropsWithoutRef, ElementRef, ElementType, ReactNode, forwardRef } from 'react'

import cn from 'classnames'

import s from './card.module.scss'

type Props<T extends ElementType> = {
  as?: T
  children?: ReactNode
} & ComponentPropsWithoutRef<T>

export const Card = forwardRef(
  <T extends ElementType = 'div'>(
    { as, children, className, ...restProps }: Props<T>,
    ref: ElementRef<T>
  ) => {
    const Component: ElementType = as || 'div'

    return (
      <Component className={cn(s.card, className)} ref={ref} {...restProps}>
        {children}
      </Component>
    )
  }
)
