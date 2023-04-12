import React from "react";
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";


export const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <NavLink to={'/page/0'} className={s.link}>One</NavLink>
            <NavLink to={'/page/1'} className={s.link}>Two</NavLink>
            <NavLink to={'/page/2'} className={s.link}>Three</NavLink>
        </div>
    )
}