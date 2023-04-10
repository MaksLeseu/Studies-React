/*
import React, {useState} from "react";
import { ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {ButtonOnOff} from "./ButtonOnOff";


export default {
    title: 'ButtonOnOff',
    Component: ButtonOnOff,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ButtonOnOff>


export const ButtonOn = () => <ButtonOnOff value={true} onClick={action('clicked')} />

export const Btn = () => {
    const [button, setButton] = useState<boolean>(false)

    return <ButtonOnOff value={button} onClick={setButton} />
}*/
