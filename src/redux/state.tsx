import {postsType, stateType} from "../App";

export type GeneralType = addPostType | updatePostMessageType| addMessageMType | updateMessageTextType

type addPostType = {
    type: "ADD-POST"
}
type updatePostMessageType = {
    type: "UPDATE-POST-MESSAGE"
    text: string
}
type addMessageMType = {
    type: "ADD-MESSAGE"
}
type updateMessageTextType = {
    type: "UPDATE-MESSAGE-TEXT"
    text: string
}
export const addPostAC = ():GeneralType => {
    return {
        type : "ADD-POST",
    }
}
export const updatePostMessageAC = (text: string):GeneralType => {
    return {
        type : "UPDATE-POST-MESSAGE",
        text
    }
}
export const addMessageAC = (): GeneralType => {
    return {
        type: "ADD-MESSAGE",
    }
}
export const updateMessageTextAC = (text: string): GeneralType => {
    return {
        type: "UPDATE-MESSAGE-TEXT",
        text
    }
}

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
       if( action.type === "ADD-POST") {
           let newPost: postsType = {id: 4, message: this._state.profilePage.newPostText, likescount: 0}
           this._state.profilePage.posts.push(newPost)
           this._callSubscriber(this._state)
       }  else if( action.type === "UPDATE-POST-MESSAGE") {
           this._state.profilePage.newPostText = action.text
           this._callSubscriber(this._state)
       } else if( action.type === "ADD-MESSAGE") {
           this._state.dialogsPage.messages.push({
               id: 5,
               message: this._state.dialogsPage.newMessageText,
               myMessage: Math.random() < 0.5
           })
           this._callSubscriber(this._state)
       } else if (action.type === "UPDATE-MESSAGE-TEXT") {
           this._state.dialogsPage.newMessageText = action.text
           this._callSubscriber(this._state)
       }

    },



}


