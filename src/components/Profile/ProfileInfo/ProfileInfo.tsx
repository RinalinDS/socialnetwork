import React from "react";
import s from './ProfileInfo.module.css'
import {profileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../common/Preloader";

type ProfileInfoPropsType = {
    profile: profileType

}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile.photos) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://oceanservice.noaa.gov/facts/sea.jpg" alt="seas"/>
            </div>
            <div className={s.block}>
                <img src={props.profile.photos.small ? props.profile.photos.small : ''} alt={'preloader'}/>
                <div> {props.profile.fullName} </div>
                <div> {props.profile.contacts.github}</div>

            </div>
        </div>
    )
}