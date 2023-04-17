import React, {ChangeEvent, useState} from "react";
import s from './Select.module.css'

type ArrayType = {
    id: string
    technologies: string
}

const array: ArrayType[] = [
    {id: '1', technologies: 'HTML'},
    {id: '2', technologies: 'CSS'},
    {id: '3', technologies: 'JavaScript'},
    {id: '4', technologies: 'React'},
]

export const Select = () => {

    const [value, setValue] = useState<string>('HTML')
    const [visible, setVisible] = useState(false)

    const clickOnList = (item: string) => {
        if (item !== value) {
            setValue(item)
            setVisible(false)
        }
    }

    const onClick = () => setVisible(!visible)

    const sel: any = array.map((i) => (
        <div
            id={'stroka' + i.id}
            key={i.id}
            className={i.technologies === value ? s.link: ''}
            onClick={() => clickOnList(i.technologies)}
        >
            {i.technologies}
        </div>
    ))

    return (
        <div className={s.selectContainer}>
            <div
                onClick={onClick}
                className={s.select}
            >
                {value}
                <span className={s.button}></span>
            </div>
            <div className={visible ? `${s.list} ${s.listActive}` : s.list }>
                {sel}
            </div>
        </div>
    )
}