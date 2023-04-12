import React from "react";

export type StateType = {
    pages: PagesType[]
}

export type PagesType = {
    heading: string
    about: string
}

export const state: StateType = {
    pages: [
        {
            heading: 'Машина времени:',
            about: 'Бывают дни, когда опустишь руки'
        },
        {
            heading: 'Трофим:',
            about: 'Ветер в голове, а я влюбленный'
        },
        {
            heading: 'Фактор 2:',
            about: 'Не кому мне засадить всю алею цветами'
        }
    ]
}