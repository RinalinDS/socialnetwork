import React, {FC} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {profileType} from "../../redux/profileReducer";

type propsType = {
  profile: profileType
  status: string
  updateUserStatus: (userId: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
}

export const Profile: FC<propsType> = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}
                   savePhoto={savePhoto}/>
      <MyPostContainer/>
    </div>
  )
}