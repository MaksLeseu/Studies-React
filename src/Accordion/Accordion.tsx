import React, {useState} from "react";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setAccordionBody: any
}

export function Accordion(props: AccordionPropsType) {

    const listDropdown = () => props.setAccordionBody(!props.collapsed );

    return (
        <div>
            { props.title }
            <button onClick={listDropdown}>Click</button>
            { !!props.collapsed && <AccordionBody /> }
        </div>
    )
}