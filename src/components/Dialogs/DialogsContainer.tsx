import {addMessageAC, DialogsReducerACType} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import React from "react";


const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: (action: DialogsReducerACType) => void) => {
    return {
        addMessage: (message: string) => {
            dispatch(addMessageAC(message))
        },
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(Dialogs)



