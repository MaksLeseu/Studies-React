import React from "react";
import './ButtonOnOff.css'

type ButPropsType = {
    value: boolean
    onClick: (value: boolean) => void
}

export function ButtonOnOff(props: ButPropsType) {

    function btn() {
        alert('Button Work!');
    }

    return (
        <div>
            <div className={'but__container'}>
                <button onClick={() => props.onClick(true)} className={props.value ? 'on' : ''}>on</button>
                <button onClick={() => props.onClick(false)} className={!props.value ? 'off' : ''}>off</button>
                <div className={props.value ? 'circle-green' : 'circle-red'}></div>
            </div>
        </div>
    )
}