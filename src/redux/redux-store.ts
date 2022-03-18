import {applyMiddleware, combineReducers, createStore} from "redux";
import {GeneralTypeForProfileReducer, profileReducer} from "./profileReducer";
import {dialogsReducer, DialogsReducerACType} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer, userReducerActionType} from "./userReducer";
import {authReducer, authReducerActionType} from "./authReducer";
import ThunkMiddleware, {ThunkAction} from "redux-thunk";
import {FormAction, reducer as formReducer} from 'redux-form'
import {appReducer} from "./appReducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

type AppActionsType =
    GeneralTypeForProfileReducer
    | DialogsReducerACType
    | userReducerActionType
    | authReducerActionType
    | FormAction

export type AppRootStateType = ReturnType<typeof reducers>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

export const store = createStore(reducers, applyMiddleware(ThunkMiddleware))


//@ts-ignore
window.store = store