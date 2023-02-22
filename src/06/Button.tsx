import React from "react";


export function Button(props: any) {

    function onClickButton() {
        props.setMessage([{message: props.title}, ...props.message]);
        props.setTitle('');
    }

    return (
        <>
            <button onClick={onClickButton}>{props.name}</button>
        </>
    )
}