import React, {Component} from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {logout, setAuthUserData} from "../../redux/authReducer";
import {AppRootStateType} from "../../redux/store";

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

type mapDispatchToPropsType = {
    setAuthUserData: () => void
    logout: () => void
}

type HeaderPropsType = mapDispatchToPropsType & mapStateToPropsType


class HeaderContainer extends Component<HeaderPropsType> {
    componentDidMount() {
        this.props.setAuthUserData()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setAuthUserData, logout})(HeaderContainer);