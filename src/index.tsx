import React from 'react';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, state, subscribe, updateMessageText, updatePostMessage} from "./redux/state";
import App, {stateType} from "./App";
import ReactDOM from "react-dom";



export const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updatePostMessage={updatePostMessage}
            addMessage={addMessage}
            updateMessageText={updateMessageText}
        />
        ,
        document.getElementById('root')
    );

}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
