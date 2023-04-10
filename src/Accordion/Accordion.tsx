import React, {useState} from "react";
import {AccordionBody} from "./AccordionBody";

export type AccordionPropsType = {
    title: string
    /**
     *  Передает boolean [Marwn](accordion) value
     */
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