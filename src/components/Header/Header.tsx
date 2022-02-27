import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

type propsType = {
     isAuth: boolean
    login:string
}

export const Header = function (props: propsType) {
    return (
        <header className={s.header}>
            <img src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png" alt="seas"/>
            <div className={s.loginBlock}>
                {props.isAuth ? <span>{props.login}</span>: <NavLink to={'/login'} >Login</NavLink>}

            </div>
        </header>
    )
}