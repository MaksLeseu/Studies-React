import React from "react";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            { props.title }
            { !!props.collapsed && <AccordionBody /> }
        </div>
    )
}