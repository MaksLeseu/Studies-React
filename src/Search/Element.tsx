import React from "react";

type ElementType = {
    title: string
    body: string
}

export const Element = (props: ElementType) => {
    return (
        <li>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </li>
    )
}