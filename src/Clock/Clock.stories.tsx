import React, {useEffect, useState} from "react";
import {Clock} from "./Clock";
import s from "./Clock.module.css";

export default {
    title: 'CLOCK/Time',
    component: Clock,
}

export const ClockStoryExampleStatic = () => {
    const [date, setDate] = useState(new Date())

    const time = `${date.getUTCHours() + 2} : ${date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes()} : ${date.getUTCSeconds() < 10 ? '0' + date.getUTCSeconds() : date.getUTCSeconds()}`;

    return (
        <div className={s.clock}>
            <div className={s.container}>
                <span className={s.time}>
                    {time}
                </span>
            </div>
        </div>
    )
}

export const ClockStoryExampleTwo = () => {
    return <Clock />
}