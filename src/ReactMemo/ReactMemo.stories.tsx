import React, {useState} from "react";

export default {
    title: 'React Memo'
}

type NewMessageCounterPropsType = {
    counter: number
    addCounter: () => void
    zeroCounter: () => void
}

type UsersPropsType = {
    users: string[]
}

const NewMessageCounter = (props: NewMessageCounterPropsType) => {
    return (
        <div>
            <div>{props.counter}</div>
            <button onClick={props.addCounter}>+</button>
            <button onClick={props.zeroCounter}>x</button>
        </div>
    )
}

const Users = (props: UsersPropsType) => {
    alert('Visible')
    return <div>{props.users.map((i, k) => <div key={k}>{i}</div>)}</div>
}

const Memo = React.memo(Users)

export const Example1 = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState(['Max ', 'Oleg ', 'Filman '])

    const addCounter = () => {
        setCounter(counter + 1)
    }

    const zeroCounter = () => {
        setCounter(0)
    }

    return (
        <div>
            <NewMessageCounter
                counter={counter}
                addCounter={addCounter}
                zeroCounter={zeroCounter}
            />
            <Memo users={users} />
        </div>
    )
}