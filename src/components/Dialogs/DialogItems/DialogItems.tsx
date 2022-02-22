import {NavLink} from "react-router-dom";
import React from "react";
import s from './DialogItems.module.css'

type DialogItemspropsType = {
    name: string
    id: number
    avatar: string
}
export const DialogItems = ({name, id, ...props}: DialogItemspropsType) => {

    // const classNameForNavLinkInDialogs = (x: { isActive: boolean }) => x.isActive ? s.dialogactive : s.dialog // for react-router-dom 6 clasName in navLink

    return (
        <div className={s.item}>
            <img src={props.avatar} alt='avatar' />
            <NavLink activeClassName={s.dialogactive}  className={s.dialog} to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}