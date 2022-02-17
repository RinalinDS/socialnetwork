import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/redux-store";
import {UsersContainer} from "./components/Users/UsersContainer";




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


function App() {
    const friendsState = useSelector<AppRootStateType, Array<FriendsType>>(state => state.friends)

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={friendsState}/>
                <div className={'maincontent'}>
                    <Routes>
                        <Route path='/profile/*' element={<Profile />}/>
                        <Route path='/dialogs/*' element={<DialogsContainer />}/>
                        <Route path='/users/*' element={<UsersContainer />}/>
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
