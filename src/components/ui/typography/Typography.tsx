import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from '@/components/ui/typography/typography.module.scss'

export type variantsTypography =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'large'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

export type TypographyPropsType<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  className?: string
  variant: variantsTypography
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'div'>(props: TypographyPropsType<T>) => {
  const { as: Component = 'div', children, className, variant = 'body1', ...rest } = props

  return (
    <Component className={`${s[variant]} `} {...rest}>
      {children}
    </Component>
  )
}
