import React from "react";
import './Star.css';
import {LevelStarType} from "../App";

type StarBodyPropsType = {
    completed: boolean
    onClick: (value: LevelStarType) => void
    value: LevelStarType
}

export function StarBody(props: StarBodyPropsType) {

    return (
        <span
            onClick={() => props.onClick(props.value)}
            className={props.completed ? 'star': ''}>

        Star </span>
    )

}