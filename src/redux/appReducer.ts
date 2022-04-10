import {AppThunk} from "./store";
import {setAuthUserData} from "./authReducer";

//constants
const INITIALIZE_APP = 'app/INITIALIZE_APP'

//initState
const initState: appStateType = {
    initialized: false
}

// reducer
export const appReducer = (state: appStateType = initState, action: appReducerActionType): appStateType => {
    switch (action.type) {
        case 'app/INITIALIZE_APP':
            return {...state, initialized: true}
        default :
            return state
    }
}


// AC
export const initializeAppAC = () => ({type: INITIALIZE_APP})

// Thunks
export const initializeAppTC = (): AppThunk => async dispatch => {
    await dispatch(setAuthUserData())
    dispatch(initializeAppAC())
}

// Types
type appStateType = {
    initialized: boolean
}
type initializeACType = ReturnType<typeof initializeAppAC>
export type appReducerActionType =
    initializeACType


