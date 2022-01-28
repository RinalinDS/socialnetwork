import s from "../Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemspropsType = {
    name: string
    id: number
}
export const DialogItems = ({name, id}: DialogItemspropsType) => {

    const classNameForNavLinkInDialogs = (x: { isActive: boolean }) => x.isActive ? s.dialogactive : s.dialog

    return (
        <div>
            <NavLink className={classNameForNavLinkInDialogs} to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}