import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {profileType} from "../../redux/profileReducer";

type propsType = {
    children?: any
    profile: profileType
}

export const Profile = function (props: propsType) {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    )
}