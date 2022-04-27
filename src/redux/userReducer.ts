import {Dispatch} from "redux";
import {usersAPI} from "../api/API";

// TYPE CONSTANTS FOR ACTION CREATORS

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

// INITIAL STATE FOR USERREDUCER

const initState: UserReducerStateType = {
    users: [],
    currentPage: 1,
    totalUsersCount: 19,
    pageSize: 5,
    isFetching: false,
    isFollowingInProgress: []
}

// REDUCER

export const userReducer = (state: UserReducerStateType = initState, action: userReducerActionType): UserReducerStateType => {
    switch (action.type) {
        case FOLLOW_USER:

            return {
                ...state,
                users: [...state.users.map(m => m.id === action.payload.id ? {...m, followed: true} : m)]
            }
        case UNFOLLOW_USER:

            return {
                ...state,
                users: [...state.users.map(m => m.id === action.payload.id ? {...m, followed: false} : m)]
            }
        case SET_USERS:
            return {...state, users: action.payload.users}
        case SET_CURRENT_PAGE:
        case SET_TOTAL_USERS_COUNT :
        case TOGGLE_IS_FETCHING :
            return {...state, ...action.payload}
        case "FOLLOWING_IN_PROGRESS":
            return {
                ...state, isFollowingInProgress: action.payload.isFetching ?
                    [...state.isFollowingInProgress, action.payload.id]
                    :

                    state.isFollowingInProgress.filter(f => f !== action.payload.id)
            }
        default :
            return state
    }
}

// ACTION CREATORS

export const followUserAC = (id: number) => ({type: FOLLOW_USER, payload: {id}} as const)
export const unfollowUserAC = (id: number) => ({type: UNFOLLOW_USER, payload: {id}} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, payload: {users}} as const)
export const setCurrentPage = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: page
        }
    } as const
}
export const setTotalUsersCount = (count: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            totalUsersCount: count
        }
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const
}
export const followInProgress = (id: number, isFetching: boolean) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        payload: {
            id,
            isFetching
        }
    } as const
}

// THUNK CREATORS

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<userReducerActionType>) => {
    try {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    } catch (e) {
        console.warn(e)
    }

}
const followUnfollowFlow = async (dispatch: Dispatch, userID: number, apiMethod: any, actionCreator: (userID: number) => userReducerActionType) => {
    try {
        dispatch(followInProgress(userID, true))
        const data = await apiMethod(userID)
        if (data.resultCode === 0) {
            dispatch(actionCreator(userID))
        }
        dispatch(followInProgress(userID, false))
    } catch(e) {
        console.warn(e)
    }
}

export const unfollowUser = (userID: number) => (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userID,usersAPI.unfollowUser, unfollowUserAC)
}


export const followUser = (userID: number) =>  (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userID,usersAPI.followUser, followUserAC)
}

//  TYPE FOR USER OBJECT

export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    photos: {
        small: string | undefined
        large: string | undefined
    }
}


// STATE TYPE FOR USER REDUCER

export type UserReducerStateType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    isFollowingInProgress: number[]
}

// ОБЪЕДИНЕННЫЙ ТИП ВСЕХ ACTION CREATOROV

export type userReducerActionType =
    followUserUserACType |
    unfollowUserUserACType |
    setUsersACType |
    setCurrentPageACType |
    setTotalUsersCountACType |
    toggleIsFetchingACType |
    followInProgressACType

// ТИПИЗАЦИЯ ACTION CREATOROV

type followUserUserACType = ReturnType<typeof followUserAC>
type unfollowUserUserACType = ReturnType<typeof unfollowUserAC>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type followInProgressACType = ReturnType<typeof followInProgress>

