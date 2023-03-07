import React from "react";
import './ButtonOnOff.css'

type ButPropsType = {
    value: boolean
}

export function ButtonOnOff(props: ButPropsType) {
    return (
        <div>
            <div className={'but__container'}>
                <button className={props.value ? 'on' : ''}>on</button>
                <button className={!props.value ? 'off' : ''}>off</button>
                <div className={props.value ? 'circle-green' : 'circle-red'}></div>
            </div>
        </div>
    )
}