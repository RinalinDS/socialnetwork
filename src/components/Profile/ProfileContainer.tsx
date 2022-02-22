import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";
import {profileType, setUserProfile} from "../../redux/profileReducer";

type propsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<propsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
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


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)