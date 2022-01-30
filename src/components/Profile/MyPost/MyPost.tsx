import React from "react";
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";
import {postsType} from "../../../App";



type propsType = {
    posts: Array<postsType>
    addPost: () => void
    newTextMsg: string
    updatePostMessage: (text: string) => void
}

export const MyPost = function (props: propsType) {


    let postsElements = props.posts.map(m => <Post message={m.message} likecount={m.likescount}/>)

    let newElement = React.createRef<HTMLTextAreaElement>() // SUPPORT WHY CREATEREF ?

    const addPost = () => {
        props.addPost()
        props.updatePostMessage('')
    }


    const onChangeHandler = () => {
        if (newElement.current) {
            let text = newElement.current.value
            props.updatePostMessage(text)
        }
    }


    return (
        <div className={s.postsBlock}>

            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea value={props.newTextMsg} ref={newElement} onChange={onChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}