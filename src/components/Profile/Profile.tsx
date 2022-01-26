import React from "react";
import s from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";


export const Profile = function () {
    return (
        <div className={s.content}>
            <div>
                <img src="https://oceanservice.noaa.gov/facts/sea.jpg" alt="seas"/>
            </div>
            <div>
                ava + desc
            </div>
            <MyPost/>
        </div>
    )
}