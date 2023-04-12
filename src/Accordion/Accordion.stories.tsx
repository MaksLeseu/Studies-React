import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    Component: Accordion,
}


const callback = action('accordion mode')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion title={'Menu'} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback} />
export const UsersUnCollapsedMode = () => <Accordion title={'Users'} collapsed={false} onChange={callback} items={[]} onClick={onClickCallback} />

export const ModeChanged = () => {
    const [value, setValue] = useState<boolean>(true)
    const items = [{title: 'Html', value: 1}, {title: 'CSS and SCSS', value: 2}, {title: 'JavaScript and React', value: 3}]
    return <Accordion title={'Users'} collapsed={value} onChange={() => setValue(!value)} items={items} onClick={onClickCallback} />
}