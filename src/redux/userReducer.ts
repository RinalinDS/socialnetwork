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

}


const initState: UserReducerStateType = {
    users: [],
    currentPage: 1,
    totalUsersCount: 19,
    pageSize: 5,
    isFetching: false
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
        case SET_TOTAL_USERS_COUNT :
        case TOGGLE_IS_FETCHING :
            return {...state, ...action.payload}
        default :
            return state
    }
}


export type userReducerActionType =
    toggleFollowUserACType |
    setUsersACType |
    setCurrentPageACType |
    setTotalUsersCountACType|
    toggleIsFetchingACType

type toggleFollowUserACType = ReturnType<typeof toggleFollowUser>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType <typeof toggleIsFetching>

const TOGGLE_FOLLOW_USER = 'TOGGLE-FOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


export const toggleFollowUser = (id: number) => {
    return {
        type: TOGGLE_FOLLOW_USER,
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