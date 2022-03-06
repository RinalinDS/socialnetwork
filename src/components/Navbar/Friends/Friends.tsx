import React from 'react';
import {FriendsType} from "../../../App";
import s from './Friends.module.css'

type propsType = {
    friends : Array<FriendsType>
}

export const Friends = (props: propsType) => {
    return (
        <div className={s.friends}>
            <h2>Friends:</h2>
            {props.friends.map((m,i) => <span key={i}>{m.name} </span>)}
            </div>
    );
};

