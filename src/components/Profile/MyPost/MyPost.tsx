import React, {KeyboardEvent} from "react";
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";
import {postsType} from "../../../App";
import {GeneralType} from "../../../redux/store";
import {addPostAC, updatePostMessageAC} from "../../../redux/profileReducer";





type propsType = {
    posts: Array<postsType>
    newTextMsg: string
    dispatch: (action: GeneralType) => void

}

export const MyPost = function (props: propsType) {

    let postsElements = props.posts.map(m => <Post dispatch={props.dispatch} id={m.id} message={m.message} likecount={m.likescount}/>)

    let newElement = React.createRef<HTMLTextAreaElement>() // SUPPORT WHY CREATEREF ?

    const addPost = () => {
        props.dispatch(addPostAC())
    }


    const onChangeHandler = () => {
        if (newElement.current) {
            let text = newElement.current.value
           /* let action: GeneralType = { type: "UPDATE-POST-MESSAGE", text }*/
           props.dispatch(updatePostMessageAC(text))
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
                    <textarea value={props.newTextMsg} onKeyPress={onKeyPressHandler} ref={newElement} onChange={onChangeHandler} />
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