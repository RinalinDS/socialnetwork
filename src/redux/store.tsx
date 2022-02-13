import {postsType, stateType} from "../App";
import {addMessageMType, addPostType, profileReducer, updatePostMessageType} from "./profileReducer";
import {addLikeCountType, dialogsReducer, updateMessageTextType} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

export type GeneralType =
    addPostType
    | updatePostMessageType
    | addMessageMType
    | updateMessageTextType
    | addLikeCountType



export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "General Kenobi!", likescount: 7},
                {id: 2, message: "Hello There", likescount: 10},
                {id: 3, message: "YOU WERE MY BROTHER ANAKIN", likescount: 141},
            ],
            newPostText: ""
        },
        dialogsPage: {
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

        },
        friends: [
            {id: 1, name: "Karina"},
            {id: 2, name: "Kristina"},
            {id: 3, name: "Albina"}
        ]

    },
    _callSubscriber(state: stateType) {
        console.log(state)
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: GeneralType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.friends = sidebarReducer(this._state.friends, action)
        this._callSubscriber(this._state)
    }


}


