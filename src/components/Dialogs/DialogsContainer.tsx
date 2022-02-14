import {GeneralType} from "../../redux/store";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch:(action: GeneralType)=> void) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateMessageText: (text: string) => {
            dispatch(updateMessageTextAC(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
