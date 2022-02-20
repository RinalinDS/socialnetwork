import axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import userPhoto from './../../assets/images/avatar2.png'
import {UserType} from "../../redux/userReducer";

interface Props {
    users: Array<UserType>
    toggleFollowUser: (id: number) => void
    setUsers: (users: UserType[]) => void
}

class Users extends React.Component<Props> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }
    render() {
        return (
        <div>

            <p>USERS :</p>
            {this.props.users.map(m => {
                return (
                    <div key={m.id}>


                        <div>
                            <img src={m.photos.small ? m.photos.small : userPhoto} alt={'avatar'} className={s.photo}/>
                        </div>
                        <button
                            onClick={() => this.props.toggleFollowUser(m.id)}>{m.followed ? "Unfollow" : "Follow"}
                        </button>
                        <div>{m.name}</div>


                        <div>{'city'}</div>
                        <div>{'location'}</div>
                        <div>{m.status}</div>

                    </div>
                )
            })}
        </div>
        )}

}


export default Users;