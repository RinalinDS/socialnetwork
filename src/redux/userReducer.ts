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
}


const initState: UserReducerStateType = {
    users: [],
    currentPage: 2,
    totalUsersCount: 19,
    pageSize: 4,

}


export const userReducer = (state: UserReducerStateType = initState, action: userReducerActionType): UserReducerStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW_USER:
            return {
                ...state,
                users: [...state.users.map(m => m.id === action.payload.id ? {...m, followed: !m.followed} : m)]
            }
        case SET_USERS:
            return {...state, users: action.payload.users}
        case SET_CURRENT_PAGE:
            return {...state, ...action.payload}
        case SET_TOTAL_USERS_COUNT :
            return {...state, ...action.payload}
        default :
            return state
    }
}


export type userReducerActionType =
    toggleFollowUserACType |
    setUsersACType |
    setCurrentPageACType |
    setTotalUsersCountACType

type toggleFollowUserACType = ReturnType<typeof toggleFollowUserAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

const TOGGLE_FOLLOW_USER = 'TOGGLE-FOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


export const toggleFollowUserAC = (id: number) => {
    return {
        type: TOGGLE_FOLLOW_USER,
        payload: {
            id
        }

    } as const
}


export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}

export const setCurrentPageAC = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: page
        }
    } as const
}

export const setTotalUsersCountAC = (count: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            totalUsersCount: count
        }
    } as const
}
