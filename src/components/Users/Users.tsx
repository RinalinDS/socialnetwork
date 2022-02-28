import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/avatar2.png";
import {UserType} from "../../redux/userReducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/usersAPI";


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
                                        props.followInProgress(m.id, true)
                                        usersAPI.unfollowUser(m.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollowUser(m.id)
                                                }
                                                props.followInProgress(m.id, false)
                                            })


                                    }}>Unfollow</button>

                            : <button disabled={props.isFollowingInProgress.some(s => s === m.id)}
                                      onClick={() => {
                                          props.followInProgress(m.id, true)
                                          usersAPI.followUser(m.id)
                                              .then(data => {
                                                  if (data.resultCode === 0) {
                                                      props.followUser(m.id)
                                                  }
                                                  props.followInProgress(m.id, false)
                                              })


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
