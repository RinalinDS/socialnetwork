import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialog.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Message} from "./Message/Message";
import {dialogsType, messageType} from "../../App";
import {Redirect} from "react-router-dom";


type propsType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
    newMessageText: string
    addMessage: () => void
    updateMessageText: (text: string) => void
    isAuth: boolean
}

export const Dialogs = (props: propsType) => {

    let messageElements = props.messages.map(m => <Message message={m.message} myMessage={m.myMessage}/>)
    let dialogsElements = props.dialogs.map(m => <DialogItems name={m.name} id={m.id} avatar={m.avatar}/>)

    const addMessage = () => {
        props.addMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            let text = e.currentTarget.value
            props.updateMessageText(text)
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.code === "Enter") {
            e.preventDefault()
            addMessage()
        }
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messageElements}

                <div className={s.textarea}>
                    <textarea value={props.newMessageText} onKeyPress={onKeyPressHandler}
                              onChange={onChangeHandler}> </textarea>
                    <div>
                        <button onClick={addMessage}>add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
