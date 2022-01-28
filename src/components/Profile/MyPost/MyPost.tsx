import React from "react";
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";


const postsData = [
    {id: 1, message: "General Kenobi!", likescount: 7},
    {id: 1, message: "Hello There", likescount: 10}
]

export const MyPost = function () {
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
                <Post message={postsData[0].message} likecount={postsData[0].likescount}/>
                <Post message={postsData[1].message} likecount={postsData[1].likescount}/>
            </div>

        </div>
    )
}