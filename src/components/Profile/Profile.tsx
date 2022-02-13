import React from "react";
import s from "./Profile.module.css"

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {GeneralType} from "../../redux/store";
import {MyPostContainer} from "./MyPost/MyPostContainer";


type propsType = {
    dispatch: (action: GeneralType) => void
}

export const Profile = function (props: propsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostContainer dispatch={props.dispatch}/>


        </div>
    )
}