import { Modal, Text } from "@mantine/core";

export interface TaskModalProps {
    opened: boolean;
    close: () => void;
}

export function TaskModal(props: TaskModalProps) {
    return (
        <>
            <Modal opened={props.opened} onClose={props.close} title="Authentication">
                <Text>Test</Text>
            </Modal>
        </>
    )
}