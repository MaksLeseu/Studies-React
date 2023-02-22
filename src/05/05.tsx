import React, {useState} from "react";
import App from "../App";
import '../App.css'


type ItemType = {
    banknote: string
    nominal: number
    number: string
}

type NewComponentType = {
    func: any
    current: Array<ItemType>
}

export function NewComponent(props: NewComponentType) {

    return (
        <>
            <ul>
                {props.current.map((item: ItemType, index: number) => {
                    return (
                        <li key={index}>
                            <span>{item.banknote}</span>
                            <span>{item.nominal}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button className={'btn'} onClick={() => props.func('all')}>all</button>
            <button className={'btn'} onClick={() => props.func('dollar')}>dollar</button>
            <button className={'btn'} onClick={() => props.func('ruble')}>ruble</button>
        </>
    )
}


