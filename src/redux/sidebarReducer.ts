import {FriendsType} from "../App";
import {GeneralType} from "./store";

type sidebarReducerStateType = Array<FriendsType>

const initialState: Array<FriendsType> = [
    {id: 1, name: "Karina"},
    {id: 2, name: "Kristina"},
    {id: 3, name: "Albina"}
]




export const sidebarReducer = (state: sidebarReducerStateType = initialState, action: GeneralType): sidebarReducerStateType => {
    switch (action.type) {
        default:
            return state

    }


}