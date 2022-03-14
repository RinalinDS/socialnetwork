import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

type propsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header = function (props: propsType) {
    return (
        <header className={s.header}>
            <img src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png" alt="seas"/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div><span>{props.login}</span> <div>
                        <button onClick={props.logout}> Logout</button>
                    </div></div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}