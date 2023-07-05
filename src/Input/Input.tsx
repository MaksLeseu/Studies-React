import React, {ChangeEvent, useState} from "react";

export const Input = () => {
    const [value, setValue] = useState('')
    const [valueInput, setValueInput] = useState('')

    const onChange = (e: any) => {
        setValueInput(e.currentTarget.value)
    }

    const onClick = () => {
        setValue(valueInput)
        setValueInput('')
    }

    return (
        <div>
            <input value={valueInput} onChange={onChange} />
            <button onClick={onClick}>+</button>
            <div>{value}</div>
        </div>
    )
}