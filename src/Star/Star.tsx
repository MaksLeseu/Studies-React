import React, {useState} from "react";
import {StarBody} from "./StarBody";
import {LevelStarType} from "../App";

type StarPropsType = {
    level: number
    onClick: (value: LevelStarType) => void
}


export function Star(props: StarPropsType) {

    return (
        <div>
            <StarBody completed={props.level > 0} onClick={props.onClick} value={1} />
            <StarBody completed={props.level > 1} onClick={props.onClick} value={2} />
            <StarBody completed={props.level > 2} onClick={props.onClick} value={3} />
            <StarBody completed={props.level > 3} onClick={props.onClick} value={4} />
            <StarBody completed={props.level > 4} onClick={props.onClick} value={5} />
        </div>
    )
}