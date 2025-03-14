import { Checkbox, Group } from "@mantine/core";

export function TTChecklistCell() {
    const numOfChecks = 3;
    const checks = [];

    for (let i = 0; i < numOfChecks; i++) {
        checks.push((
            <Checkbox></Checkbox>
        ));
    }
    
    return (
        <>
            <Group justify="center">
                {checks}
            </Group>
        </>
    )
}