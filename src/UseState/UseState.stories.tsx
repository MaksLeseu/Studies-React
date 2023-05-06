import React, {useState} from "react";

export default {
    title: 'Use State'
}

export const Example = () => {
    const [counter, setCounter] = useState<number>(0)

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <div>{counter}</div>
        </div>
    )
}