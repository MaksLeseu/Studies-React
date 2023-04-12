import React from "react";
import {PagesType} from "../../State/State";
import {useParams} from "react-router-dom";

type PagePropsType = {
    pages: PagesType[]
}

export const Page = (props: PagePropsType) => {
    const params = useParams()

    return (
        <div>
            <div>
                {props.pages[Number(params.id)].heading}
            </div>
            <div>
                {props.pages[Number(params.id)].about}
            </div>
        </div>
    )
}