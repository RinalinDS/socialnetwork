import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogItemspropsType = {
    name: string
    id: number
}

export const DialogItems = ({name, id}: DialogItemspropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}
type MessagePropsType = {
    message: string
}


export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const dialogaData = [
    {id: 1, name: 'Lesha'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Pasha'},
    {id: 4, name: 'Masha'},
    {id: 5, name: 'Dasha'},
]

const messageData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How r u today?'},
    {id: 3, message: 'Bad boys what you gonna do ?'},
]

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name={dialogaData[0].name} id={dialogaData[0].id}/>
                <DialogItems name={dialogaData[1].name} id={dialogaData[1].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>


            </div>
        </div>
    );
};
