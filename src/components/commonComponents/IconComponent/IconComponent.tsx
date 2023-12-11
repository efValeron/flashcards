import { createElement, CSSProperties, FC } from 'react'
import {IconName} from "@/components/commonComponents/IconComponent/types";
import allIcons from "@/components/commonComponents/IconComponent/allIcons";

interface IProps {
    id?: string
    size?: number
    name: IconName
    className?: string
    svgProp?: React.SVGProps<SVGSVGElement>
    style?: CSSProperties
}
export const IconComponent: FC<IProps> = ({ id, name, size = 24, className, style }) =>
    createElement(allIcons[name], {
        id,
        width: size,
        height: size,
        className,
        style,
    })
