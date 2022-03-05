import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    getUserStatusThunkCreator,
    profileType,
    setUserProfileThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type propsType = mapStateToPropsType & mapDispatchToPropsType

type PathParamsType = {
    userId: string
}
type withRouterPropsType = RouteComponentProps<PathParamsType> & propsType


class ProfileContainer extends React.Component<withRouterPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '22154'
        }
        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

type mapStateToPropsType = {
    profile: profileType
    status: string

}
type mapDispatchToPropsType = {
    setUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUserProfile: setUserProfileThunkCreator,
        getUserStatus: getUserStatusThunkCreator,
        updateUserStatus: updateUserStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

