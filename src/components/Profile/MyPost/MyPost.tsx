import React from "react";
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";


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
                <Post message="General Kenobi!" likecount={5}/>
                <Post message="Hello There" likecount={10}/>
            </div>

        </div>
    )
}