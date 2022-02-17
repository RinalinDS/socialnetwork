import React from 'react';
import {UserType} from "../../redux/userReducer";
import s from './Users.module.css'

type propsType = {
    users: Array<UserType>
    toggleFollowUser: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}

const Users = (props: propsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                status: 'ya ebu',
                followed: true,
                avatar: 'https://memax.club/wp-content/uploads/2019/05/Kartinki_bez_lica_1_29050439.jpg',
                fullName: "Denis",
                location: {country: 'Ukraine', city: 'Kiev'}
            },
            {
                id: 2,
                status: 'ali babu',
                followed: false,
                avatar: 'https://memax.club/wp-content/uploads/2019/05/Kartinki_bez_lica_1_29050439.jpg',
                fullName: "Jora",
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 3,
                status: 'ya ebu',
                followed: true,
                avatar: 'https://memax.club/wp-content/uploads/2019/05/Kartinki_bez_lica_1_29050439.jpg',
                fullName: "Valera",
                location: {country: 'Russia', city: 'Spb'}
            }
        ])
    }
    return (
        <div>
            USERS :
            {props.users.map(m => {
                return (
                    <div key={m.id}>
                        <img src={m.avatar} alt={'avatar'} className={s.photo}/>
                        <div>
                            <button
                                onClick={() => props.toggleFollowUser(m.id)}>{m.followed ? "Unfollow" : "Follow"}
                            </button>
                        </div>
                        <div>{m.fullName}</div>
                        <div>{m.location.city}</div>
                        <div>{m.location.country}</div>
                        <div>{m.status}</div>

                    </div>
                )
            })}
        </div>
    );
};

export default Users;