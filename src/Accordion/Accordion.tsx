import React, {useState} from "react";
import {AccordionBody} from "./AccordionBody";

export type ItemsPropsType = {
    title: string
    value: number
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    items: ItemsPropsType[]
    onChange: () => void
    onClick: () => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <h3 onClick={(e) => props.onChange()}>{ props.title }</h3>
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} /> }
        </div>
    )
}