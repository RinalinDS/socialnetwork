import React, {useState} from 'react';
import s from "./Paginator.module.css";


type PropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (page: number) => void
  portionSize?: number
}


export const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}: PropsType) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
  const leftSideBorder = (portionNumber - 1) * portionSize + 1
  const rightSideBorder = portionNumber * portionSize

  return (
    <>

      <div className={s.paginator}>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Previous</button>}
        {pages
          .filter(f => f >= leftSideBorder && rightSideBorder >= f)
          .map(m => <span
            className={`${s.pageNumber} ${currentPage === m ? s.selectedPage : ''} `}
            key={m}
            onClick={() => onPageChanged(m)}
          > {m} </span>)}
        {portionCount > portionNumber &&
          <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
      </div>

    </>
  );
};
