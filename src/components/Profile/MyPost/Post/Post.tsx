import React from "react";
import s from "./Post.module.css"


type PropsType = {
    message : string
    likesCount : number
    likeClickHandler: (id: number, likesCount: number) => void
    id: number
}

export const Post = function (props : PropsType) {
    const onClickAddLikeHandler = () => {
        props.likeClickHandler(props.id, props.likesCount)
    }


    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qh8eESLXwl36bofkdzT9g-kp5cUSoezKWaced8kqfun3E4KqFjv_sL4g9xlCagSUZWU&usqp=CAU" alt={' of seas'}/>
            {props.message}
            <div>
               <span onClick={onClickAddLikeHandler}>Likes : {props.likesCount} </span>
            </div>
        </div>
    )
}