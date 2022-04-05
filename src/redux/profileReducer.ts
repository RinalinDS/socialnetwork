import {postsType} from "../App";
import {Dispatch} from "redux";
import {profileAPI} from "../api/API";

export type profileReducerStateType = {
    posts: Array<postsType>
    profile: profileType
    status: string
}

export type GeneralTypeForProfileReducer =
    | addPostType
    | addLikeCountType
    | setUserProfileType
    | setUserStatusType
    | deletePostType

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
    profile: {} as profileType,
    status: ''
}

export const profileReducer = (state: profileReducerStateType = initialState, action: GeneralTypeForProfileReducer): profileReducerStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postsType = {id: 4, message: action.post, likescount: 0}
            return {...state, posts: [...state.posts, newPost]}
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
        case DELETE_POST:
            return {...state, posts: state.posts.filter(f => f.id !== action.id)}

        default:
            return state
    }
}


const ADD_POST = "ADD-POST"
const ADD_LIKE_COUNT = "ADD-LIKE-COUNT"
const SET_USERS_PROFILE = "SET_USERS_PROFILE"
const SET_USER_STATUS = 'SET_USER_STATUS'
const DELETE_POST = 'DELETE_POST'


export type addPostType = ReturnType<typeof addPostAC>
export type addLikeCountType = {
    type: "ADD-LIKE-COUNT"
    id: number
    likescount: number
}
export type setUserProfileType = ReturnType<typeof setUserProfileAC>
export type setUserStatusType = ReturnType<typeof setUserStatusAC>
export type deletePostType = ReturnType<typeof deletePostAC>

export const deletePostAC = (id: number) => {
    return {
        type: DELETE_POST,
        id
    } as const
}

export const addPostAC = (post: string) => {
    return {
        type: ADD_POST,
        post,
    } as const
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