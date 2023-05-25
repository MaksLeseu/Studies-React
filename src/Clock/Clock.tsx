import React, {useEffect, useState} from "react";
import s from './Clock.module.css'

type ClockPropsType = {

}


export const Clock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setDate(new Date())
    })

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


/*const stringTime: string = `${date.getUTCHours() + 2} : ${date.getUTCMinutes()} : ${date.getUTCSeconds()}`
const stringDate: string = `(${date.getUTCDate()}.${date.getUTCMonth() + 1}.${date.getUTCFullYear()})`*/
