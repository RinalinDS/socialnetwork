import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import ThunkMiddleware from "redux-thunk";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
})

export type AppRootStateType = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(ThunkMiddleware))

//@ts-ignore
window.store= store