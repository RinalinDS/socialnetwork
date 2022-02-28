import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {profileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type propsType = mapStateToPropsType & mapDispatchToPropsType

type PathParamsType = {
    userId: string
}
type withRouterPropsType = RouteComponentProps<PathParamsType> & propsType


class ProfileContainer extends React.Component<withRouterPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.setUserProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: profileType
}
type mapDispatchToPropsType = {
    setUserProfile: (userId: string) => void
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}


let ProfileContainerWithRouter = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter)