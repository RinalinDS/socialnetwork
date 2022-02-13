import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";
import {postsType} from "../../../App";


type propsType = {
    posts: Array<postsType>
    newTextMsg: string
    addPost: () => void
    updatePostMsg: (text: string) => void
    likeClickHandler: (id: number, likescount: number) => void


}

export const MyPost = function (props: propsType) {

    let postsElements = props.posts.map(m => <Post likeClickHandler={props.likeClickHandler} id={m.id}
                                                   message={m.message} likecount={m.likescount}/>)

    const addPost = () => {
        props.addPost()
    }


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            let text = e.currentTarget.value
            props.updatePostMsg(text)
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.code === "Enter") {
            e.preventDefault() // чтобы не переходило на следующую строку и не бесило меня возвращать обратно
            addPost()
        }

    }


    return (
        <div className={s.postsBlock}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea value={props.newTextMsg} onKeyPress={onKeyPressHandler} onChange={onChangeHandler}/>
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