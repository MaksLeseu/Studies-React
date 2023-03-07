import React from "react";
import {StarBody} from "./StarBody";

type StarPropsType = {
    level: number
}

export function Star(props: StarPropsType) {
    return (
        <div>
            <StarBody completed={props.level > 0} />
            <StarBody completed={props.level > 1} />
            <StarBody completed={props.level > 2} />
            <StarBody completed={props.level > 3} />
            <StarBody completed={props.level > 4} />
        </div>
    )
}