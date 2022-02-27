import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"
import {Friends} from "./Friends/Friends";
import {FriendsType} from "../../App";

type propsType = {
    friends: Array<FriendsType>
}

export const Navbar = function (props: propsType) {



    return (
        <nav className={s.nav}>
            <div>
                <NavLink to={"/profile/"} activeClassName={s.active_link}>Profile</NavLink>

            </div>
            <div>
                <NavLink to={"/dialogs/"} activeClassName={s.active_link}>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'/users/'} activeClassName={s.active_link}>Users</NavLink>
            </div>
            <div>
                <NavLink to={'/news/'} activeClassName={s.active_link}>News</NavLink>
            </div>
            <div>
                <NavLink to={'/music/'} activeClassName={s.active_link}> Music</NavLink>
            </div>
            <div>
                <NavLink to={'/settings/'} activeClassName={s.active_link}>Settings</NavLink>
            </div>

            <div>

                <Friends friends={props.friends}/>

            </div>
        </nav>
    )
}