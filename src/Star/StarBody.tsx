import React from "react";
import './Star.css';

type StarBodyPropsType = {
    completed: boolean
}

export function StarBody(props: StarBodyPropsType) {

    if (props.completed === true) {
        return (
            <>
                <span className={'star'}>Star </span>
            </>
        )
    } else {
        return (
            <>
                <span>Star </span>
            </>
        )
    }

}