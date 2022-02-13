import React from 'react';
import {GeneralType} from "../../redux/store";
import {addMessageAC, dialogsReducerStateType, updateMessageTextAC} from "../../redux/dialogsReducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


type propsType = {
    dispatch: (action: GeneralType) => void
}

export const DialogsContainer = ({dispatch}: propsType) => {

    const state = useSelector<AppRootStateType, dialogsReducerStateType>(state => state.dialogsPage)


    const addMessage = () => {
        dispatch(addMessageAC())
    }

    const updateMessageText = (text: string) => {
        dispatch(updateMessageTextAC(text))
    }


    return (
        <Dialogs
                 dialogs={state.dialogs}
                 messages={state.messages}
                 newMessageText={state.newMessageText}
                 addMessage={addMessage}
                 updateMessageText={updateMessageText}
        />

    )
}
