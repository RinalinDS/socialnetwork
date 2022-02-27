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


type setAuthUserDataACType = ReturnType<typeof setAuthUserData>


const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            id,
            email,
            login,
        }

    } as const
}


