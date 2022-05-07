import React, {ChangeEvent, FC, useState} from "react";
import s from './ProfileInfo.module.css'
import {profileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {ProfileData} from './ProfileData';
import preloader from '../../../assets/images/preloader.gif';
import {ProfileUpdateForm} from './ProfileUpdateForm';


type ProfileInfoPropsType = {
  profile: profileType
  status: string
  updateUserStatus: (userId: string) => void
  isOwner: boolean
  savePhoto: (file: any) => void
}
// file: File | null

export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
  const [edit, setEdit] = useState(false)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    savePhoto(e.target.files && e.target.files[0])
  }
  const onClickHandler = () => {
    setEdit(true)
  }
  if (!profile.photos) {
    return <Preloader/>
  }
  return (
    <div>
      <div className={s.block}>
        {isOwner &&
          <div style={{marginTop: '5px', marginBottom: '5px'}}><input type='file' onChange={onChangeHandler}/></div>}
        <img src={profile.photos.large || preloader} alt={'preloader'}/>

        {edit ? <ProfileUpdateForm setEdit={setEdit} profile={profile}/> :
          <ProfileData profile={profile} isOwner={isOwner}
                       onClickHandler={onClickHandler}/>}


        <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
      </div>
    </div>
  )
}

