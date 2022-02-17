import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./userReducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: sidebarReducer,
    usersPage: userReducer,
})

export type AppRootStateType = ReturnType<typeof reducers>

export const store = createStore(reducers)

//@ts-ignore
window.store= store