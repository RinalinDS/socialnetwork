import {dialogsType, messageType} from "../App";

// consts for types
const ADD_MESSAGE = "dialogs/ADD-MESSAGE"

// init state
const initialState: dialogsReducerStateType = {
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
    ]
}

// reducer
export const dialogsReducer = (state: dialogsReducerStateType = initialState, action: DialogsReducerACType): dialogsReducerStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {id: 5, message: action.message, myMessage: Math.random() < 0.5}
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

//action creators
export const addMessageAC = (message: string) => ({type: ADD_MESSAGE, message,}) as const


//types
export type addMessageType = ReturnType<typeof addMessageAC>

export type DialogsReducerACType = addMessageType

export type dialogsReducerStateType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}

