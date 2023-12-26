import { Meta, Story } from '@storybook/react'
import dataTest from './testData.json'
import {ColumnType, Table, TableContentBody, TableHeader} from "@/common/components/ui/table/table";

const meta: Meta = {
    title: 'Components/table',
    component: Table.Root,
    args: {},
    parameters: {},
}

export default meta

export const TestTable: Story = () => (
    <Table.Root>
        <Table.Header>
            <Table.Row>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>Cards</Table.Cell>
                <Table.Cell>Last_Updated</Table.Cell>
                <Table.Cell>Created</Table.Cell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {dataTest.map((row, index) => (
                <Table.Row key={index}>
                    <Table.Cell>{row.Name}</Table.Cell>
                    <Table.Cell>{row.Cards}</Table.Cell>
                    <Table.Cell>{row.LastUpdate}</Table.Cell>
                    <Table.Cell>{row.CreatedBy}</Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table.Root>
)

let columnTest: ColumnType = [
    { key: 'Name', title: 'Name', sortable: false },
    { key: 'Cards', title: 'Cards', sortable: true },
    { key: 'LastUpdate', title: 'Last Update', sortable: true },
    { key: 'CreatedBy', title: 'Created by', sortable: false },
]

export const TableTest2 = () => {
    return (
        <Table.Root>
            <TableHeader column={columnTest} sort={{ key: 'LastUpdate', direction: 'asc' }} />
            <TableContentBody tableData={dataTest} columns={columnTest} />
        </Table.Root>
    )
}

TestTable.args = {}