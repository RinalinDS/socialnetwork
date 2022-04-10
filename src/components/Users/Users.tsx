import React from 'react';
import {UserType} from "../../redux/userReducer";
import {Paginator} from '../../common/Paginator/Paginator';
import User from './User';


interface PropsType {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: UserType[]
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    isFollowingInProgress: number[]
    followInProgress: (id: number, isFetching: boolean) => void
}


export const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}: PropsType) => {

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>

            <p>USERS :</p>
            {props.users.map(m => <User user={m} followUser={props.followUser} unfollowUser={props.unfollowUser}
                                        isFollowingInProgress={props.isFollowingInProgress}
                                        followInProgress={props.followInProgress}/>)}


        </div>
    );
};
