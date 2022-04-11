import React from 'react';
import s from './Dialog.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Message} from "./Message/Message";

import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControl";
import {dialogsType, messageType} from '../../Types/AppTypes';

const maxLength50 = maxLengthCreator(50)

type propsType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
    addMessage: (message: string) => void
    isAuth: string
}
type FormDataType = {
    message: string
}

export const Dialogs = (props: propsType) => {


    let messageElements = props.messages.map(m => <Message message={m.message} myMessage={m.myMessage}/>)
    let dialogsElements = props.dialogs.map(m => <DialogItems name={m.name} id={m.id} avatar={m.avatar}/>)

    const addMessage = (data: FormDataType) => {
        props.addMessage(data.message)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messageElements}

                <div className={s.textarea}>
                    <ReduxAddMessageForm onSubmit={addMessage}/>
                </div>
            </div>
        </div>
    );
};


const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength50]} component={Textarea} name={'message'}
                       placeholder={'Enter your Message'}/>
            </div>
            <div>
                <button>send message</button>
            </div>
        </form>
    )

}

const ReduxAddMessageForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

