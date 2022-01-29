import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postsData = [
    {id: 1, message: "General Kenobi!", likescount: 7},
    {id: 1, message: "Hello There", likescount: 10},
    {id: 1, message: "YOU WERE MY BROTHER ANAKIN", likescount: 141},
]
const dialogaData = [
    {id: 1, name: 'Lesha', bonjorno: "ok"},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Pasha'},
    {id: 4, name: 'Masha'},
    {id: 5, name: 'Dasha'},
]

const messageData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How r u today?'},
    {id: 3, message: 'Bad boys what you gonna do ?'},
    {id: 4, message: 'When we come for you?'},
]

ReactDOM.render(
    <React.StrictMode>
        <App
            posts={postsData}
            messages={messageData}
            dialogs={dialogaData}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
