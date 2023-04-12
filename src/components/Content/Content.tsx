import React from "react";
import s from './Content.module.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {PageOne} from "./Page/PageOne";
import {PageTwo} from "./Page/PageTwo";
import {Error404} from "./Page/Error404";
import {Page} from "./Page/Page";
import {state} from "../State/State";


export const Content = () => {
    return (
        <div className={s.content}>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/page/0'} />} />
                <Route path={'/page/:id'} element={<Page pages={state.pages} />} />
                <Route path={'/*'} element={<Error404 />} />
            </Routes>
        </div>
    )
}