import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";
import {profileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type propsType = mapStateToPropsType & mapDispatchToPropsType

type PathParamsType = {
    userId: string,
}
type withRouterPropsType = RouteComponentProps<PathParamsType> & propsType


class ProfileContainer extends React.Component<withRouterPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/` + userId)
            .then(res => {
                debugger
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        debugger
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: profileType
}
type mapDispatchToPropsType = {
    setUserProfile: (profile:profileType) => void
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}



let ProfileContainerWithRouter = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter)