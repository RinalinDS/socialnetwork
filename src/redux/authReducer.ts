import {Dispatch} from "redux";
import {authAPI} from "../api/API";
import {AppThunk} from "./store";
import {stopSubmit} from 'redux-form';


const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'


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

// AC
export const setAuthUserDataAC = (id: number | null, email: string, login: string, isAuth: boolean) => {
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

// Thunk
export const setAuthUserData = () => {
    return async (dispatch: Dispatch) => {
        const response = await authAPI.authMe()
        if (response.resultCode === 0) {
            let {id, email, login} = response.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return async dispatch => {
        const response = await authAPI.login(email, password, rememberMe)
        if (response.resultCode === 0) {
            await dispatch(setAuthUserData())
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : "Something wrong";
            dispatch(stopSubmit('Login', {_error: message}))
        }
    }
}

export const logout = (): AppThunk => async dispatch => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, '', '', false))
    }
}


type authStateType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
}
export type authReducerActionType = setAuthUserDataACType
type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
