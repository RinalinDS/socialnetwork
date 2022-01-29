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


export type postsType = {
    id: number
    message: string
    likescount: number
}

export type dialogsType = {
    id: number
    name: string
}

export type messageType = {
    id: number
    message: string
}

type propsType = {
    posts : Array<postsType>
    dialogs : Array<dialogsType>
    messages : Array<messageType>
}

function App(props: propsType) {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'maincontent'}>
            <Routes>
             <Route path='/profile/*' element={<Profile posts={props.posts}/>}/>
             <Route path='/dialogs/*' element={<Dialogs messages = {props.messages} dialogs={props.dialogs}/>}/>
             <Route path='/news/*' element={<News />}/>
             <Route path='/music/*' element={<Music />}/>
             <Route path='/settings/*' element={<Settings />}/>
            </Routes>



            </div>


        </div>
        </BrowserRouter>
    );
}

export default App;
