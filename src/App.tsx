import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {updateMessageText, updatePostMessage} from "./redux/state";



export type postsType = {
    id: number
    message: string
    likescount: number
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
type propsType = {
    state: stateType
    addPost: () => void
    updatePostMessage: (text: string) => void
    updateMessageText: (text: string) => void
    addMessage: () => void

}

function App(props: propsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={props.state.friends}/>
                <div className={'maincontent'}>
                    <Routes>
                        <Route path='/profile/*' element={<Profile
                            posts={props.state.profilePage.posts}
                            addPost={props.addPost}
                            newTextMsg = {props.state.profilePage.newPostText}
                            updatePostMessage={props.updatePostMessage}
                        />}/>
                        <Route path='/dialogs/*' element={<Dialogs
                            messages={props.state.dialogsPage.messages}
                            dialogs={props.state.dialogsPage.dialogs}
                            addMessage={props.addMessage}
                            updateMessageText={props.updateMessageText}
                            newMessageText={props.state.dialogsPage.newMessageText}
                        />}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
