import { CSSProperties, FC, createElement } from 'react'

import allIcons from '@/components/commonComponents/IconComponent/allIcons'
import { IconName } from '@/components/commonComponents/IconComponent/types'

interface IProps {
  className?: string
  id?: string
  name: IconName
  size?: number
  style?: CSSProperties
  svgProp?: React.SVGProps<SVGSVGElement>
}
export const IconComponent: FC<IProps> = ({ className, id, name, size = 24, style }) =>
  createElement(allIcons[name], {
    className,
    height: size,
    id,
    style,
    width: size,
  })
