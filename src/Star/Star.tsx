import React, {useState} from "react";
import {StarBody} from "./StarBody";
import {LevelStarType} from "../App";

type StarPropsType = {
    level: number
    setLevelStar: (value: 1 | 2 | 3 | 4 | 5) => void
}


export function Star(props: StarPropsType) {

    return (
        <div>
            <StarBody completed={props.level > 0} setLevelStar={props.setLevelStar} value={1} />
            <StarBody completed={props.level > 1} setLevelStar={props.setLevelStar} value={2} />
            <StarBody completed={props.level > 2} setLevelStar={props.setLevelStar} value={3} />
            <StarBody completed={props.level > 3} setLevelStar={props.setLevelStar} value={4} />
            <StarBody completed={props.level > 4} setLevelStar={props.setLevelStar} value={5} />
        </div>
    )
}