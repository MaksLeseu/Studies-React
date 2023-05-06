import React, {useState} from "react";

export default {
    title: 'Use State'
}

function generateData() {  // Представим, что эта функция производит сложные вычисления и возвращает нам число
    return 12321321312
}

export const Example = () => {
    const [counter, setCounter] = useState(generateData) // В useState мы можем передать функцию, которая что-то возвращает
                                                         // и это будет изначальным значением. Для того, чтобы не делать
                                                            // постоянно сложные вычисления. (функция выше)
    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}></button> // Здесь, в state прилетит наше изначальное значение и произойдет вычисления
    </>

}