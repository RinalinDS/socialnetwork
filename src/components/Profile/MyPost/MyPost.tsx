import React from "react";
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";
import {postsType} from "../../../App";
import {addPostAC, GeneralType, updatePostMessageAC} from "../../../redux/state";





type propsType = {
    posts: Array<postsType>
    newTextMsg: string
    dispatch: (action: GeneralType) => void
}

export const MyPost = function (props: propsType) {

    let postsElements = props.posts.map(m => <Post message={m.message} likecount={m.likescount}/>)

    let newElement = React.createRef<HTMLTextAreaElement>() // SUPPORT WHY CREATEREF ?

    const addPost = () => {
        props.dispatch(addPostAC())
        props.dispatch(updatePostMessageAC(''))
    }


    const onChangeHandler = () => {
        if (newElement.current) {
            let text = newElement.current.value
           /* let action: GeneralType = { type: "UPDATE-POST-MESSAGE", text }*/
           props.dispatch(updatePostMessageAC(text))
        }
    }


    return (
        <div className={s.postsBlock}>

            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea value={props.newTextMsg} ref={newElement} onChange={onChangeHandler} />
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