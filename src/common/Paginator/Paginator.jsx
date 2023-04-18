import React, {useEffect} from 'react';
import s from "../../Content/Users/User.module.css";
import {useState} from "react";


let Paginator = ({totalUsersCount, pageSize, currentPage, onChangePage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let firstPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let endPortionPageNumber = portionNumber * portionSize;


    return(
        <div>
            {portionNumber > 1 &&
                <button onClick={() => setPortionNumber( prev => prev - 1) }>{"<<"}</button>
            }

            {portionNumber > 1 &&
                <span>
                    <button onClick={() => setPortionNumber( 1)}>{"First"}</button>
                    <span>{'. . .'}</span>
                </span>

            }

            {pages
                .filter(p => p >= firstPortionPageNumber && p <= endPortionPageNumber).map((p) => {
                    return (
                        <span className={p === currentPage ? s.activePage: s.pageCounter} onClick={() => onChangePage(p)}>{p}</span>
                    )
            })}

            {
                portionCount > portionNumber &&
                <span>
                    <span>{'. . .'}</span>
                    <button onClick={() => setPortionNumber( portionCount)}>{"Last"}</button>
                </span>
            }


            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber( prev => prev + 1) }>{">>"}</button>
            }
        </div>
    )
}

export default Paginator;