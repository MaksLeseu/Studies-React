import React from "react";
import './Star.css';

type StarBodyPropsType = {
    completed: boolean
}

export function StarBody(props: StarBodyPropsType) {

    return <span className={props.completed ? 'star': ''}>Star </span>;

}