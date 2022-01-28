import React from "react";
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";




export const MyPost = function () {

    const postsData = [
        {id: 1, message: "General Kenobi!", likescount: 7},
        {id: 1, message: "Hello There", likescount: 10},
        {id: 1, message: "YOU WERE MY BROTHER ANAKIN", likescount: 141},
    ]

    let postsElements = postsData.map(m => <Post message={m.message} likecount={m.likescount}/>)

    return (
        <div className={s.postsBlock}>

            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>

        </div>
    )
}