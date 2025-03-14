import { Group, NumberInput, Slider } from "@mantine/core";

export function TTSliderCell() {
    const sliderMarks = [

    ];
    return (
        <>
            <Group grow>
                <NumberInput></NumberInput>
                <Slider marks={sliderMarks}></Slider>
            </Group>
        </>
    )
}