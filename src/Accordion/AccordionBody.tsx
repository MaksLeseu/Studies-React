import React from "react";
import {ItemsPropsType} from "./Accordion";

type AccordionBodyPropsType = {
    items: ItemsPropsType[]
    onClick: any
}

export const AccordionBody = (props: AccordionBodyPropsType) => {

    return (
        <ul>
            {props.items.map(i => <li key={i.value} onClick={props.onClick(i.value)} >{i.title}</li>)}
        </ul>
    )
}