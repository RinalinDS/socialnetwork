/*export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    avatar: string
    location: {
        city: string
        country: string
    }
}*/

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
}

export type userReducerActionType = toggleFollowUserACType | setUsersACType

const initState = {
    users : [] as Array<UserType>
}


export const userReducer = (state: UserReducerStateType = initState, action: userReducerActionType):UserReducerStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW_USER:
            return {...state, users:[...state.users.map(m => m.id === action.payload.id ? {...m, followed: !m.followed}: m)]}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.payload.users]}
        default :
            return state
    }
}

const TOGGLE_FOLLOW_USER = 'TOGGLE-FOLLOW-USER'
const SET_USERS = 'SET-USERS'


export type toggleFollowUserACType = {
    type: 'TOGGLE-FOLLOW-USER'
    payload : {
        id: number
    }
}

export const toggleFollowUserAC = (id: number):toggleFollowUserACType => {
    return {
        type: TOGGLE_FOLLOW_USER,
        payload: {
            id
        }

    }
}

export type setUsersACType = {
    type: 'SET-USERS'
    payload: {
        users: UserType[]
    }
}

export const setUsersAC = (users: Array<UserType>):setUsersACType => {
    return {
        type: SET_USERS,
        payload :{
            users
        }
    }
}