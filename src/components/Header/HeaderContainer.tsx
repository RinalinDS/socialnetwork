import React, {Component} from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {setAuthUserData} from "../../redux/authReducer";
import {AppRootStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/usersAPI";

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

type mapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

type HeaderPropsType = mapDispatchToPropsType & mapStateToPropsType


class HeaderContainer extends Component<HeaderPropsType> {
    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);