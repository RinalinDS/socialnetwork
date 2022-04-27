import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {profileType} from "../../redux/profileReducer";

type propsType = {
  children?: any
  profile: profileType
  status: string
  updateUserStatus: (userId: string) => void
  isOwner: boolean
  savePhoto: (file: any) => void
}

export const Profile = function (props: propsType) {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
      <MyPostContainer/>
    </div>
  )
}