import {Dispatch} from "redux";
import {profileAPI} from "../api/API";
import {postsType} from '../Types/AppTypes';
import {toggleIsFetching} from './userReducer';
import {AppRootStateType} from './store';

const ADD_POST = "profile/ADD-POST"
const ADD_LIKE_COUNT = "profile/ADD-LIKE-COUNT"
const SET_USERS_PROFILE = "profile/SET_USERS_PROFILE"
const SET_USER_STATUS = 'profile/SET_USER_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

const initialState: profileReducerStateType = {
  posts: [
    {id: 1, message: "General Kenobi!", likesCount: 7},
    {id: 2, message: "Hello There", likesCount: 10},
    {id: 3, message: "YOU WERE MY BROTHER ANAKIN", likesCount: 141},
  ],
  profile: {} as profileType,
  status: ''
}

export const profileReducer = (state: profileReducerStateType = initialState, action: GeneralTypeForProfileReducer): profileReducerStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost: postsType = {id: 4, message: action.post, likesCount: 0}
      return {...state, posts: [newPost, ...state.posts]}
    case ADD_LIKE_COUNT:
      return {
        ...state,
        posts: state.posts.map((m: postsType) => m.id === action.id ? {
          ...m,
          likesCount: action.likesCount + 1
        } : m)
      }
    case SET_USERS_PROFILE : {
      return {...state, profile: action.profile}
    }
    case SET_USER_STATUS:
      return {...state, status: action.status}
    case DELETE_POST:
      return {...state, posts: state.posts.filter(f => f.id !== action.id)}
    case SAVE_PHOTO_SUCCESS:
      return {...state, profile: {...state.profile, photos: action.photos}}

    default:
      return state
  }
}


//AC
export const deletePostAC = (id: number) => ({type: DELETE_POST, id} as const)
export const addPostAC = (post: string) => ({type: ADD_POST, post,} as const)
export const addLikeCountAC = (id: number, likesCount: number) => ({type: ADD_LIKE_COUNT, id, likesCount} as const)
export const setUserProfileAC = (profile: profileType) => ({type: SET_USERS_PROFILE, profile} as const)
export const setUserStatusAC = (status: string) => ({type: SET_USER_STATUS, status} as const)
export const savePhotoSuccess = (photos: any) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)


// Thunk
export const getUserProfileThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(toggleIsFetching(true))
    const response = await profileAPI.setUserProfile(userId)
    dispatch(setUserProfileAC(response.data))
    dispatch(toggleIsFetching(false))
  } catch (e) {
    console.warn(e)
  }
}
export const getUserStatusThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(toggleIsFetching(true))
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC(response.data))
    dispatch(toggleIsFetching(false))
  } catch (e) {
    console.warn(e)
  }
}
export const updateUserStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(toggleIsFetching(true))
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
      dispatch(setUserStatusAC(status))
    }
    dispatch(toggleIsFetching(false))
  } catch (e) {
    console.warn(e)
  }
}

export const savePhotoTC = (photo: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(toggleIsFetching(true))
    const res = await profileAPI.savePhoto(photo)
    if (res.data.resultCode === 0) {

      dispatch(savePhotoSuccess(res.data.data.photos))
    }
    dispatch(toggleIsFetching(false))
  } catch (e) {
    console.warn(e)
  }
}

export const updateProfileTC = (profile: profileType) => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
  try {
    dispatch(toggleIsFetching(true))
    const res = await profileAPI.updateProfile(profile)
    if (res.data.resultCode === 0) {
      const userId = getState().auth.id
      if (userId) {
        // @ts-ignore
        dispatch(getUserProfileThunkCreator(userId))
      }
    }
    dispatch(toggleIsFetching(false))
  } catch (e) {
    console.warn(e)
  }
}


//Types
export type GeneralTypeForProfileReducer =
  | addPostType
  | addLikeCountType
  | setUserProfileType
  | setUserStatusType
  | deletePostType
  | savePhotoSuccessType

export type profileReducerStateType = {
  posts: Array<postsType>
  profile: profileType
  status: string
}
export type profileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  aboutMe: string
  contacts?: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos?: {
    small: string | null
    large: string | null
  }
}

export type addPostType = ReturnType<typeof addPostAC>
export type addLikeCountType = ReturnType<typeof addLikeCountAC>
export type setUserProfileType = ReturnType<typeof setUserProfileAC>
export type setUserStatusType = ReturnType<typeof setUserStatusAC>
export type deletePostType = ReturnType<typeof deletePostAC>
export type savePhotoSuccessType = ReturnType<typeof savePhotoSuccess>