import {addMessageAC, DialogsReducerACType, updateMessageTextAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch:(action: DialogsReducerACType)=> void) => {
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
