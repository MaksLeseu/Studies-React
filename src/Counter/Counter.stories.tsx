/*
import React, {useEffect, useState} from "react";

export default {
    title: 'Counter',
    component: Counter
}

export const CounterBaseExample = () => {
    console.log('Component rendered')
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log('useEffect is working')

        return () => {
            console.log('useEffect - Did mount')
        }
    }, [number])

    const addNumber = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <button onClick={addNumber}>+</button>
            <span>{' ' + number}</span>
        </div>
    )
}*/
