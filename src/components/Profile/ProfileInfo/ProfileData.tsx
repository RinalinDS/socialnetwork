import {profileType} from '../../../redux/profileReducer';
import React, {FC} from 'react';

type ProfileDataPropsType = {
  profile: profileType
  isOwner: boolean
  onClickHandler: () => void
}
export const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, onClickHandler}) => {
  return (
    <div>


      {isOwner && <div>
        <button onClick={onClickHandler}>Edit Profile</button>
      </div>}
      <div><b>Full name :</b> {profile.fullName} </div>
      <div><b>Looking for a job :</b> {profile.lookingForAJob ? 'Looking' : 'Just watching'} </div>
      <div><b>Resume :</b> {profile.lookingForAJobDescription} </div>
      <div><b>About me :</b> {profile.aboutMe} </div>
      <div><b>Contacts:</b></div>
      <div style={{padding: '10px'}}>


        {profile.contacts && profile.contacts.vk && <div><b>VK :</b> {profile.contacts && profile.contacts.vk}</div>}
        {profile.contacts && profile.contacts.facebook &&
          <div><b>FACEBOOK :</b>{profile.contacts && profile.contacts.facebook}</div>}
        {profile.contacts && profile.contacts.twitter &&
          <div><b>TWITTER :</b>{profile.contacts && profile.contacts.twitter}</div>}
        {profile.contacts && profile.contacts.youtube &&
          <div><b>YOUTUBE :</b> {profile.contacts && profile.contacts.youtube}</div>}
        {profile.contacts && profile.contacts.github &&
          <div><b>GITHUB :</b> {profile.contacts && profile.contacts.github}</div>}
      </div>
    </div>
  )
}