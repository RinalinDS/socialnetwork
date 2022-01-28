import React from "react";
import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div >
            <div>
                <img src="https://oceanservice.noaa.gov/facts/sea.jpg" alt="seas"/>
            </div>
            <div className={s.block}>
                ava + desc
            </div>
        </div>
    )
}