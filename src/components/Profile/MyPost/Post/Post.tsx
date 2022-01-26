import React from "react";
import s from "./Post.module.css"

type PropsType = {
    message : string
    likecount : number
}

export const Post = function (props : PropsType) {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qh8eESLXwl36bofkdzT9g-kp5cUSoezKWaced8kqfun3E4KqFjv_sL4g9xlCagSUZWU&usqp=CAU" />
            {props.message}
            <div>
               <span>Likes : {props.likecount} </span>
            </div>
        </div>
    )
}