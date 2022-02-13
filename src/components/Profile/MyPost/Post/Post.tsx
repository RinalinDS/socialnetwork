import React from "react";
import s from "./Post.module.css"
import {GeneralType} from "../../../../redux/store";
import {addLikeCountAC} from "../../../../redux/profileReducer";


type PropsType = {
    message : string
    likecount : number
    dispatch: (action: GeneralType) => void
    id: number
}

export const Post = function (props : PropsType) {
    const onClickAddLikeHandler = () => {
        props.dispatch(addLikeCountAC(props.id, props.likecount))
    }


    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qh8eESLXwl36bofkdzT9g-kp5cUSoezKWaced8kqfun3E4KqFjv_sL4g9xlCagSUZWU&usqp=CAU" />
            {props.message}
            <div>
               <span onClick={onClickAddLikeHandler}>Likes : {props.likecount} </span>
            </div>
        </div>
    )
}