import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"

export const Navbar = function () {

    const isLinkActive = (x: { isActive: boolean }) => x.isActive ? s.active_link : s.item


    return (
        <nav className={s.nav}>
            <div>
                <NavLink to={"/profile/"} className={isLinkActive}>Profile</NavLink>

            </div>
            <div>
                <NavLink to={"/dialogs/"} className={isLinkActive}>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'/news/'} className={isLinkActive}>News</NavLink>
            </div>
            <div>
                <NavLink to={'/music/'} className={isLinkActive}> Music</NavLink>
            </div>
            <div>
                <NavLink to={'/settings/'} className={isLinkActive}>Settings</NavLink>
            </div>
        </nav>
    )
}