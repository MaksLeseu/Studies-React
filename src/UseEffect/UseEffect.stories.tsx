import React, {useEffect, useState} from "react";

export default {
    title: 'Use Effect'
}

function generateData() {
    return 12321321312
}

export const Example = () => {
    const [counter, setCounter] = useState(generateData)

    useEffect(() => {
        document.title = counter.toString() // Изменение заголовка. Пригодится в соц сети. - Выводить имя пользователя, который редактируется (сайд эффект)
    }, [counter])                      // useEffect срабатывает после отрисовки контента

    return <>
        <button onClick={() => setCounter(counter + 1)}></button>
    </>

}
export const Example2 = () => {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return <>
        Hello, Italia: {`${date.getUTCHours() + 2} : ${date.getUTCMinutes()} : ${date.getUTCSeconds()}`}
    </>

}