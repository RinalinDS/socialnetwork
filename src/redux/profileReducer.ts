import {postsType} from "../App";
import {GeneralType} from "./store";

export type profileReducerStateType = {
    posts: Array<postsType>
    newPostText: string
}

export type addPostType = {
    type: "ADD-POST"
}
export type updatePostMessageType = {
    type: "UPDATE-POST-MESSAGE"
    text: string
}
export type addMessageMType = {
    type: "ADD-MESSAGE"
}

const initialState: profileReducerStateType = {
    posts: [
        {id: 1, message: "General Kenobi!", likescount: 7},
        {id: 2, message: "Hello There", likescount: 10},
        {id: 3, message: "YOU WERE MY BROTHER ANAKIN", likescount: 141},
    ],
    newPostText: ""
}

export const profileReducer = (state: profileReducerStateType = initialState, action: GeneralType): profileReducerStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postsType = {id: 4, message: state.newPostText, likescount: 0}
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case UPDATE_POST_MESSAGE:
            return {...state, newPostText: action.text}
        case ADD_LIKE_COUNT:
            return {
                ...state,
                posts: state.posts.map((m: postsType) => m.id === action.id ? {
                    ...m,
                    likescount: action.likescount + 1
                } : m)
            }
        default:
            return state
    }
}


const ADD_POST = "ADD-POST"
const UPDATE_POST_MESSAGE = "UPDATE-POST-MESSAGE"
const ADD_LIKE_COUNT = "ADD-LIKE-COUNT"


export const addPostAC = (): GeneralType => {
    return {
        type: ADD_POST,
    }
}
export const updatePostMessageAC = (text: string): GeneralType => {
    return {
        type: UPDATE_POST_MESSAGE,
        text
    }
}
export const addLikeCountAC = (id: number, likescount: number): GeneralType => {
    return {
        type: ADD_LIKE_COUNT,
        id,
        likescount
    }
}
