import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {initializeAppTC} from "./redux/appReducer";
import {AppRootStateType} from "./redux/store";
import {Preloader} from "./common/Preloader/Preloader";
import {lazyLoader} from './hoc/lazyload';
import Login from './components/Login/Login';

const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));


const SuspendedNews = lazyLoader(News)
const SuspendedMusic = lazyLoader(Music)
const SuspendedSettings = lazyLoader(Settings)


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
      <div style={{backgroundColor: 'rgba(164,192,192,0.4)' }}>
        <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar/>
          <div className='main_content'>
            <Switch>
              <Route exact path='/profile/:userId?' render={() => <ProfileContainer/>}/>
              <Route path='/dialogs' render={() => <DialogsContainer/>}/>
              <Route path='/users' render={() => <UsersContainer/>}/>
              <Route path='/news' render={() => <SuspendedNews/>}/>
              <Route path='/music' render={() => <SuspendedMusic/>}/>
              <Route path='/settings' render={() => <SuspendedSettings/>}/>
              <Route path='/login' render={() => <Login/>}/>
              <Redirect exact from="/" to='/profile/'/>
              <Route path='*' render={() => <div>Someone fucked up it's 404 page</div>}/>
            </Switch>
          </div>
        </div>
      </div>
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

