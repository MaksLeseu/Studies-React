import React, {ChangeEvent, useState} from "react";


export function InputTwo(props: any) {

    function onChangeInputTwo(event: ChangeEvent<HTMLInputElement>) {
        props.setTitle(event.currentTarget.value);
    }

    return (
        <>
            <input onChange={onChangeInputTwo} type={'text'} />
        </>
    )
}