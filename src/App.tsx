import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {HashRouter, Redirect, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {initializeAppTC} from "./redux/appReducer";
import {AppRootStateType} from "./redux/store";
import {Preloader} from "./common/Preloader/Preloader";

const News = React.lazy(() => import("./components/Music/Music"));
const Music = React.lazy(() => import("./components/News/News"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));


type mapDispatchToPropsType = {
  initializeAppTC: () => void
}

type mapStateToPropsType = {
  initialized: boolean
}

class App extends React.PureComponent<mapDispatchToPropsType & mapStateToPropsType> {
  componentDidMount() {
    this.props.initializeAppTC()
  }

  render() {
    if (!this.props.initialized) {
      return <div style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
        <Preloader/>
      </div>
    }

    return (
      <HashRouter>
        <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar/>
          <div className='maincontent'>
            <Route exact path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Redirect from="/" to='/profile/'/>
            <Suspense fallback={<Preloader/>}>
              <Route path='/news' render={() => <News/>}/>
              <Route path='/music' render={() => <Music/>}/>
              <Route path='/settings' render={() => <Settings/>}/>
              <Route path='/login' render={() => <Login/>}/>
            </Suspense>
          </div>
        </div>
      </HashRouter>
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

