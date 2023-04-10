import React, {useState} from "react";
import {ComponentMeta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from "./Accordion";


export default {
    title: 'components/Accordion title',
    Component: Accordion,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Accordion>


const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const AccordionValueFalse = Template.bind({})
AccordionValueFalse.args = {
    title: 'Menu 1',
    collapsed: false,
    setAccordionBody: false,
}

export const AccordionValueTrue = Template.bind({})
AccordionValueTrue.args = {
    title: 'Menu 2',
    collapsed: true,
    setAccordionBody: true,
}

