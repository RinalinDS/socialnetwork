import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogItemspropsType = {
    name: string
    id: string
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

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name={'Lesha'} id={'1'}/>
                <DialogItems name={'Sasha'} id={'2'}/>
                <DialogItems name={'Pasha'} id={'3'}/>
                <DialogItems name={'Masha'} id={'4'}/>
                <DialogItems name={'Dasha'} id={'5'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'How r u today?'}/>
                <Message message={'Bad boys what you gonna do ?'}/>
            </div>
        </div>
    );
};
