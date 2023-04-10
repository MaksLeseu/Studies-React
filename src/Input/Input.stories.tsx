import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input',
}

export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <> <input value={value} onChange={onChange}/> - {value} </>

}

export const TrackValueOfUncontrolledInputJavascriptNative = () => {
    const [value, setValue] = useState('')
    return <> <input id={'inputId'}/> <button onClick={() => {
        const el = document.getElementById('inputId') as HTMLInputElement

        setValue(el.value)
    }}>save</button> - actual value: {value} </>

}


export const GetValueOfUncontrolledInputPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef} id={'inputId'}/> <button onClick={save}>save</button> - actual value: {value} </>

}

export const CheckBox = () => {
    const [checkBox, setCheckBox] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckBox(e.currentTarget.checked)
    }

    return <> <input checked={checkBox} type={"checkbox"} onChange={onChange} /> </>
}
export const Selected = () => {
    const [selected, setSelected] = useState<string | undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.currentTarget.value)
    }

    return <>
        <select value={selected} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>Kielce</option>
            <option value={'2'}>Venecia</option>
            <option value={'3'}>Rom</option>
        </select>
    </>
}

