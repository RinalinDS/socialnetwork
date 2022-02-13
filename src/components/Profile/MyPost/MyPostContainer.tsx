import React from "react";
import {GeneralType} from "../../../redux/store";
import {
    addLikeCountAC,
    addPostAC,
    profileReducerStateType,
    updatePostMessageAC
} from "../../../redux/profileReducer";
import {MyPost} from "./MyPost";
import {AppRootStateType} from "../../../redux/redux-store";
import {useSelector} from "react-redux";


type propsType = {
    dispatch: (action: GeneralType) => void
}

export const MyPostContainer = function (props: propsType) {

    const state = useSelector<AppRootStateType, profileReducerStateType>(state => state.profilePage)


    const addPost = () => {
        props.dispatch(addPostAC())
    }


    const onChangeHandler = (text: string) => {
        /* let action: GeneralType = { type: "UPDATE-POST-MESSAGE", text }*/
        props.dispatch(updatePostMessageAC(text))
    }

    const onClickAddLikeHandler = (id: number, likescount: number) => {
        props.dispatch(addLikeCountAC(id, likescount))
    }

    return (
        <MyPost posts={state.posts} newTextMsg={state.newPostText} likeClickHandler={onClickAddLikeHandler}
                addPost={addPost} updatePostMsg={onChangeHandler}/>
    )
}