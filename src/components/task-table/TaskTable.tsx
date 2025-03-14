import { Table } from "@mantine/core";
import { TTChecklistCell } from "./task-table-checklist-cell/TTChecklistCell";
import { TTSliderCell } from "./task-table-slider-cell/TTSliderCell";

const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

export function TaskTable() {
    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td><TTChecklistCell/></Table.Td>
            <Table.Td><TTSliderCell/></Table.Td>
            <Table.Td>{element.symbol}</Table.Td>
            <Table.Td>{element.mass}</Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <Table withRowBorders withColumnBorders mt="md">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Element position</Table.Th>
                        <Table.Th>Element name</Table.Th>
                        <Table.Th>Symbol</Table.Th>
                        <Table.Th>Atomic mass</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {rows}
                </Table.Tbody>
            </Table>
        </>
    )
}