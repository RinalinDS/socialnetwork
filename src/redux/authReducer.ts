import {Dispatch} from "redux";
import {authAPI} from "../api/API";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

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
            return {
                ...state,
                ...action.payload
            }

        default :
            return state
    }
}


export type authReducerActionType =
    setAuthUserDataACType


type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>


const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


export const setAuthUserDataAC = (id: number|null, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth
        }

    } as const
}


export const setAuthUserData = () => {
    return (dispatch: Dispatch) => {
       return authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserDataAC(id, email, login, true))
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : "Something wrong";
                    dispatch(stopSubmit('Login', {_error: message}))
                }
            })
    }
}


export const login = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return dispatch => {
        authAPI.login(email, password, rememberMe)
            .then(() => {
                dispatch(setAuthUserData())
            })
    }
}


export const logout = (): AppThunk => {
    return dispatch => {
        authAPI.logout()
            .then(() => {
                    dispatch(setAuthUserDataAC(null, '', '', false))
            })
    }
}


