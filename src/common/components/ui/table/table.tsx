import { ComponentProps, ComponentPropsWithoutRef, FC } from 'react'
import s from './table.module.scss'
import {IconComponent} from "@/common/components/icon/IconComponent";


export type KeyType = 'Name' | 'Cards' | 'LastUpdate' | 'CreatedBy'

export type ColumnType = {
    key: KeyType
    sortable?: boolean
    title: string
}[]

export type SortType = {
    direction: 'asc' | 'desc'
    key: string
} | null

type TableDataItem = {
    id: string
    Name: string
    Cards: number
    LastUpdate: string
    CreatedBy: string
}

type ContentBody = {
    tableData: TableDataItem[]
    columns: ColumnType
    className?: string
} & ComponentPropsWithoutRef<'tbody'>

type TableHeaderType = {
    column: ColumnType
    onSort?: (sort: SortType) => void
    sort?: SortType
    className?: string
} & ComponentPropsWithoutRef<'thead'>

export type RootProps = ComponentProps<'table'>
export type HeaderProps = ComponentProps<'thead'>
export type BodyProps = ComponentProps<'tbody'>
export type RowProps = ComponentProps<'tr'>
export type CellProps = ComponentProps<'td'>

export const Root: FC<RootProps> = ({ className, ...rest }) => {
    return <table className={`${s.table} ${className}`} {...rest} />
}

export const Header: FC<HeaderProps> = ({ className, ...rest }) => {
    return <tbody className={`${s.header} ${className}`} {...rest} />
}

export const Body: FC<BodyProps> = ({ className, ...rest }) => {
    return <tbody className={`${s.body} ${className}`} {...rest} />
}

export const Row: FC<RowProps> = ({ className, ...rest }) => {
    return <tr className={`${s.row} ${className}`} {...rest} />
}

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
    return <td className={`${s.cell} ${className}`} {...rest} />
}

export const TableHeader: FC<TableHeaderType> = ({ onSort, sort, column, className, ...rest }) => {
    const handleSort = (key: string, sortable?: boolean) => () => {
        if (!onSort || !sortable) {
            return
        }

        if (sort?.key !== key) {
            return onSort({ direction: 'asc', key })
        }

        if (sort.direction === 'desc') {
            return onSort(null)
        }

        return onSort({
            direction: sort?.direction === 'asc' ? 'desc' : 'asc',
            key,
        })
    }

    const displaySort = (accessorItem: KeyType) => {
        if (sort && sort.key === accessorItem) {
            switch (sort.direction) {
                case 'asc':
                    return <IconComponent name={'arrowUp'} size={16} className={s.styleIcon} />
                case 'desc':
                    return <IconComponent name={'arrowDown'} size={16} className={s.styleIcon} />
                default:
                    return ''
            }
        }
    }

    return (
        <Table.Header className={`${className}`} {...rest}>
            <Table.Row>
                {column.map(el => {
                    return (
                        <Table.Cell key={el.key} onClick={() => handleSort(el.key, el.sortable)}>
                            <div className={s.containerIcons}>
                                {el.title}
                                {displaySort(el.key)}
                            </div>
                        </Table.Cell>
                    )
                })}
            </Table.Row>
        </Table.Header>
    )
}

export const TableContentBody: FC<ContentBody> = ({ tableData, columns, className, ...rest }) => {
    return (
        <tbody className={`${className}`} {...rest}>
        {tableData.map(data => (
            <Table.Row key={data.id}>
                {columns.map(columnItem => (
                    <Table.Cell key={columnItem.key}>{data[columnItem.key]}</Table.Cell>
                ))}
            </Table.Row>
        ))}
        </tbody>
    )
}

export const Table = {
    Root,
    Header,
    Body,
    Row,
    Cell,
}
