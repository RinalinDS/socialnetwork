import {AppThunk} from "./redux-store";
import {setAuthUserData} from "./authReducer";

export type appStateType = {
    initialized: boolean
}

const initState: appStateType = {
    initialized: false
}


export const appReducer = (state: appStateType = initState, action: appReducerActionType): appStateType => {
    switch (action.type) {
        case "INITIALIZE_APP":
            return {...state, initialized: true}
        default :
            return state
    }
}


export type appReducerActionType =
    initializeACType


type initializeACType = ReturnType<typeof initializeAppAC>


const INITIALIZE_APP = 'INITIALIZE_APP'


export const initializeAppAC = () => ({type: INITIALIZE_APP})

export const initializeAppTC = (): AppThunk => dispatch => {
    dispatch(setAuthUserData())
        .then(() => {
            dispatch(initializeAppAC())
        })
}



