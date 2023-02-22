import React, {ChangeEvent, useState} from "react";

export function Input(props: any) {

    let [title, setTitle] = useState('');

    function onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.currentTarget.value);
    }


    function onClickButtonHandler() {
        props.setMessage([{message: title}, ...props.message]);
        setTitle('');
    }

    return (
        <div>
            <input value={title} type={"text"} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}