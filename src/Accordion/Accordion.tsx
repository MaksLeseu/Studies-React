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
            <h3 onClick={listDropdown}>{ props.title }</h3>
            { props.collapsed && <AccordionBody /> }
        </div>
    )
}