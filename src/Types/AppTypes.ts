export type postsType = {
    id: number
    message: string
    likesCount: number
}
export type dialogsType = {
    id: number
    name: string
    avatar: string
}
export type messageType = {
    id: number
    message: string
    myMessage: boolean
}
export type FriendsType = {
    id: number
    name: string
}
export type stateType = {
    profilePage: {
        posts: Array<postsType>
        newPostText: string
    }
    dialogsPage: {
        dialogs: Array<dialogsType>
        messages: Array<messageType>
        newMessageText: string
    }
    friends: Array<FriendsType>
}
