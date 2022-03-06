import {postsType} from "../App";
import {Dispatch} from "redux";
import {profileAPI} from "../api/API";

export type profileReducerStateType = {
    posts: Array<postsType>
    newPostText: string
    profile: profileType
    status: string
}

type GeneralTypeForProfileReducer = addPostType | updatePostMessageType | addLikeCountType | setUserProfileType | setUserStatusType

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
    profile: {} as profileType,
    status: ''
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
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}


const ADD_POST = "ADD-POST"
const UPDATE_POST_MESSAGE = "UPDATE-POST-MESSAGE"
const ADD_LIKE_COUNT = "ADD-LIKE-COUNT"
const SET_USERS_PROFILE = "SET_USERS_PROFILE"
const SET_USER_STATUS = 'SET_USER_STATUS'


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
export type setUserStatusType = ReturnType<typeof setUserStatusAC>

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

export const setUserStatusAC = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status
    } as const
}


export const getUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.setUserProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data))
            })
    }
}

export const getUserStatusThunkCreator = (userId: string) => {

    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(res => {
                dispatch(setUserStatusAC(res.data))
            })
    }
}
export const updateUserStatusThunkCreator = (status: string) => {

    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserStatusAC(status))
                }
            })
    }
}