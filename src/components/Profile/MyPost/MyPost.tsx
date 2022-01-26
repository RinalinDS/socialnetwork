import React from "react";
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";


export const MyPost = function () {
    return (
        <div>

            <div>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>

            <Post message="General Kenobi!" likecount={5}/>
            <Post message ="Hello There"  likecount={10}/>

        </div>
    )
}