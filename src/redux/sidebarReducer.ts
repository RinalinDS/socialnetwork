import {FriendsType} from "../App";



type sidebarReducerStateType = Array<FriendsType>

const initialState: Array<FriendsType> = [
    {id: 1, name: "Karina"},
    {id: 2, name: "Kristina"},
    {id: 3, name: "Albina"}
]




export const sidebarReducer = (state: sidebarReducerStateType = initialState, action: any): sidebarReducerStateType => {
    switch (action.type) {
        default:
            return state

    }


}