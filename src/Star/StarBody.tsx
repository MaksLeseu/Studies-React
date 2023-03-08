import React from "react";
import './Star.css';

type StarBodyPropsType = {
    completed: boolean
    setLevelStar: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}

export function StarBody(props: StarBodyPropsType) {

    return (
        <span
            onClick={() => props.setLevelStar(props.value)}
            className={props.completed ? 'star': ''}>

        Star </span>
    )

}