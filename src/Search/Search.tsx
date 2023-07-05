import React, {useEffect, useState} from "react";
import axios from "axios";
import {Element} from "./Element";
import {useSearchParams} from "react-router-dom";

type ObjectType = {
    body: string
    id: number
    title: string
    userId: number
}

export const Search = () => {
    const [state, setState] = useState<ObjectType[]>([])
    const [value, setValue] = useState<string>('')
    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('post') || ''

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setState(res.data))
    }, [])

    const onChange = (e: any) => {
        const item = e.currentTarget.value
        setValue(item)
        setSearchParams({post: item})
    }

    return (
        <div>
            <form>
                <input type={"search"} value={value} onChange={onChange} />
            </form>
            <ul>
                {
                    state.length ? state.filter(post => post.title.includes(postQuery))
                        .map(el => <Element
                            key={el.id}
                            title={el.title}
                            body={el.body}
                        />
                    ) : <span>The list is empty!</span>
                }
            </ul>
        </div>
    )
}