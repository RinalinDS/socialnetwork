import React from "react";
import {addLikeCountAC, addPostAC, profileReducerStateType,} from "../../../redux/profileReducer";
import {MyPost} from "./MyPost";
import {AppRootStateType} from "../../../redux/redux-store";
import {useDispatch, useSelector} from "react-redux";


export const MyPostContainer = function () {

    const state = useSelector<AppRootStateType, profileReducerStateType>(state => state.profilePage)
    const dispatch = useDispatch()


    const addPost = (post: string) => {
        dispatch(addPostAC(post))
    }


    const onClickAddLikeHandler = (id: number, likescount: number) => {
        dispatch(addLikeCountAC(id, likescount))
    }

    return (
        <MyPost posts={state.posts} likeClickHandler={onClickAddLikeHandler}
                addPost={addPost} />
    )
}