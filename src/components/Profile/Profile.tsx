import React from "react";
import s from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = function () {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost/>
        </div>
    )
}