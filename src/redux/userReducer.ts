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

export type UserReducerStateType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    isFollowingInProgress: number[]
}


const initState: UserReducerStateType = {
    users: [],
    currentPage: 1,
    totalUsersCount: 19,
    pageSize: 5,
    isFetching: false,
    isFollowingInProgress: []
}


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


export type userReducerActionType =
    followUserUserACType |
    unfollowUserUserACType |
    setUsersACType |
    setCurrentPageACType |
    setTotalUsersCountACType |
    toggleIsFetchingACType |
    followInProgressACType

type followUserUserACType = ReturnType<typeof followUser>
type unfollowUserUserACType = ReturnType<typeof unfollowUser>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type followInProgressACType = ReturnType<typeof followInProgress>

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'


export const followUser = (id: number) => {
    return {
        type: FOLLOW_USER,
        payload: {
            id
        }

    } as const
}

export const unfollowUser = (id: number) => {
    return {
        type: UNFOLLOW_USER,
        payload: {
            id
        }

    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}

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