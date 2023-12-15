import { ReactNode } from 'react'

import s from './card.module.scss'

export type CardType = {
  children?: ReactNode
  className?: string
}

export const Card = ({ className, ...rest }: CardType) => {
  return <div className={s.card + ' ' + `${className ?? ''}`} {...rest} />
}
