import axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import userPhoto from './../../assets/images/avatar2.png'
import {UsersPropsType} from "./UsersContainer";

type Props = UsersPropsType

class Users extends React.Component<Props> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }
    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })

    }



    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)/300
        let pages = []
        for (let i = 1; i <= pagesCount ; i++) {
            pages.push(i)
        }

        return (

            <div>
                <div>{pages.map(m => <span className={this.props.currentPage === m ? s.currentPage : ''}
                onClick={()=> this.onPageChanged(m)}
                >{m} </span>)}</div>

                <p>USERS :</p>
                {this.props.users.map(m => {
                    return (
                        <div key={m.id}>


                            <div>
                                <img src={m.photos.small ? m.photos.small : userPhoto} alt={'avatar'}
                                     className={s.photo}/>
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
        )
    }

}


export default Users;