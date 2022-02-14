import React from "react";
import {
    addLikeCountAC,
    addPostAC,
    profileReducerStateType,
    updatePostMessageAC
} from "../../../redux/profileReducer";
import {MyPost} from "./MyPost";
import {AppRootStateType} from "../../../redux/redux-store";
import {useDispatch, useSelector} from "react-redux";



export const MyPostContainer = function () {

    const state = useSelector<AppRootStateType, profileReducerStateType>(state => state.profilePage)
    const dispatch = useDispatch()


    const addPost = () => {
        dispatch(addPostAC())
    }


    const onChangeHandler = (text: string) => {
        /* let action: GeneralType = { type: "UPDATE-POST-MESSAGE", text }*/
        dispatch(updatePostMessageAC(text))
    }

    const onClickAddLikeHandler = (id: number, likescount: number) => {
        dispatch(addLikeCountAC(id, likescount))
    }

    return (
        <MyPost posts={state.posts} newTextMsg={state.newPostText} likeClickHandler={onClickAddLikeHandler}
                addPost={addPost} updatePostMsg={onChangeHandler}/>
    )
}