import {dialogsType, messageType, postsType} from "../App";
import {GeneralType} from "./store";

type dialogsReducerStateType = {
        dialogs: Array<dialogsType>
        messages: Array<messageType>
        newMessageText: string
}

export type updateMessageTextType = {
    type: "UPDATE-MESSAGE-TEXT"
    text: string
}
export type addLikeCountType = {
    type: "ADD-LIKE-COUNT"
    id: number
    likescount: number
}



export const dialogsReducer = (state: dialogsReducerStateType, action: GeneralType):dialogsReducerStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            state.messages.push({
                id: 5,
                message: state.newMessageText,
                myMessage: Math.random() < 0.5
            })

            state.newMessageText = ''
            return state
        case "UPDATE-MESSAGE-TEXT":
            state.newMessageText = action.text
            return state
        default:
            return state
    }
}


const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

export const addMessageAC = (): GeneralType => {
    return {
        type: ADD_MESSAGE,
    }
}
export const updateMessageTextAC = (text: string): GeneralType => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        text
    }
}