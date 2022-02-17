import React from 'react';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import App from "./App";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        ,
        document.getElementById('root')
    );

}

rerenderEntireTree()

store.subscribe(()=> {
    rerenderEntireTree()
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();