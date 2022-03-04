import {postsType} from "../App";
import {Dispatch} from "redux";
import {profileAPI} from "../api/API";

export type profileReducerStateType = {
    posts: Array<postsType>
    newPostText: string
    profile: profileType
}

type GeneralTypeForProfileReducer = addPostType | updatePostMessageType | addLikeCountType | setUserProfileType

export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string | null
        large: string | null
    }
}

const initialState: profileReducerStateType = {
    posts: [
        {id: 1, message: "General Kenobi!", likescount: 7},
        {id: 2, message: "Hello There", likescount: 10},
        {id: 3, message: "YOU WERE MY BROTHER ANAKIN", likescount: 141},
    ],
    newPostText: "",
    profile: {} as profileType
}

export const profileReducer = (state: profileReducerStateType = initialState, action: GeneralTypeForProfileReducer): profileReducerStateType => {
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
        case SET_USERS_PROFILE : {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}


const ADD_POST = "ADD-POST"
const UPDATE_POST_MESSAGE = "UPDATE-POST-MESSAGE"
const ADD_LIKE_COUNT = "ADD-LIKE-COUNT"
const SET_USERS_PROFILE = "SET_USERS_PROFILE"


export type addPostType = ReturnType<typeof addPostAC>
export type updatePostMessageType = {
    type: "UPDATE-POST-MESSAGE"
    text: string
}
export type addLikeCountType = {
    type: "ADD-LIKE-COUNT"
    id: number
    likescount: number
}
export type setUserProfileType = ReturnType<typeof setUserProfileAC>

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}
export const updatePostMessageAC = (text: string) => {
    return {
        type: UPDATE_POST_MESSAGE,
        text
    }
}
export const addLikeCountAC = (id: number, likescount: number) => {
    return {
        type: ADD_LIKE_COUNT,
        id,
        likescount
    }
}

export const setUserProfileAC = (profile: profileType) => {
    return {
        type: SET_USERS_PROFILE,
        profile
    } as const
}


export const setUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.setUserProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data))
            })
    }
}