import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {
  getUserProfileThunkCreator,
  getUserStatusThunkCreator,
  profileType,
  savePhotoTC,
  updateUserStatusThunkCreator
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';




class ProfileContainer extends React.Component<withRouterPropsType> {

  refreshProfile() {
    let userId = +this.props.match.params.userId
    if (!userId) {
      userId = this.props.authUserID
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)

  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: withRouterPropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status}
               updateUserStatus={this.props.updateUserStatus} isOwner={!this.props.match.params.userId}
               savePhoto={this.props.savePhoto}/>
    )
  }
}


type propsType = mapStateToPropsType & mapDispatchToPropsType
type PathParamsType = {
  userId: string
}
type withRouterPropsType = RouteComponentProps<PathParamsType> & propsType

type  mapStateToPropsType = {
  profile: profileType
  status: string
  authUserID: number

}
type  mapDispatchToPropsType = {
  getUserProfile: (userId: number) => void
  getUserStatus: (userId: number) => void
  updateUserStatus: (status: string) => void
  savePhoto: (file: any) => void
}

const mapStateToProps = (state: AppRootStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserID: state.auth.id
  }
}


export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUserProfile: getUserProfileThunkCreator,
    getUserStatus: getUserStatusThunkCreator,
    updateUserStatus: updateUserStatusThunkCreator,
    savePhoto: savePhotoTC
  }),
  withRouter, withAuthRedirect
)(ProfileContainer)

