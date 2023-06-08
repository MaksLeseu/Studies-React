import React, {useEffect, useState} from "react";


export const Counter = () => {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log('useEffect')
        setTimeout(() => {
            console.log('setTimeout')
            setNumber(number + 100)
        }, 2000)
    }, [])

    const addNumber = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <button onClick={addNumber}>+</button>
            <span>{' ' + number}</span>
        </div>
    )
}