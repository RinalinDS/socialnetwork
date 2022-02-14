import {dialogsType, messageType} from "../App";
import {GeneralType} from "./store";

export type dialogsReducerStateType = {
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

const initialState:dialogsReducerStateType = {
    dialogs: [
        {id: 1, name: 'Lesha', avatar: "https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},
        {id: 2, name: 'Sasha', avatar: "https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},
        {id: 3, name: 'Pasha', avatar: "https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},
        {id: 4, name: 'Masha', avatar: "https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},
        {id: 5, name: 'Dasha', avatar: "https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},
    ],
    messages: [
        {id: 1, message: 'Hello', myMessage: true},
        {id: 2, message: 'How r u today?', myMessage: false},
        {id: 3, message: 'Bad boys what you gonna do ?', myMessage: true},
        {id: 4, message: 'When we come for you?', myMessage: false},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: dialogsReducerStateType =initialState , action: GeneralType):dialogsReducerStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {id: 5, message: state.newMessageText,myMessage: Math.random() < 0.5}
            state.newMessageText = ''
            return {...state, messages: [...state.messages, newMessage]}
        case "UPDATE-MESSAGE-TEXT":
            return {...state, newMessageText: action.text}
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