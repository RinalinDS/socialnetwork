import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {initializeAppTC} from "./redux/appReducer";
import {AppRootStateType} from "./redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";


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


type mapDispatchToPropsType = {
    initializeAppTC: () => void
}

type mapStateToPropsType = {
    initialized: boolean
}

class App extends React.Component<mapDispatchToPropsType & mapStateToPropsType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'maincontent'}>

                        <Redirect from="/" to='/profile/' />
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        initialized: state.app.initialized
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeAppTC}),
    withRouter)(App)

