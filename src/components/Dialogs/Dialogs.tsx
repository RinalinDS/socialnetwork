import React from 'react';
import s from './Dialog.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Message} from "./Message/Message";


export const Dialogs = () => {

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
        {id: 4, message: 'When we come for you?'},
    ]

    let messageElements = messageData.map(m => <Message message={m.message}/>)
    let dialogsElements = dialogaData.map(m => <DialogItems name={m.name} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }

            </div>
            <div className={s.messages}>
                { messageElements }


            </div>
        </div>
    );
};
