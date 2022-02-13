import {FriendsType} from "../App";
import {GeneralType} from "./store";

type sidebarReducerStateType = Array<FriendsType>


export const sidebarReducer = (state: sidebarReducerStateType, action: GeneralType): sidebarReducerStateType => {
    switch (action.type) {
        default:
            return state

    }


}