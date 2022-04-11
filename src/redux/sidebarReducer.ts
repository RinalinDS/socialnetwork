import {FriendsType} from '../Types/AppTypes';


type sidebarReducerStateType = Array<FriendsType>

const initialState: Array<FriendsType> = [
    {id: 1, name: "Karina"},
    {id: 2, name: "Kristina"},
    {id: 3, name: "Albina"}
]

export type ActionTypeForSidebarReducer = {}


export const sidebarReducer = (state: sidebarReducerStateType = initialState, action: ActionTypeForSidebarReducer): sidebarReducerStateType => {
    switch (true) {
        default:
            return state

    }


}