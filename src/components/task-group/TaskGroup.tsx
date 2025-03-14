import { Badge, Button, Card, Group, Stack, Text } from "@mantine/core";
import { TaskTable } from "../task-table/TaskTable";
import { useDisclosure } from "@mantine/hooks";
import { TaskModal } from "../task-modal/TaskModal";

export function TaskGroup() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Card withBorder shadow="md" padding="lg" radius="md">
                <Card.Section withBorder inheritPadding py="md">
                    <Group justify="space-between">
                        <Stack gap="xs">
                            <Text fw={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink">On Sale</Badge>
                        </Stack>
                        <Group>
                            <Button variant="outline" onClick={() => open()}>A</Button>
                            <Button variant="outline">B</Button>
                            <Button variant="outline">C</Button>
                        </Group>
                    </Group>
                </Card.Section>
                
                <TaskTable></TaskTable>
            </Card>

            <TaskModal opened={opened} close={close}></TaskModal>
        </>
    )
}