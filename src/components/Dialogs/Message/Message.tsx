import s from "./Message.module.css";
import React from "react";

type MessagePropsType = {
    message: string
    myMessage: boolean
}
export const Message = (props: MessagePropsType) => {
    return (
        <div className={props.myMessage? s.left : s.right}>{props.message}</div>
    )
}