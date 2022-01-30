import {postsType, stateType} from "../App";



let rerenderEntireTree = (state:stateType) => {  // Выглядит как заглушка , на суппорт
    console.log(state)
}

export const state = {
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

}

export const addPost = () => {
    let newPost: postsType = {id: 4, message: state.profilePage.newPostText, likescount: 0}
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const updatePostMessage = (text: string) => {
    state.profilePage.newPostText = text
    rerenderEntireTree(state)
}

export const addMessage = () => {
    state.dialogsPage.messages.push({id: 5, message: state.dialogsPage.newMessageText, myMessage: Math.random() < 0.5})
    rerenderEntireTree(state)
}


export const updateMessageText = (text: string) => {
    state.dialogsPage.newMessageText = text
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state:stateType) => void) => {
    rerenderEntireTree = observer
}