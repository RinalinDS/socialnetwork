import React from 'react';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import App, {stateType} from "./App";
import ReactDOM from "react-dom";



export const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <App
            state={state}
            dispatch={store.dispatch.bind(store)}
        />
        ,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
