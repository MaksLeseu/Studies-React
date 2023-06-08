import React from "react";
import s from './Clock.module.css'


export const ClockPointer = () => {
    return (
        <div className={s.container_pointer}>
            <div className={s.arrow}>s</div>
        </div>
    )
}