import React from "react";
import s from './ProfileInfo.module.css'
import {profileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import preloader from './../../../assets/images/preloader.gif'
import {ProfileStatus} from './ProfileStatus';


type ProfileInfoPropsType = {
    profile: profileType
    status: string
    updateUserStatus: (userId: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile.photos) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img src="https://oceanservice.noaa.gov/facts/sea.jpg" alt="seas"/>
            </div>*/}
            <div className={s.block}>
                <img src={props.profile.photos.small ? props.profile.photos.small : preloader} alt={'preloader'}/>
                <div> {props.profile.fullName} </div>
                <div> {props.profile.contacts.github}</div>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}