import React, {useEffect, useState} from "react";
import s from './Clock.module.css'
import {ClockDigital} from "./ClockDigital";
import {ClockPointer} from "./ClockPointer";


export const Clock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let timeId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timeId)
        }
    }, [])

    const time = `${date.getUTCHours() + 2} : ${date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes()} : ${date.getUTCSeconds() < 10 ? '0' + date.getUTCSeconds() : date.getUTCSeconds()}`;

    return (
        <div className={s.clock}>
            {/*<ClockDigital time={time} />*/}
            <ClockPointer />
        </div>
    )
}