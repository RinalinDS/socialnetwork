import React, {ChangeEvent, FC} from "react";
import s from './ProfileInfo.module.css'
import {profileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import preloader from './../../../assets/images/preloader.gif'
import {ProfileStatus} from './ProfileStatus';


type ProfileInfoPropsType = {
  profile: profileType
  status: string
  updateUserStatus: (userId: string) => void
  isOwner: boolean
  savePhoto: (file: any) => void
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    savePhoto(e.target.files && e.target.files[0])
  }
  if (!profile.photos) {
    return <Preloader/>
  }
  return (
    <div>
      <div className={s.block}>
        <img src={profile.photos.large ? profile.photos.large : preloader} alt={'preloader'}/>
        {isOwner && <input type='file' onChange={onChangeHandler}/>}
        <div> {profile.fullName} </div>
        <div> {profile.contacts.github}</div>
        <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
      </div>
    </div>
  )
}