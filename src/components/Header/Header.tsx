import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

const headerImgURL = "https://cdn.dribbble.com/users/60166/screenshots/15010083/media/e9ed909341c0030e7660575529765a90.jpg?compress=1&resize=1200x900&vertical=top"

type propsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

export const Header = function (props: propsType) {
  return (
    <header className={s.header}>
      <img src={headerImgURL} alt="seas"/>
      <div className={s.loginBlock}>
        {props.isAuth ? <div><span>{props.login}</span>
            <div>
              <button onClick={props.logout}> Logout</button>
            </div>
          </div>
          : <NavLink to={'/login'}>Login</NavLink>}

      </div>
    </header>
  )
}