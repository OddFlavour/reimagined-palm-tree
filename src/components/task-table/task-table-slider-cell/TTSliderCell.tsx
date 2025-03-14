import { Group, NumberInput, Slider } from "@mantine/core";

export function TTSliderCell() {
    return (
        <>
            <Group grow>
                <NumberInput></NumberInput>
                <Slider></Slider>
            </Group>
        </>
    )
}