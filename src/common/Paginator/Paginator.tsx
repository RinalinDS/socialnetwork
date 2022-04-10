import React from 'react';
import s from "./Paginator.module.css";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}


export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}: PropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize) / 100
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>{pages.map(m => <span className={currentPage === m ? s.currentPage : ''}
                                   onClick={() => onPageChanged(m)}
        >{m} </span>)}</div>
    );
};
