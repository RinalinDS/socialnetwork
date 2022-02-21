import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/avatar2.png";
import {UserType} from "../../redux/userReducer";


interface PropsType {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: UserType[]
    toggleFollowUser: (id: number) => void
}


export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)/300
    let pages = []
    for (let i = 1; i <= pagesCount ; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>{pages.map(m => <span className={props.currentPage === m ? s.currentPage : ''}
                                       onClick={()=> props.onPageChanged(m)}
            >{m} </span>)}</div>

            <p>USERS :</p>
            {props.users.map(m => {
                return (
                    <div key={m.id}>


                        <div>
                            <img src={m.photos.small ? m.photos.small : userPhoto} alt={'avatar'}
                                 className={s.photo}/>
                        </div>
                        <button
                            onClick={() => props.toggleFollowUser(m.id)}>{m.followed ? "Unfollow" : "Follow"}
                        </button>
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
