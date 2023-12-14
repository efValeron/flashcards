import {ComponentPropsWithoutRef, ElementType, ReactNode} from "react";
import s from '@/components/ui/typography/typography.module.scss'


export type variantsTypography =
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'

export  type TypographyPropsType<T extends  ElementType = 'div'> = {
    variant: variantsTypography
    as?: T
    className?: string
    children: ReactNode,

} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'div'>(props: TypographyPropsType<T>) => {
    const {as: Component= 'div',
            variant = 'body1',
            className,
            children,
            ...rest} = props

    return (
        <Component className = { `${s[variant]} ` }  {...rest} >
            {children}
        </Component>
    )
};

