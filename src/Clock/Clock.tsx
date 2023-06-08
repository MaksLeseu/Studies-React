import React, {useEffect, useState} from "react";
import s from './Clock.module.css'


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
            <div className={s.container}>
                <span className={s.time}>
                    {time}
                </span>
            </div>
        </div>
    )
}