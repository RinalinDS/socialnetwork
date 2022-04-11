import React from "react";
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControl";
import {postsType} from '../../../Types/AppTypes';

const maxLength10 = maxLengthCreator(15)

type propsType = {
    posts: Array<postsType>
    addPost: (post: string) => void
    likeClickHandler: (id: number, likesCount: number) => void
}

type FormDataType = {
    profilePost: string
}

export const MyPost = React.memo((props: propsType) => {

    let postsElements = props.posts.map(m => <Post key={m.id} likeClickHandler={props.likeClickHandler} id={m.id}
                                                   message={m.message} likesCount={m.likesCount}/>)

    const addPost = (values: FormDataType) => {
        props.addPost(values.profilePost)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                My posts
            </div>
            <div>
                <AddPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength10]} name={'profilePost'} component={Textarea}
                       placeholder={'Enter post message'}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<FormDataType>({form: 'profileAddPostForm'})(AddPostForm)