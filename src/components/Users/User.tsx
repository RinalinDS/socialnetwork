import React from 'react';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../assets/images/avatar2.png';
import s from './Users.module.css';
import {UserType} from '../../redux/userReducer';

type propsType = {
  user: UserType
  followUser: (id: number) => void
  unfollowUser: (id: number) => void
  isFollowingInProgress: number[]
  followInProgress: (id: number, isFetching: boolean) => void
}

const User = ({user, ...props}: propsType) => {
  return (
    <div>
      <div>
        <NavLink to={'/profile/' + user.id}> <img
          src={user.photos.small ? user.photos.small : userPhoto} alt={'avatar'}
          className={s.photo}/></NavLink>
      </div>
      {user.followed ?
        <button disabled={props.isFollowingInProgress.some(s => s === user.id)}
                onClick={() => {
                  props.unfollowUser(user.id)
                }}>Unfollow</button>

        : <button disabled={props.isFollowingInProgress.some(s => s === user.id)}
                  onClick={() => {
                    props.followUser(user.id)
                  }}>Follow</button>
      }
      <div>{user.name}</div>
      <div>{'city'}</div>
      <div>{'location'}</div>
      <div>{user.status}</div>
    </div>
  );
};

export default User;