import React, {useState} from "react";
import {StarBody} from "./StarBody";
import {LevelStarType} from "../App";

type StarPropsType = {
    level: number
    setLevelStar: any
    levelStar: LevelStarType
    changeLevelStar: (id: number) => void
}


export function Star(props: StarPropsType) {

    return (
        <div>
            <span onClick={() => props.changeLevelStar(1)}><StarBody completed={props.level > 0} /></span>
            <span onClick={() => props.changeLevelStar(2)}><StarBody completed={props.level > 1} /></span>
            <span onClick={() => props.changeLevelStar(3)}><StarBody completed={props.level > 2} /></span>
            <span onClick={() => props.changeLevelStar(4)}><StarBody completed={props.level > 3} /></span>
            <span onClick={() => props.changeLevelStar(5)}><StarBody completed={props.level > 4} /></span>
        </div>
    )
}