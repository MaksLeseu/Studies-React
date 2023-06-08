import React from "react";
import s from "./Clock.module.css";


export const ClockDigital = (props: any) => {
    return (
        <div className={s.container_digital}>
                <span className={s.time_digital}>
                    {props.time}
                </span>
        </div>
    )
}