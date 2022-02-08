import React, {createRef} from 'react';
import s from './Dialog.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Message} from "./Message/Message";
import {dialogsType, messageType} from "../../App";
import {addMessageAC, GeneralType, updateMessageTextAC} from "../../redux/state";


type propsType = {
    messages: Array<messageType>
    dialogs: Array<dialogsType>

    newMessageText: string
    dispatch: (action: GeneralType) => void
}

export const Dialogs = (props: propsType) => {


    let messageElements = props.messages.map(m => <Message message={m.message} myMessage={m.myMessage}/>)
    let dialogsElements = props.dialogs.map(m => <DialogItems name={m.name} id={m.id} avatar={m.avatar}/>)

    let newMessage = createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.dispatch(addMessageAC())
        props.dispatch(updateMessageTextAC(''))

    }

    const onChangeHandler = () => {
        if (newMessage.current) {
            let text = newMessage.current.value
            props.dispatch(updateMessageTextAC(text))
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.textarea}>
                    <textarea value={props.newMessageText} ref={newMessage} onChange={onChangeHandler}> </textarea>
                    <div>
                        <button onClick={addMessage}>add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
