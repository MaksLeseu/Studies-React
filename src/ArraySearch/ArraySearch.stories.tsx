import React, {ChangeEvent, useState} from "react";

export default {
    title: 'Array Search'
}

type UserType = {
    id: number
    name: string
}

export const ArraySearch = () => {
    const [value, setValue] = useState<number>(0)
    const [user, setUser] = useState('')

    let users: UserType[] = []
    for (let i = 1; i < 100000; i++) {
        users.push({id: i - 1, name: 'Max' + (i - 1)})
    }

    let valueInput;

    const onClick = () => {
        setUser(JSON.stringify(users.filter(u => u.id === value)))
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.currentTarget.value))
    }

    return (
        <div>
            <input value={valueInput} onChange={onChange}/>
            <button onClick={onClick}>search</button>
            <div>{user}</div>
        </div>
    )
}