import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/avatar2.png";
import {followUser, unfollowUser, UserType} from "../../redux/userReducer";
import {NavLink} from "react-router-dom";


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


export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) / 100
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>{pages.map(m => <span className={props.currentPage === m ? s.currentPage : ''}
                                       onClick={() => props.onPageChanged(m)}
            >{m} </span>)}</div>

            <p>USERS :</p>
            {props.users.map(m => {
                return (
                    <div key={m.id}>
                        <div>
                            <NavLink to={'/profile/' + m.id}> <img
                                src={m.photos.small ? m.photos.small : userPhoto} alt={'avatar'}
                                className={s.photo}/></NavLink>
                        </div>
                        {m.followed ?
                            <button disabled={props.isFollowingInProgress.some(s => s === m.id)}
                                    onClick={() => {
                                        unfollowUser(m.id)
                                    }}>Unfollow</button>

                            : <button disabled={props.isFollowingInProgress.some(s => s === m.id)}
                                      onClick={() => {
                                          followUser(m.id)
                                      }}>Follow</button>
                        }
                        <div>{m.name}</div>
                        <div>{'city'}</div>
                        <div>{'location'}</div>
                        <div>{m.status}</div>

                    </div>
                )
            })}
        </div>
    );
};
