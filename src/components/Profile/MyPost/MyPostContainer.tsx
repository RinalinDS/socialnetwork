import React, {FC} from "react";
import {addLikeCountAC, addPostAC,} from "../../../redux/profileReducer";
import {MyPost} from "./MyPost";
import {AppRootStateType} from "../../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {postsType} from '../../../Types/AppTypes';


export const MyPostContainer: FC = () => {
  const posts = useSelector<AppRootStateType, postsType[]>(state => state.profilePage.posts)
  const dispatch = useDispatch()
  const addPost = (post: string) => {
    dispatch(addPostAC(post))
  }
  const onClickAddLikeHandler = (id: number, likesCount: number) => {
    dispatch(addLikeCountAC(id, likesCount))
  }

  return (
    <MyPost posts={posts} likeClickHandler={onClickAddLikeHandler}
            addPost={addPost}/>
  )
}