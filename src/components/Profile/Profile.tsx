import React from "react";
import s from "./Profile.module.css"
export const Profile = function () {
    return (
        <div className={s.content}>
            <div>
                <img src="https://oceanservice.noaa.gov/facts/sea.jpg" alt="seas"/>
            </div>
            <div>
                ava + desc
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    )
}