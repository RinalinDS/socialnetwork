import React from "react";
import s from "./Post.module.css"
import {SiGooglemessages} from 'react-icons/all';


type PropsType = {
  message: string
  likesCount: number
  likeClickHandler: (id: number, likesCount: number) => void
  id: number
}

export const Post = function (props: PropsType) {
  const onClickAddLikeHandler = () => {
    props.likeClickHandler(props.id, props.likesCount)
  }


  return (
    <div className={s.item}>
      <div className={s.message}>
        <SiGooglemessages size={30} color='green'/>
        <span style={{marginLeft: '5px'}}>{props.message}</span>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
        <span onClick={onClickAddLikeHandler}>Likes : {props.likesCount} </span>
      </div>
    </div>
  )
}