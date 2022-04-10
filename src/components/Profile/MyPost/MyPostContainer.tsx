import React from "react";
import {addLikeCountAC, addPostAC, profileReducerStateType,} from "../../../redux/profileReducer";
import {MyPost} from "./MyPost";
import {AppRootStateType} from "../../../redux/store";
import {useDispatch, useSelector} from "react-redux";


export const MyPostContainer = function () {

    const state = useSelector<AppRootStateType, profileReducerStateType>(state => state.profilePage)
    const dispatch = useDispatch()


    const addPost = (post: string) => {
        dispatch(addPostAC(post))
    }


    const onClickAddLikeHandler = (id: number, likesCount: number) => {
        dispatch(addLikeCountAC(id, likesCount))
    }

    return (
        <MyPost posts={state.posts} likeClickHandler={onClickAddLikeHandler}
                addPost={addPost} />
    )
}