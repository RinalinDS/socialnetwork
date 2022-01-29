import React from 'react';
import s from './Dialog.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Message} from "./Message/Message";
import {dialogsType, messageType, postsType} from "../../App";


type propsType = {
    messages : Array<messageType>
    dialogs : Array<dialogsType>
}

export const Dialogs = (props: propsType) => {



    let messageElements = props.messages.map(m => <Message message={m.message}/>)
    let dialogsElements = props.dialogs.map(m => <DialogItems name={m.name} id={m.id}/>)

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
