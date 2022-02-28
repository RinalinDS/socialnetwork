import {Dispatch} from "redux";
import {authAPI} from "../api/API";

export type authStateType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
}

const initState: authStateType = {
    id: null,
    email: '',
    login: '',
    isAuth: false
}


export const authReducer = (state: authStateType = initState, action: authReducerActionType): authStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            debugger
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }

        default :
            return state
    }
}


export type authReducerActionType =
    setAuthUserDataACType


type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>


const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


export const setAuthUserDataAC = (id: number, email: string, login: string) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            id,
            email,
            login,
        }

    } as const
}


export const setAuthUserData = () => {

    return (dispatch: Dispatch<authReducerActionType>) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserDataAC(id, email, login))
                }
            })
    }
}


