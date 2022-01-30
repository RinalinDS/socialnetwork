import React from "react";
import s from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../App";



type propsType = {
    posts : Array<postsType>
    addPost: () => void
    newTextMsg: string
    updatePostMessage: (text: string) => void
}

export const Profile = function (props: propsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.posts} addPost={props.addPost} newTextMsg={props.newTextMsg}
                    updatePostMessage={props.updatePostMessage}
            />
        </div>
    )
}