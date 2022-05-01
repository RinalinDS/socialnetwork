import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/API";
import {AppThunk} from "./store";
import {stopSubmit} from 'redux-form';


const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'


const initState: authStateType = {
  id: null,
  email: '',
  login: '',
  isAuth: false,
  captchaUrl: ''
}


export const authReducer = (state: authStateType = initState, action: authReducerActionType): authStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default :
      return state
  }
}

// AC
export const setAuthUserDataAC = (id: number | null, email: string, login: string, isAuth: boolean, captchaUrl:string) => {
  return {
    type: SET_AUTH_USER_DATA,
    payload: {
      id,
      email,
      login,
      isAuth,
      captchaUrl
    }
  } as const
}

export const getCaptchaUrlSuccess = (captchaUrl: string) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {
      captchaUrl
    }
  } as const
}

// Thunk
export const setAuthUserData = () => {
  return async (dispatch: Dispatch) => {
    const response = await authAPI.authMe()
    if (response.resultCode === 0) {
      let {id, email, login} = response.data
      dispatch(setAuthUserDataAC(id, email, login, true, ''))
    }
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string ): AppThunk => {
  return async dispatch => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
      await dispatch(setAuthUserData())
      console.log('9')
    } else {
      if (response.resultCode === 10) {
        console.log('10')
        dispatch(getCaptchaUrl())
      }
      let message = response.messages.length > 0 ? response.messages[0] : "Something wrong";
      dispatch(stopSubmit('Login', {_error: message}))
    }
  }
}

export const logout = (): AppThunk => async dispatch => {
  const response = await authAPI.logout()
  if (response.resultCode === 0) {
    dispatch(setAuthUserDataAC(null, '', '', false, ''))
  }
}

export const getCaptchaUrl = (): AppThunk => {
  return async dispatch => {
    const response = await securityAPI.getCaptchaUrl()
    console.log(response.data)
    dispatch(getCaptchaUrlSuccess(response.data.url))
  }
}


type authStateType = {
  id: number | null
  email: string
  login: string
  isAuth: boolean
  captchaUrl: string
}
export type authReducerActionType = setAuthUserDataACType | getCaptchaUrlSuccessACType
type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
type getCaptchaUrlSuccessACType = ReturnType<typeof getCaptchaUrlSuccess>
