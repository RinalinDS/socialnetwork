import React from "react";
import s from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../App";
import {GeneralType} from "../../redux/store";


type propsType = {
    posts: Array<postsType>
    newTextMsg: string
    dispatch: (action: GeneralType) => void

}

export const Profile = function (props: propsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost
                posts={props.posts}
                newTextMsg={props.newTextMsg}
                dispatch={props.dispatch}

            />
        </div>
    )
}